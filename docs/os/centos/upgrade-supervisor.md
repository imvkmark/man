# Centos 使用 pip3 安装/升级 supervisor

安装的时候, 因为国内外访问环境不同, 可能会出现国内访问速度慢情况, 可以考虑更换源 : [更换镜像源 , 加速 python 安装](https://lang-python.wulicode.com/zh_CN/latest/python/mirror.html)

## 安装 Python3

```
$ yum install vim git yum-utils python3 python3-devel
$ pip3 install --upgrade pip
```

## 安装 Supervisor

**安装 Supervisor**

```sh
$ pip3 install supervisor
```


这里安装完成之后, 执行文件在 `/usr/local/bin/` 目录下, 这个目录下存在三个文件

```
echo_supervisord_conf    # 输出配置文件
supervisorctl            # supervisor 控制
supervisord              # supervisor 守护进程
```

如果使用 `sudo pip3 install --user supervisor` 进行安装,则安装的目录会在 `~/.local/bin` 目录下, 这里我们选择使用 root 用户来安装, 然后运行. 

使用之前版本或者是 yum 安装的版本安装的位置一般会在 `/usr/bin` 目录下, 如果是多版本 `supervisor` 可以通过路径来进行区分


**增加配置文件**

```
# 生成配置文件
$ echo_supervisord_conf > /etc/supervisord.conf
```

**增加服务管理**

使用 `systemctl` 来启动 supervisor，文件内容

文件地址: [initscripts/centos-systemd-etcs](https://github.com/Supervisor/initscripts/blob/master/centos-systemd-etcs)


```
$ vim /usr/lib/systemd/system/supervisord.service
```

```
# supervisord service for systemd (CentOS 7.0+)
# by ET-CS (https://github.com/ET-CS)
[Unit]
Description=Supervisor daemon

[Service]
Type=forking
ExecStart=/usr/local/bin/supervisord -c /etc/supervisord.conf
ExecStop=/usr/local/bin/supervisorctl $OPTIONS shutdown
ExecReload=/usr/local/bin/supervisorctl $OPTIONS reload
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]
WantedBy=multi-user.target
```

**启动 Supervisord**
```
# 如果对 supervisord.service 中更改了路径, 则需要重新加载内容
$ systemctl daemon-reload
$ systemctl start supervisord
```

## 参考

**常用的命令**

```
supervisorctl stop program
supervisorctl start program
supervisorctl restart program
supervisorctl status
supervisorctl reload
```


**升级**

升级的逻辑是安装新的版本, 然后删除旧版本

如果是通过 yum 安装或者 pip(2.x) 版本安装的, 则可以对老板板进行删除
```
$ yum remove supervisor

# 移除 python2 版本的, 如果 pip 链接到 pip3 , 则无法使用这个进行卸载
$ pip uninstall supervisor
```

**使用非 root 用户来管理supervisor**

由于默认使用非 root 用户启动服务，所以需要单独配置允许其使用。官方这个 Issue 中提到了解决方法：

[Permession denied error when use supervisorctl · Issue #173 · Supervisor/supervisor · GitHub](https://github.com/Supervisor/supervisor/issues/173#issuecomment-186128727)

```
$ groupadd supervisor
$ usermod -aG supervisor doraemon

$ sed -i "s/;chmod=0700/chmod=0770/" /etc/supervisord.conf
$ sed -i "s/;chown=nobody:nogroup/chown=root:supervisor/" /etc/supervisord.conf
```