# man - tr(1)



tr - 转义或者删除字符
转换字符. 例如, 将大写字符转换为小写, 选项可让你指定所要删除的字符, 以及将遗传重复出现的字符浓缩成一个. 

### 语法
```
tr [OPTION]... SET1 [SET2]
```

### 描述

从标准输入中转换, 压缩, 添加或者删除字符, 然后写入到标准输出中. 

`-c`, `-C`, `--complement`
第一项设置 SET1

`-d`, `--delete`
删除 SET1 中字符, 不允许转换

`-s`, `--squeeze-repeats`
浓缩重复的字符, 如果标准输入中连续重复出现所列的字符, 将其浓缩为一个

`-t`, `--truncate-set1`
把 SET1 剪切为 SET2 的长度

`--help` 
帮助信息

`--version`
输出版本信息

SETs 是字串类型数据.大多表现为他们自身. 转义序列为:

```
\NNN   character with octal value NNN (1 to 3 octal digits)

\\     backslash

\a     audible BEL

\b     backspace

\f     form feed

\n     new line

\r     return

\t     horizontal tab

\v     vertical tab

CHAR1-CHAR2
all characters from CHAR1 to CHAR2 in ascending order

[CHAR*]
in SET2, copies of CHAR until length of SET1

[CHAR*REPEAT]
REPEAT copies of CHAR, REPEAT octal if starting with 0

[:alnum:]
all letters and digits

[:alpha:]
all letters

[:blank:]
all horizontal whitespace

[:cntrl:]
all control characters

[:digit:]
all digits

[:graph:]
all printable characters, not including space

[:lower:]
all lower case letters

[:print:]
all printable characters, including space

[:punct:]
all punctuation characters

[:space:]
all horizontal or vertical whitespace

[:upper:]
all upper case letters

[:xdigit:]
all hexadecimal digits

[=CHAR=]
all characters which are equivalent to CHAR

Translation occurs if -d is not given and both SET1  and	 SET2  appear.
-t  may	be  used only when translating.	 SET2 is extended to length of
SET1 by repeating its last character as necessary.   Excess  characters
of  SET2	 are  ignored.	Only [:lower:] and [:upper:] are guaranteed to
expand in ascending order; used in SET2	while  translating,  they  may
only  be used in pairs to specify case conversion.  -s uses SET1 if not
translating nor deleting; else squeezing uses  SET2  and	 occurs	 after
translation or deletion.
```
当 在 SET1  和 SET2  出现的时候 `-d` 没有给定, 将会发生转义. 
`-t` 可能仅仅使用在转换的时候.	 SET2 扩展为 SET1 的长度. 利用 SET2 最后一个字母来补齐. 超出 SET2 的长度会被忽略. 仅仅 [:lower:] 和[:upper:] 保证升序排列;  在转换的时候使用 SET2 可能仅仅成对使用指定的 大小写约定. 
如果不转义或者删除的时候 `-s` 使用 SET1; 或者使用 SET2 压缩并且出现在 转换或者删除之后