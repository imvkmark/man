# tr

将字符进行替换压缩和删除

**tr 命令** 可以对来自标准输入的字符进行替换、压缩和删除。它可以将一组字符变成另一组字符，经常用来编写优美的单行命令，作用很强大。

```
tr [OPTION]... SET1 [SET2]
```

## 选项 & 参数

`-c`, `-C`, `--complement`
第一项设置 SET1

`-d`, `--delete`
删除 SET1 中字符, 不允许转换

`-s`, `--squeeze-repeats`
压缩重复的字符, 如果标准输入中连续重复出现所列的字符, 将其压缩为一个

`-t`, `--truncate-set1`
把 SET1 剪切为 SET2 的长度

`--help`
帮助信息

`--version`
输出版本信息

## 实例

将输入字符由大写转换为小写：

```
echo "HELLO WORLD" | tr 'A-Z' 'a-z'
hello world
```

'A-Z' 和 'a-z'都是集合，集合是可以自己制定的，例如：'ABD-}'、'bB.,'、'a-de-h'、'a-c0-9'都属于集合，集合里可以使用'\n'、'\t'，可以可以使用其他 ASCII 字符。

使用 tr 删除字符：

```
echo "hello 123 world 456" | tr -d '0-9'
hello  world
```

将制表符转换为空格：

```
cat text | tr '\t' ' '
```

字符集补集，从输入文本中将不在补集中的所有字符删除：

```
echo aa.,a 1 b#$bb 2 c*/cc 3 ddd 4 | tr -d -c '0-9 \n'
 1  2  3  4
```

此例中，补集中包含了数字 0~9、空格和换行符\n，所以没有被删除，其他字符全部被删除了。

用 tr 压缩字符，可以压缩输入中重复的字符：

```
echo "thissss is      a text linnnnnnne." | tr -s ' sn'
this is a text line.
```

巧妙使用 tr 做数字相加操作：

```
echo 1 2 3 4 5 6 7 8 9 | xargs -n1 | echo $[ $(tr '\n' '+') 0 ]
```

删除 Windows 文件“造成”的'^M'字符：

```
cat file | tr -s "\r" "\n" > new_file
或
cat file | tr -d "\r" > new_file
```

**tr 可以使用的字符类：**

```
[:alnum:]：字母和数字
[:alpha:]：字母
[:cntrl:]：控制（非打印）字符
[:digit:]：数字
[:graph:]：图形字符
[:lower:]：小写字母
[:print:]：可打印字符
[:punct:]：标点符号
[:space:]：空白字符
[:upper:]：大写字母
[:xdigit:]：十六进制字符
```

使用方式：

```
tr '[:lower:]' '[:upper:]'
```
