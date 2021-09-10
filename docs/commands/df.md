# df

> 报告文件系统磁盘空间的使用情况

df 命令列出指定的每一个文件名所在的文件系统上可用磁盘空间的数量。如果没有指定文件名,则显示当前所有使用中的文件系统.缺省设置时, 磁盘空间以 1K 为一块显示,如果环境变量 POSIXLY_CORRECT 已设置,则采用 512 字节为一块显示. 如果参数是一个包含已使用文件系统的磁盘设备名, df 命令显示出的是该文件系统的可用空间,而非包含设备结点的文件系统(只能是根文件系统).此版本的 df 不能显示未使用文件系统的可用空间,这是由于大多数系统在响应这样的请求时必须很清楚该文件系统的结构.

```
df [OPTION]... [FILE]...
```

## 选项 & 参数

显示有关每个文件所在的文件系统的信息，或着, 默认情况下是所有文件系统。

Mandatory arguments to long options are mandatory for short options too.

`-a`, `--all`
列出包括 BLOCK 为 0 的文件系统

`-B`, `--block-size=SIZE`
指定块的大小

`-h`, `--human-readable`
用常见的格式显示出大小(例如:1K 234M 2G)

`-H`, `--si`
同上,但是这里的 1k 等于 1000 字节而不是 1024 字节

`-i`, `--inodes`
用信息索引点代替块表示使用状况

`-k` 相当于 `--block-size=1K`
指定块大小等于 1024 字节来显示使用状况

`-l`, `--local`
只显示本地文件系统使用状况

`--no-sync`
在取得使用信息前禁止调用同步 (default)

`-P`, `--portability`
使用 POSIX 格式输出

`--sync`
在取得使用信息前调用同步

`-t`, `--type=TYPE`
只显示指定类型(TYPE)的文件系统

`-T`, `--print-type`
输出每个文件系统的类型

`-x`, `--exclude-type=TYPE`<br />排除类型是 TYPE 的文件

`-v` (ignored)

`--help`<br />显示帮助并退出

`--version`<br />输出版本信息并退出

SIZE may be (or may be an integer optionally followed by) one of fol-
lowing: kB 1000, K 1024, MB 1000*1000, M 1024*1024, and so on for G, T,
P, E, Z, Y.

**大小格式**

显示值以 `--block-size` 和 `DF_BLOCK_SIZE`，`BLOCK_SIZE` 和 `BLOCKSIZE` 环境变量中的第一个可用 `SIZE` 为单位。 否则，单位默认为 `1024` 个字节（如果设置 `POSIXLY_CORRECT`，则为`512`）。

SIZE 是一个整数和可选单位（例如：10M 是 10 _ 1024 _ 1024）。 单位是 K，M，G，T，P，E，Z，Y（1024 的幂）或 KB，MB，...（1000 的幂）。

## 实例

查看系统磁盘设备，默认是 KB 为单位：

```
[root@LinServ-1 ~]# df
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            146294492  28244432 110498708  21% /
/dev/sda1              1019208     62360    904240   7% /boot
tmpfs                  1032204         0   1032204   0% /dev/shm
/dev/sdb1            2884284108 218826068 2518944764   8% /data1
```

使用`-h`选项以 KB 以上的单位来显示，可读性高：

```
[root@LinServ-1 ~]# df -h
文件系统              容量  已用 可用 已用% 挂载点
/dev/sda2             140G   27G  106G  21% /
/dev/sda1             996M   61M  884M   7% /boot
tmpfs                1009M     0 1009M   0% /dev/shm
/dev/sdb1             2.7T  209G  2.4T   8% /data1
```

查看全部文件系统：

```
[root@LinServ-1 ~]# df -a
文件系统               1K-块        已用     可用 已用% 挂载点
/dev/sda2            146294492  28244432 110498708  21% /
proc                         0         0         0   -  /proc
sysfs                        0         0         0   -  /sys
devpts                       0         0         0   -  /dev/pts
/dev/sda1              1019208     62360    904240   7% /boot
tmpfs                  1032204         0   1032204   0% /dev/shm
/dev/sdb1            2884284108 218826068 2518944764   8% /data1
none                         0         0         0   -  /proc/sys/fs/binfmt_misc
```

显示 `public` 目录中的可用空间量，如以下输出中所示：

```
df public
# Filesystem     1K-blocks     Used Available Use% Mounted on
# /dev/loop0      18761008 15246924   2554392  86% /d Avail
```
