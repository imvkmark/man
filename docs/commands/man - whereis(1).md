# man - whereis(1)

在特定目录中查找符合条件的文件。这些文件的属性应属于原始代码，二进制文件，或是帮助文件。


## 语法
```
whereis [-bmsu] [-BMS directory... -f] filename...
```

## 描述

whereis locates source/binary and manuals sections for specified files. The supplied names are first stripped of leading pathname components and any (single) trailing extension of the form .ext, for example, .c. Prefixes of s. resulting from use of source code control are also dealt with. whereis then attempts to locate the desired program in a list of standard Linux places.

## 示例

Find all files in /usr/bin which are not documented in /usr/man/man1 with source in /usr/src:
```
cd /usr/bin
whereis -u -M /usr/man/man1 -S /usr/src -f *
```

## 选项
> `-b`
    只查找二进制文件
`-m`
    只查找说明文件
`-s`
    只查找原始代码文件
`-u`
    查找不包含指定类型的文件. A file is said to be unusual if it does not have one entry of each requested type. Thus 'whereis -m -u *' asks for those files in the current directory which have no documentation.
`-B`
    只在设置的目录下查找二进制文件
    Change or otherwise limit the places where whereis searches for binaries.
`-M`
    只在设置的目录下查找说明文件
    Change or otherwise limit the places where whereis searches for manual sections.
`-S`
    只在设置的目录下查找原始代码文件
    Change or otherwise limit the places where whereis searches for sources.
`-f`
    不显示文件名前的路径名称
    Terminate the last directory list and signals the start of file names, and must be used when any of the -B, -M, or -S options are used.
