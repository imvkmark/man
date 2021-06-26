# man - tar(1)


tar 档案文件管理程序的 GNU 版本。  

### 总览
```
tar <operation> [options]
Operations:
	[-]A --catenate --concatenate
	[-]c --create
	[-]d --diff --compare
	[-]r --append
	[-]t --list
	[-]u --update
	[-]x --extract --get
	--delete
Common Options:
	-C, --directory DIR
	-f, --file F
	-j, --bzip2
	-p, --preserve-permissions
	-v, --verbose
	-z, --gzip

All Options:
[  --atime-preserve  ]  [  -b, --blocking-factor N ] [ -B, --read-full-records ] 
[ --backup BACKUP-TYPE ] [ --block-compress ] [ -C,  --direc-tory DIR ] 
[ --check-links ] [ --checkpoint ] [ -f, --file [HOSTNAME:]F] [ -F, --info-script F --new-volume-script F ] 
[ --force-local	  ]  [--format	 FORMAT ] [ -g, --listed-incremental F ] [ -G, --incremental ]
[ --group GROUP ] [ -h, --dereference ] [ --help ] [ -i, --ignore-zeros]  [  --ignore-case  ] 
[ --ignore-failed-read ] [ --index-file FILE ] [-j, --bzip2 ] [ -k, --keep-old-files ] 
[	 -K,  --starting-file  F  ]  [--keep-newer-files  ] [ -l, --one-file-system ]
[ -L, --tape-length N ] [ -m, --touch, --modification-time ] [ -M, --multi-volume  ]  [	--mode PERMISSIONS  ]  
[ -N, --after-date DATE, --newer DATE ] [ --newer-mtime DATE ] [ --no-anchored ] [ --no-ignore-case ] [ --no-overwrite-dir ]  [ --no-recursion  ]  [ --no-same-permissions ] [ --no-wildcards ] [ --no-wildcards-match-slash ] [ --null	    ]
[ --numeric-owner ] [ -o, --old-archive,	 --portability,	 --no-same-owner  ]  [	-O,  --to-stdout  ]  
[--occurrence[=NUMBER] ] [ --overwrite ] [ --overwrite-dir ]  [  --owner USER ] [ -p, --same-permissions, --preserve-permissions ] [ -P, --absolute-names ] [ --pax-option KEYWORD-LIST ] [ --posix ] [ --preserve ] [--acls  ]  
[  --selinux ] [ --xattrs ] [ --no-acls ] [ --no-selinux ] [--no-xattrs ] [ -R, --block-number ] [ --record-size SIZE ] 
[  --recursion  ] [ --recursive-unlink ] [ --remove-files ] [ --rmt-command CMD ] [ --rsh-command CMD ] 
[ -s,  --same-order,  --preserve-order  ]	[  -S, --sparse ] [ --same-owner ] [ --show-defaults ] 
[ --show-omitted-dirs ]  [ --strip-components NUMBER, --strip-path NUMBER (1) ] [ --suffix  SUFFIX  ]  
[  -T, --files-from F ] [ --totals   ] [ -U, --unlink-first ] [--use-compress-program PROG ] [ --utc ] 
[ -v, --verbose ] [ -V, --label NAME ] [ --version  ] [ --volno-file F ] 
[ -w, --interactive, --confirmation ] [ -W, --verify ] [ --wildcards ] [ --wildcards-match-slash ] 
[--exclude  PATTERN  ]  [	 -X,  --exclude-from  FILE ] [ -Z, --compress,--uncompress ] 
[ -z, --gzip, --gunzip, --ungzip ] [ -[0-7][lmh] ]
```
(1) tar-1.14 uses --strip-path, tar-1.14.90+ uses --strip-components
 

filename1 [ filename2, ... filenameN ]
directory1 [ directory2, ...directoryN ]

### 描述
tar 程序用于储存或展开 tar 存档文件。存档文件可放在磁盘中 ，也可以存为普通文件。 tar是需要参数的，可选的参数是A、c、d、r、t、u、x，您在使用tar时必须首先为 tar 指定至少一个参数；然后，您必须指定要处理的文件或目录。如果指定一个目录则该目录下的所有子目录都将被加入存档。  

### 例子

创建包

```
# 创建包
tar -cf soft.tar soft

# 创建 bzip 包
tar -cjf foo.tar.bz2 bar/

# 创建 gzip 包
tar -czf foo.tar.gz bar/
```

解压包

