# Администрирование сервера

## OS
Ubuntu 14.04.2 LTS (GNU/Linux 2.6.32-042stab108.8 x86_64)

## Init
```
apt-get update
apt-get upgrade

locale-gen en_US en_US.UTF-8 ru_RU.UTF-8
dpkg-reconfigure locales

apt-get install zip ack-grep
apt-get install curl libcurl4-openssl-dev libexpat1-dev gettext zlib1g-dev
apt-get install libcurl4-gnutls-dev libexpat1-dev libz-dev libssl-dev
apt-get install asciidoc xmlto docbook2x
apt-get install software-properties-common
apt-get install python-software-properties
```

## Создать пользователя
```
useradd pskucherov
mkdir /home/pskucherov
passwd pskucherov
chown pskucherov /home/pskucherov
chgrp pskucherov /home/pskucherov
adduser pskucherov sudo
```

## Установить nodejs
```
wget https://nodejs.org/dist/v4.4.4/node-v4.4.4.tar.gz
configure
make install clean
npm install -g npm
```

## Установить mongodb
```
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
apt-get update
apt-get install -y mongodb-org
service mongod start
```

## Установит git
```
add-apt-repository ppa:git-core/ppa
apt-get update
apt-get install git
```

## Установка dotfiles
`git clone git://github.com/ignovak/dotfiles ~/dotfiles && ~/dotfiles/install.sh`

## Установка zsh
```
apt-get install zsh
usermod pskucherov -s /usr/bin/zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

Git Aliases: https://github.com/robbyrussell/oh-my-zsh/wiki/Cheatsheet#git

## Установка nginx

https://www.nginx.com/resources/wiki/start/topics/tutorials/install/
```
sudo -s
nginx=stable # use nginx=development for latest development version
add-apt-repository ppa:nginx/$nginx
apt-get update
apt-get install nginx
```

## SSL-сертификат

https://letsencrypt.org/getting-started/
```
git clone https://github.com/certbot/certbot
cd certbot
./certbot-auto certonly
```
