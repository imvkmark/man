# lsattr - 查看文件的第二扩展文件系统属性

> 用于查看文件的第二扩展文件系统属性

```
lsattr [ -RVadv ] [ files...  ]
```

## 选项

`-R`

递归操作文件夹属性和文件夹中的内容

`-V`

版本号

`-a`

列出目录中的所有文件, 包含 `.` 开始的文件

`-d`

列出目录, 不列出内容

`-v`

列出文件版本/Innode 标识序列号

## 实例

```
$ lsattr -v my.txt
18446744072430890522 -------------e-- my.txt
```
