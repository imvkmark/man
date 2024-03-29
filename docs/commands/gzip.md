# gzip

用来压缩文件

**gzip 命令** 用来压缩文件。gzip 是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多处“.gz”扩展名。

gzip 是在 Linux 系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip 不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和 tar 命令一起构成 Linux 操作系统中比较流行的压缩文件格式。据统计，gzip 命令对文本文件有 60%～ 70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。

```
gzip(选项)(参数)
```

## 选项

```
-a或——ascii：使用ASCII文字模式；
-d或--decompress或----uncompress：解开压缩文件；
-f或——force：强行压缩文件。不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：压缩文件时，不保存原来的文件名称及时间戳记；
-N或——name：压缩文件时，保存原来的文件名称及时间戳记；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<压缩字尾字符串>或----suffix<压缩字尾字符串>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
-<压缩效率>：压缩效率是一个介于1~9的数值，预设值为“6”，指定愈大的数值，压缩效率就会愈高；
--best：此参数的效果和指定“-9”参数相同；
--fast：此参数的效果和指定“-1”参数相同。
-num 用指定的数字num调整压缩的速度，-1或--fast表示最快压缩方法（低压缩比），-9或--best表示最慢压缩方法（高压缩比）。系统缺省值为6。
```

## 参数

文件列表：指定要压缩的文件列表。

## 实例

把 test6 目录下的每个文件压缩成.gz 文件

```
gzip *
```

把上例中每个压缩的文件解压，并列出详细的信息

```
gzip -dv *
```

详细显示例 1 中每个压缩的文件的信息，并不解压

```
gzip -l *
```

压缩一个 tar 备份文件，此时压缩文件的扩展名为.tar.gz

```
gzip -r log.tar
```

递归的压缩目录

```
gzip -rv test6
```

这样，所有 test 下面的文件都变成了*.gz，目录依然存在只是目录里面的文件相应变成了*.gz.这就是压缩，和打包不同。因为是对目录操作，所以需要加上-r 选项，这样也可以对子目录进行递归了。

递归地解压目录

```
gzip -dr test6
```
