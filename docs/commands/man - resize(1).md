# man - resize(1)

resize - set TERMCAP and terminal settings to current [xterm](http://zh.wikipedia.org/wiki/Xterm) window size

## 语法

```
resize [ -u | -c ] [ -s [ row col ] ]
```

## 描述

`-c`
就算用户环境并非CShell，也用CShell指令改变视窗大小。

`-s <列数> <行数>`
设置终端机视窗的垂直高度和水平宽度。

`-u`
就算用户环境并非 BourneShell ，也用 BourneShell 指令改变视窗大小
