# resize

设置终端机视窗的大小

## 语法

```
resize [ -u | -c ] [ -s [ row col ] ]
```

## 选项

`-c`
就算用户环境并非 CShell，也用 CShell 指令改变视窗大小。

`-s row col`
设置终端机视窗的垂直高度和水平宽度。

`-u`
就算用户环境并非 BourneShell ，也用 BourneShell 指令改变视窗大小


## 实例

使用 C shell

```
[root@localhost ~]# resize -c
set noglob;
setenv COLUMNS '99';
setenv LINES '34';
unset noglob;
```

使用 Bourne shell

```
[root@localhost ~]# resize -u
COLUMNS=99;
LINES=34;
export COLUMNS LINES;
```

设置指定大小

```
[root@localhost ~]# resize -s 80 160
```
