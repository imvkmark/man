# man - cat(1)

cat - 连接文件并在标准输出上输出

### 总览
```
cat [OPTION] [FILE]...
```

### 描述

将文件列表中的文件或标准输入, 或连接到标准输出。

`-A`, `--show-all`
等价于 -vET 。
`-b`, `--number-nonblank`
给非空输出行编号。
`-e`
等价于 -vE 。
`-E`, `--show-ends`
在每行结束显示 $ 。
`-n`, `--number`
给所有输出行编号。
`-s`, `--squeeze-blank`
将所有的连续的多个空行替换为一个空行。
`-t`
等价于 -vT 。
`-T`, `--show-tabs`
把 TAB 字符显示为 ^I 。
`-u`
(被忽略的选项)
`-v`, `--show-nonprinting`
除了 LFD 和 TAB 之外所有控制符用 ^ 和 M- 记方式显示。
`--help`
显示帮助并退出。
`--version`
显示版本信息并退出。
没有指定文件或指定的文件是 -，则从标准输入读取。 

### 示例代码

`cat f - g`
Output f's contents, then standard input, then g's contents.
输出 f 的内容, 然后标准输入, 然后 g 的内容
`cat`
Copy standard input to standard output.
复制标准输入到标准输出

```
$ cat > nusers    # 建立文件
who | wc -l 	  # 程序的内容
^D                # ctrl + D 表示 end of file
```


