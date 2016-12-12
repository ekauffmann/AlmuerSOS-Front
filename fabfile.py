# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import re
import os

from fabric.api import env
from fabric.colors import yellow
from fabric.context_managers import cd, shell_env
from fabric.operations import local, sudo


PROJECT_NAME = 'almuersos'
GIT_REPO = 'git@github.com:ekauffmann/AlmuerSOS-Front.git'


def development(tag):
    env.name = 'develop'
    env.hosts = ['develop.almuersos.cl']
    env.deploy_user = 'almuersos-front-dev'
    env.migrate_db = True
    set_env_vars(tag)


def production(tag):
    env.name = 'prod'
    env.hosts = ['almuersos.cl']
    env.deploy_user = 'almuersos-front-prod'
    env.migrate_db = True
    set_env_vars(tag)


def set_env_vars(tag):
    env.tag = tag
    env.tag_clean = re.sub(r'[/\.]', '_', env.tag)

    env.user = 'ubuntu'  # User with sudo
    env.home = '/home/{0:s}'.format(env.deploy_user)

    env.git_repo_url = local('git config --get remote.origin.url', capture=True)
    env.git_repo_path = os.path.join(env.home, 'repos', env.tag_clean)


def deploy():
    prepare_environment()
    repo_update()
    repo_activate_version()
    build_project()
    restart_services()


def prepare_environment():
    print(yellow('\nPreparing environment'))
    with shell_env(HOME=env.home), cd(env.home):
        sudo('mkdir -p repos', user=env.deploy_user)


def repo_update():
    print(yellow('\nUpdate repository'))
    with shell_env(HOME=env.home), cd('{0:s}/repos'.format(env.home)):
        sudo(
            '[ ! -d {0:s} ] && git clone {1:s} {0:s} || (cd {0:s} && git fetch)'.format(
                env.git_repo_path,
                GIT_REPO
            ),
            user=env.deploy_user
        )


def repo_activate_version():
    print(yellow('\nActivating repository version'))
    with shell_env(HOME=env.home), cd(env.git_repo_path):
        sudo(
            'git checkout {0:s}'.format(env.tag),
            user=env.deploy_user
        )
        sudo(
            'git pull'.format(env.tag),
            user=env.deploy_user
        )


def build_project():
    print(yellow('\nBuild project'))
    with shell_env(HOME=env.home), cd(env.git_repo_path):
        sudo('npm install', user=env.deploy_user)
        sudo(
            'ng build --target=production --environment={0:s}'.format(env.name),
            user=env.deploy_user
        )
        sudo('rm -f current && ln -s dist current', user=env.deploy_user)


def restart_services():
    print(yellow('\nRestarting services'))
    sudo('service nginx reload', pty=False)
