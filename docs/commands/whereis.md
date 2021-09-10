# man - whereis(1)

> 查找二进制程序、代码等相关文件路径

**whereis 命令** 用来定位指令的二进制程序、源代码文件和 man 手册页等相关文件的路径。

whereis 命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man 说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。

和 find 相比，whereis 查找的速度非常快，这是因为 linux 系统会将   系统内的所有文件都记录在一个数据库文件中，当使用 whereis 和下面即将介绍的 locate 时，会从数据库中查找数据，而不是像 find 命令那样，通   过遍历硬盘来查找，效率自然会很高。 但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用 whereis 和 locate  查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。

```
whereis [-bmsu] [-BMS directory... -f] filename...
```

## 选项

`-b`

只查找二进制文件

`-m`

只查找说明文件

`-s`

只查找原始代码文件

`-u`

查找不包含指定类型的文件. A file is said to be unusual if it does not have one entry of each requested type. Thus 'whereis -m -u \*' asks for those files in the current directory which have no documentation.

`-B`

只在设置的目录下查找二进制文件
Change or otherwise limit the places where whereis searches for binaries.

`-M`

只在设置的目录下查找说明文件
Change or otherwise limit the places where whereis searches for manual sections.

`-S`

只在设置的目录下查找原始代码文件
Change or otherwise limit the places where whereis searches for sources.

`-f`

不显示文件名前的路径名称
Terminate the last directory list and signals the start of file names, and must be used when any of the -B, -M, or -S options are used.

## 实例

Find all files in /usr/bin which are not documented in /usr/man/man1 with source in /usr/src:

```
cd /usr/bin
whereis -u -M /usr/man/man1 -S /usr/src -f *
```

将相关的文件都查找出来

```
[root@localhost ~]# whereis tomcat
tomcat:

[root@localhost ~]# whereis svn
svn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz
```

说明：tomcat 没安装，找不出来，svn 安装找出了很多相关文件

只将二进制文件查找出来

```
[root@localhost ~]# whereis -b svn
svn: /usr/bin/svn /usr/local/svn

[root@localhost ~]# whereis -m svn
svn: /usr/share/man/man1/svn.1.gz

[root@localhost ~]# whereis -s svn
svn:
```

说明：`whereis -m svn`查出说明文档路径，`whereis -s svn`找 source 源文件。