```
# 显示详情解压 foo.tar
tar -xvf foo.tar

# 解压 gzipped foo.tar.gz
tar -xzf foo.tar.gz

# 改变目录之后解压 bzip 包 foo.tar.bz2
tar -xjf foo.tar.bz2 -C bar/

# 从包中解压 blah.txt 文件
tar -xzf foo.tar.gz blah.txt
```

### 参数

One of the following options must be used:

`-A`, `--catenate`, `--concatenate`
将一存档与已有的存档合并

`-c`, `--create`
建立新的存档

`-d`, `--diff`, `--compare`
比较存档与当前文件的不同之处

`-r`, `--append`
附加到存档结尾

`-t`, `--list`
列出存档中文件的目录

`-u`, `--update`
仅将较新的文件附加到存档中

`-x`, `--extract`, `--get`
从存档展开文件

`--delete`
从存档中删除 (not for use on mag tapes!)

### 选项


`-C`, `--directory DIR`
转到指定的目录

`-f`, `--file [HOSTNAME:]F`
指定存档或设备或者 device F (default "-", meaning stdin/stdout)

`-j`, `--bzip2`
filter archive through bzip2, use to decompress .bz2 files

`-p`, `--preserve-permissions`
extract all protection information

`-v`, `--verbose`
详细显示处理的文件

`-z`, `--gzip`, `--ungzip`
用 gzip 对存档压缩或解压


### 参数说明
运行tar时必须要有下列参数中的至少一个才可运行

`--atime-preserve` 
不改变转储文件的存取时间 

`-b`, `--block-size N      `
指定块大小为 Nx512 字节（缺省时 N=20)

`-B`, `--read-full-blocks  `
读取时重组块

`--checkpoint`
读取存档时显示目录名

`--force-local`
强制使用本地存档，即使存在克隆

`-F`, `--info-script F --new-volume-script F`
在每个磁盘结尾使用脚本 F （隐含 -M）

`-G`, `--incremental       `
建立老 GNU 格式的备份

`-g`, `--listed-incremental F`
建立新 GNU 格式的备份

`-h`, `--dereference       `
不转储动态链接，转储动态链接指向的文件。

`-i`, `--ignore-zeros      `
忽略存档中的 0 字节块（通常意味着文件结束）

`--ignore-failed-read`
在不可读文件中作 0 标记后再退出

`-k`, `--keep-old-files    `
保存现有文件；从存档中展开时不进行覆盖

`-K`, `--starting-file F   `
从存档文件 F 开始

`-l`, `--one-file-system   `
在本地文件系统中创建存档

`-L`, `--tape-length N     `
在写入 N*1024 个字节后暂停，等待更换磁盘

`-m`, `--modification-time `
当从一个档案中恢复文件时，不使用新的时间标签

`-M`, `--multi-volume      `
建立多卷存档,以便在几个磁盘中存放

`-N`, `--after-date DATE`, `--newer DATE     `
仅存储时间较新的文件

`-o`, `--old-archive`, `--portability        `
以 V7 格式存档，不用 ANSI 格式

`-O`, `--to-stdout         `
将文件展开到标准输出

`-p`, `--same-permissions`, `--preserve-permissions`
展开所有保护信息

`-P`, `--absolute-paths    `
不要从文件名中去除 '/'

`--preserve`              
like `-p -s`
与 `-p -s` 相似
`-R`, `--record-number     `
显示信息时同时显示存档中的记录数

`--remove-files`
建立存档后删除源文件

`-s`, `--same-order`, `--preserve-order      `

`--same-owner`
展开以后使所有文件属于同一所有者

`-S`, `--sparse`
高效处理

`-T`, `--files-from F`
从文件中得到要展开或要创建的文件名

`--null`
读取空结束的文件名，使 -C 失效

`--totals`
显示用 --create 参数写入的总字节数

`-V`, `--label NAME`
为存档指定卷标

`--version`
显示 tar 程序的版本号

`-w`, `--interactive`, `--confirmation`
每个操作都要求确认

`-W`, `--verify`
写入存档后进行校验

`--exclude FILE`
不把指定文件包含在内

`-X`, `--exclude-from FILE`
从指定文件中读入不想包含的文件的列表

`-y`, `--bzip2`, `--bunzip2`
用 bzip2 对存档压缩或解压

`-Z`, `--compress`, `--uncompress`
用 compress 对存档压缩或解压

`--use-compress-program PROG`
用 PROG 对存档压缩或解压 ( PROG 需能接受 -d 参数）

`--block-compress`
为便于磁盘存储，按块记录存档

`-[0-7][lmh]`
指定驱动器和密度[高中低]

