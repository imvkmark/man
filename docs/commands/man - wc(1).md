# man - wc(1)

wc - 计算文件的Byte数、字数或是行数

## 语法
```
wc [OPTION]... [FILE]...
wc [OPTION]... --files0-from=F
```

## 描述
可以计算文件的Byte数、字数或是列数，若不指定文件名称，或是所给予的文件名为“-”，则wc指令会从标准输入设备读取数据. 单词是由空格分隔的非零长度字符序列。下面的选项可用于选择打印的计数，总是按照以下顺序:换行、字、字符、字节、最大行长度

`-c`, `--bytes`
  打印字节数

`-m`,`--chars`
打印字符合数

`-l`, `--lines`
打印行数

`--files0-from=F`
read input from the files specified by NUL-terminated names in file F; If F is - then read  names  from standard input

`-L`, `--max-line-length`
打印最长行的长度

`-w`, `--words`
打印单词数量

`--help`
帮助

`--version`
版本信息