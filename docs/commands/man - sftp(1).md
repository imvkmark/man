# man - sftp(1)

sftp命令可以通过ssh来上传和下载文件，是常用的文件传输工具，它的使用方式与ftp类似，但它使用ssh作为底层传输协议，所以安全性比ftp要好得多


文章来源: http://blog.csdn.net/hujunqi/article/details/9423599

## 简要介绍
`sftp [host]`
    通过sftp连接[host]，端口为默认的22，用户为Linux当前登录用户
`sftp -oPort=[port] [host]`
    通过sftp连接[host]，指定端口[port]，用户为Linux当前登录用户
`sftp [user]@[host]`
    通过sftp连接[host]，端口为默认的22，指定用户[user]
`sftp -oPort=[port] [user]@[host]`
    通过sftp连接[host]，端口为[port]，用户为[user]

## 常用命令
- `help` `/?`
    打印帮助信息。

- `pwd`
    查看远程服务器当前目录；
- `lpwd`
    查看本地系统的当前目录。
- `cd [dir]`
    将远程服务器的当前目录更改为`[dir]`；
- `lcd [dir]`
    将本地系统的当前目录更改为`[dir]`。
- `ls`
    显示远程服务器上当前目录的文件名；
- `ls -l`
    显示远程服务器上当前目录的文件详细列表；
- `ls [pattern]`
    显示远程服务器上符合指定模式`[pattern]`的文件名；
- `ls -l [pattern]`
    显示远程服务器上符合指定模式`[pattern]`的文件详细列表。
- `lls`
    显示本地系统上当前目录的文件名；
    lls的其他参数与ls命令的类似。
- `get [file]`
    下载指定文件`[file]`；
- `get [pattern]`
    下载符合指定模式`[pattern]`的文件。
- `put [file]`
    上传指定文件`[file]`；
- `get [pattern]`
    上传符合指定模式`[pattern]`的文件。
- `progress`
    切换是否显示文件传输进度。
- `mkdir [dir]`
    在远程服务器上创建目录；
- `lmkdir [dir]`
    在本地系统上创建目录。
- `exit/quit/bye`
    退出sftp。
- `!` 
    启动一个本地shell。
- `! [commandline]` 
    执行本地命令行。
    其他命令还有：chgrp, chmod, chown, ln, lumask, rename, rm, rmdir, symlink, version。

## 比较常用的命令
主要是介绍windows与linux文件传输
`get`
    从远程服务器上下载一个文件存放到本地，如下：
    先通过lcd切换到本地那个目录下，然后通过get file

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
    先通过lcd切换到本地那个目录下

```
//表示切换到本地的d盘下
]] lcd d:\             
```

`lls`
    显示当前目录下的所有文件
[
`pwd`
    显示当前目录

