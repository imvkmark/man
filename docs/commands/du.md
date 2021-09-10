# du

> 统计目录(或文件)所占磁盘空间的大小。

查看使用空间的，但是与 df 命令不同的是 Linux du 命令是对文件和目录磁盘使用的空间的查看，还是和 df 命令有一些区别的。

```
du [-abcDhHklmsSx] [-L <符号连接>][-X <文件>][--block-size][--exclude=<目录或文件>] [--max-depth=<目录层数>][--help][--version][目录或文件]
```

## 选项 & 参数

`-a`, `--all`
为每个指定文件显示磁盘使用情况，或者为目录中每个文件显示各自磁盘使用情况。

`-b`, `--bytes`
显示目录或文件大小时，以 byte 为单位。

`-c`, `--total`
除了显示目录或文件的大小外，同时也显示所有目录或文件的总和。

`-D`, `--dereference-args`
显示指定符号连接的源文件大小。

`-h`, `--human-readable`
以 K，M，G 为单位，提高信息的可读性。

`-H`, `--si`
与-h 参数相同，但是 K，M，G 是以 1000 为换算单位,而不是以 1024 为换算单位。

`-k`, `--kilobytes`
以 1024 bytes 为单位。

`-l`, `--count-links`
重复计算硬件连接的文件。

`-L<符号连接>`, `--dereference<符号连接>`
显示选项中所指定符号连接的源文件大小。

`-m`, `--megabytes`
以 1MB 为单位。

`-s`, `--summarize`
仅显示总计，即当前目录的大小。

`-S`, `--separate-dirs`
显示每个目录的大小时，并不含其子目录的大小。

`-x`, `--one-file-xystem`
以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。

`-X<文件>`, `--exclude-from=<文件>`
在<文件>指定目录或文件。

`--exclude=<目录或文件>`
略过指定的目录或文件。

`--max-depth=<目录层数>`
超过指定层数的目录后，予以忽略。

`--help`
显示帮助。

`--version`
显示版本信息。

## 实例

```
# 查看文件夹的大小
$ du -h --max-depth=1
```

```
# 要显示一个目录树及其每个子树的磁盘使用情况
du /home/linux

# 要通过以1024字节为单位显示一个目录树及其每个子树的磁盘使用情况
du -k /home/linux

# 以MB为单位显示一个目录树及其每个子树的磁盘使用情况
du -m /home/linux

# 以GB为单位显示一个目录树及其每个子树的磁盘使用情况
du -g /home/linux

# 查看当前目录下所有目录以及子目录的大小：
# “.”代表当前目录下。也可以换成一个明确的路径
# -h表示用K、M、G的人性化形式显示
du -h .

# 查看当前目录下user目录的大小，并不想看其他目录以及其子目录：
# -s表示总结的意思，即只列出一个总结的值
du -sh user

# --max-depth＝n表示只深入到第n层目录，此处设置为0，即表示不深入到子目录
du -h --max-depth=0 user

# 列出user目录及其子目录下所有目录和文件的大小
# -a表示包括目录和文件
du -ah user

# 列出当前目录中的目录名不包括xyz字符串的目录的大小：
du -h --exclude=’*xyz*’

# 想在一个屏幕下列出更多的关于user目录及子目录大小的信息：
# -0（杠零）表示每列出一个目录的信息，不换行，而是直接输出下一个目录的信息
du -0h user

# 只显示一个目录树的全部磁盘使用情况
du  -s /home/linux
```

显示目录或者文件所占空间：

```
root@localhost [test]# du
608 ./test6
308 ./test4
4 ./scf/lib
4 ./scf/service/deploy/product
4 ./scf/service/deploy/info
12 ./scf/service/deploy
16 ./scf/service
4 ./scf/doc
4 ./scf/bin
32 ./scf
8 ./test3
1288 .
```

只显示当前目录下面的子目录的目录大小和当前目录的总的大小，最下面的 1288 为当前目录的总大小

显示指定文件所占空间：

```
[root@localhost test]# du log2012.log
300 log2012.log
```

查看指定目录的所占空间：

```
[root@localhost test]# du scf
4 scf/lib
4 scf/service/deploy/product
4 scf/service/deploy/info
12 scf/service/deploy
16 scf/service
4 scf/doc
4 scf/bin
32 scf
```

显示多个文件所占空间：

```
[root@localhost test]# du log30.tar.gz log31.tar.gz
4 log30.tar.gz
4 log31.tar.gz
```

只显示总和的大小:

```
[root@localhost test]# du -s
1288 .

[root@localhost test]# du -s scf
32 scf

[root@localhost test]# cd ..
[root@localhost soft]# du -s test
1288 test
```

显示总和的大小且易读:

```
du -sh $dir
```
