# sftp

交互式的文件传输程序

**sftp 命令** 是一款交互式的文件传输程序，命令的运行和使用方式与 ftp 命令相似，但是，sftp 命令对传输的所有信息使用 ssh 加密，它还支持公钥认证和压缩等功能, 所以安全性比 ftp 要好得多

## 语法

```
sftp(选项)(参数)
```

## 选项 & 参数

```
-B：指定传输文件时缓冲区的大小；
-l：使用ssh协议版本1；
-b：指定批处理文件；
-C：使用压缩；
-o：指定ssh选项；
-F：指定ssh配置文件；
-R：指定一次可以容忍多少请求数；
-v：升高日志等级。
```

目标主机：指定 sftp 服务器 ip 地址或者主机名。

## 实例

`sftp [host]`
通过 sftp 连接[host]，端口为默认的 22，用户为 Linux 当前登录用户
`sftp -oPort=[port] [host]`
通过 sftp 连接[host]，指定端口[port]，用户为 Linux 当前登录用户
`sftp [user]@[host]`
通过 sftp 连接[host]，端口为默认的 22，指定用户[user]
`sftp -oPort=[port] [user]@[host]`
通过 sftp 连接[host]，端口为[port]，用户为[user]

## 常用命令

`help` `/?`

打印帮助信息。

`pwd`

查看远程服务器当前目录；

`lpwd`

查看本地系统的当前目录。

`cd [dir]`

将远程服务器的当前目录更改为`[dir]`；

`lcd [dir]`

将本地系统的当前目录更改为`[dir]`。

`ls`

显示远程服务器上当前目录的文件名；

`ls -l`

显示远程服务器上当前目录的文件详细列表；

`ls [pattern]`

显示远程服务器上符合指定模式`[pattern]`的文件名；

`ls -l [pattern]`

显示远程服务器上符合指定模式`[pattern]`的文件详细列表。

`lls`

显示本地系统上当前目录的文件名；
lls 的其他参数与 ls 命令的类似。

`get [file]`

下载指定文件`[file]`；

`get [pattern]`

下载符合指定模式`[pattern]`的文件。

`put [file]`

上传指定文件`[file]`；

`get [pattern]`

上传符合指定模式`[pattern]`的文件。

`progress`

切换是否显示文件传输进度。

`mkdir [dir]`

在远程服务器上创建目录；

`lmkdir [dir]`

在本地系统上创建目录。

`exit/quit/bye`

退出 sftp。

`!`

启动一个本地 shell。

`! [commandline]`

执行本地命令行。
其他命令还有：chgrp, chmod, chown, ln, lumask, rename, rm, rmdir, symlink, version。

## 比较常用的命令

主要是介绍 windows 与 linux 文件传输
`get`
从远程服务器上下载一个文件存放到本地，如下：
先通过 lcd 切换到本地那个目录下，然后通过 get file

```
// 表示切换到本地的d盘下，将下载到本目录下，如果不做切换，将下载到XManager的安装目录下
lcd d:\
// 这样就将当前文件下载本地的d盘下
get ./test.sql　　
```

`put`
是将本地的文件上传到远程服务器上，如下：

```
//在windows下弹出选择文件的窗口，也可以在widows下直接选定文件后拖放到XShell的Xftp的字符面板中，即可复制到
]]  put
// xftp当前的路径下，下载文件夹的话，先打包（右键选中文件-]创建归档文件）然后再下载
```

`lcd`
先通过 lcd 切换到本地那个目录下

```
//表示切换到本地的d盘下
]] lcd d:\
```

`lls`
显示当前目录下的所有文件
[
`pwd`
显示当前目录
