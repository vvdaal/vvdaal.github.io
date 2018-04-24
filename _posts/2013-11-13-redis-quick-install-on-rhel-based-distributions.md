---
layout: post
title: Redis quick install on RHEL based distributions
date: 2013-11-13 10:00
categories: Tutorial, Linux Stuff
---
This short tutorial sums up on how to compile / install Redis.
This instruction should generally work on any Redhat based distro :-)

I’ve tested this on CentOS 6.4.

**Be sure to run these commands as root.**
First make sure repo’s and your packages are up-to-date:

    sudo yum update

Install required prerequisites for compiling with the following command:

    sudo yum install make gcc wget tcl

Download latest version of Redis and compile it:

    cd /opt/
    wget http://download.redis.io/redis-stable.tar.gz
    tar xvzf redis-stable.tar.gz
    cd redis-stable
    make

Testing Redis (Recommended):

    make test

Now run make install to copy the files to the correct location in /usr/local/bin/
(Thanks to Tassos for pointing this out)

    make install

Start installation using the supplied script from Redis:

    cd /opt/redis-stable/utils
    ./install_server.sh

Answer the questions asked, I recommend going with the default values for clarity sake but feel free to customize.

To start Redis:

Replace 6379 with the actual port that you have chosen during the installation.

    service redis_6379 start

update.rc error when running the install_server.sh script
---------------------------------------------------------

If you get an update.rc error from the installation script, which I encountered using Redis 2.6.16, edit the init script using your favourite text editor.
The location is /etc/init.d/ and the file name is redis_6379 (6379 is the port you have chosen earlier in the installation so this may differ from yours)

Replace “6379” in this example init script with the port you are using for Redis.

    #/bin/sh
    # chkconfig: 2345 95 20
    # description: Init script for Redis on port 6379
    #Configurations injected by install_server below....
    EXEC=/usr/local/bin/redis-server
    CLIEXEC=/usr/local/bin/redis-cli
    PIDFILE=/var/run/redis_6379.pid
    CONF="/etc/redis/6379.conf"
    REDISPORT="6379"
    ###############

    case "$1" in
    start)
    if [ -f $PIDFILE ]
    then
    echo "$PIDFILE exists, process is already running or crashed"
    else
    echo "Starting Redis server..."
    $EXEC $CONF
    fi
    ;;
    stop)
    if [ ! -f $PIDFILE ]
    then
    echo "$PIDFILE does not exist, process is not running"
    else
    PID=$(cat $PIDFILE)
    echo "Stopping ..."
    $CLIEXEC -p $REDISPORT shutdown
    while [ -x /proc/${PID} ]
    do
    echo "Waiting for Redis to shutdown ..."
    sleep 1
    done
    echo "Redis stopped"
    fi
    ;;
    *)
    echo "Please use start or stop as first argument"
    ;;
    esac

And finish the fix with adding Redis at startup:

    chkconfig --add redis_6379
    chkconfig --level 345 redis_6379 on

This article was inspired by the Linode article [https://library.linode.com/databases/redis/centos-5](https://library.linode.com/databases/redis/centos-5) and the official Redis installation instructions on [http://redis.io/topics/quickstart](http://redis.io/topics/quickstart)
