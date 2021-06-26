# man - df(1)

df - 报告文件系统磁盘空间的使用情况

### 简介
```
df [OPTION]... [FILE]...
```

### 常用命令
```
# 查看磁盘的使用情况
df -h
```

### 描述

df命令列出指定的每一个文件名所在的文件系统上可用磁盘空间的数量。如果没有指定文件名,则显示当前所有使用中的文件系统.缺省设置时, 磁盘空间以1K为一块显示,如果环境变量POSIXLY_CORRECT已设置,则采用512字节为一块显示. 如果参数是一个包含已使用文件系统的磁盘设备名, df命令显示出的是该文件系统的可用空间,而非包含设备结点的文件系统(只能是根文件系统).此版本的df不能显示未使用文件系统的可用空间,这是由于大多数系统在响应这样的请求时必须很清楚该文件系统的结构.

### 参数
显示有关每个文件所在的文件系统的信息，或着, 默认情况下是所有文件系统。

Mandatory  arguments  to	 long  options are mandatory for short options too.

`-a`, `--all`
列出包括BLOCK为0的文件系统

`-B`, `--block-size=SIZE`
指定块的大小

`-h`, `--human-readable`
用常见的格式显示出大小(例如:1K 234M 2G)

`-H`, `--si`
同上,但是这里的1k等于1000字节而不是1024字节

`-i`, `--inodes`
用信息索引点代替块表示使用状况

`-k` 相当于 `--block-size=1K`
指定块大小等于1024字节来显示使用状况

`-l`, `--local`
只显示本地文件系统使用状况

`--no-sync`
在取得使用信息前禁止调用同步 (default)

`-P`, `--portability`
使用POSIX格式输出

`--sync`
在取得使用信息前调用同步

`-t`, `--type=TYPE`
只显示指定类型(TYPE)的文件系统

`-T`, `--print-type`
输出每个文件系统的类型

`-x`, `--exclude-type=TYPE`<br />排除类型是 TYPE 的文件

`-v`     (ignored)

`--help`<br />显示帮助并退出

`--version`<br />输出版本信息并退出

SIZE may be (or may be an integer optionally followed by) one  of  fol-
lowing: kB 1000, K 1024, MB 1000*1000, M 1024*1024, and so on for G, T,
P, E, Z, Y.