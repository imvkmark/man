# uname

打印系统信息

```
uname [OPTION]...
```

## 主要用途

-   打印机器和操作系统的信息。
-   当没有选项时，默认启用 `-s` 选项。
-   如果给出多个选项或 `-a` 选项时，输出信息按以下字段排序：内核名称 主机名称 内核 release 内核版本
    机器名称 处理器 硬件平台 操作系统。

## 选项

`-a`, `--all`
显示所有的信息, 按顺序打印，如果 -p 和 -i 的信息是未知，那么省略

`-i, --hardware-platform`

打印硬件平台名称

`-m`, `--machine`

显示机器(硬件)类型

`-n`, `--nodename`

显示机器的网络节点主机名

`-r, --release, --kernel-release`
显示操作系统发行版本

`-s, --sysname, --kernel-name`

显示操作系统名, 打印内核名称

`-o, --operating-system`

打印操作系统名称

`-p`, `--processor`

显示主机处理器(CPU)类型

`-v, --kernel-version`

显示操作系统版本, 打印内核版本

`--help`

显示本帮助并退出

`--version`

显示版本信息并退出

## 例子

```
# 单独使用uname命令时相当于uname -s
[root@localhost ~]# uname
Linux
```

```
# 查看全部信息
[root@localhost ~]# uname -a
Linux localhost 2.6.18-348.6.1.el5 #1 SMP Tue May 21 15:34:22 EDT 2013 i686 i686 i386 GNU/Linux
```

```
# 分别列出信息
[root@localhost ~]# uname -m
i686

[root@localhost ~]# uname -n
localhost

[root@localhost ~]# uname -r
2.6.18-4-686

[root@localhost ~]# uname -s
Linux

[root@localhost ~]# uname -v
#1 SMP Tue May 21 15:34:22 EDT 2013

[root@localhost ~]# uname -p
i686

[root@localhost ~]# uname -i
i386

[root@localhost ~]# uname -o
GNU/Linux
```

## 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 uname`，`info coreutils 'uname invocation'`。
