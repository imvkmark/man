# wc

> 计算文件的 Byte 数、字数或是行数

可以计算文件的 Byte 数、字数或是列数，若不指定文件名称，或是所给予的文件名为“-”，则 wc 指令会从标准输入设备读取数据. 单词是由空格分隔的非零长度字符序列。下面的选项可用于选择打印的计数，总是按照以下顺序:换行、字、字符、字节、最大行长度

```
wc [OPTION]... [FILE]...
wc [OPTION]... --files0-from=F
```

## 选项 & 参数

`-c`, `--bytes`
打印字节数

`-m`,`--chars`
打印字符合数

`-l`, `--lines`
打印行数

`--files0-from=F`
read input from the files specified by NUL-terminated names in file F; If F is - then read names from standard input

`-L`, `--max-line-length`
打印最长行的长度

`-w`, `--words`
打印单词数量

`--help`
帮助

`--version`
版本信息

## 例子

```
wc -l *       # 统计当前目录下的所有文件行数及总计行数。
wc -l *.js    # 统计当前目录下的所有 .js 后缀的文件行数及总计行数。
find  . * | xargs wc -l # 当前目录以及子目录的所有文件行数及总计行数。
```

查看文件的字节数、字数、行数

```
wc test.txt
# 输出结果
7     8     70     test.txt
# 行数 单词数 字节数 文件名
```

用 wc 命令怎么做到只打印统计数字不打印文件名

```
wc -l < test.txt
# 输出结果
7
```

用来统计当前目录下的文件数(不包含隐藏文件)

```
# 要去除TOTAL行
expr $(ls -l | wc -l) - 1
# 输出结果
8
```
