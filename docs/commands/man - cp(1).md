# man - cp(1)

复制文件和目录

### 语法

```
cp [OPTION]... [-T] SOURCE DEST
cp [OPTION]... SOURCE... DIRECTORY
cp [OPTION]... -t DIRECTORY SOURCE...
```

### 描述
`cp` 命令用来将一个或多个源文件或者目录复制到指定的目的文件或目录。它可以将单个源文件复制成一个指定文件名的具体的文件或一个已经存在的目录下。`cp` 命令还支持同时复制多个文件，当一次复制多个文件时，目标文件参数必须是一个已经存在的目录，否则将出现错误。

Mandatory arguments to long options are mandatory for short options too.

`-a, --archive`
same as `-dR --preserve`=*all*

`--backup`[=*CONTROL*]
make a backup of each existing destination file
`-b`
like `--backup` but does not accept an argument
`--copy-contents`
copy contents of special files when recursive
`-d`
same as `--no-dereference --preserve`=*links*

`-f, --force`
if an existing destination file cannot be opened, remove it and try again (redundant if the `-n` option is used)

`-i, --interactive`
prompt before overwrite (overrides a previous `-n` option)

`-H`
follow command-line symbolic links in SOURCE
`-l, --link`
link files instead of copying
`-L, --dereference`
always follow symbolic links in SOURCE
`-n, --no-clobber`
do not overwrite an existing file (overrides a previous `-i` option)

`-P, --no-dereference`
never follow symbolic links in SOURCE
`-p`
same as `--preserve`=*mode*,ownership,timestamps
`--preserve`[=*ATTR_LIST*]
preserve the specified attributes (default: mode,ownership,timestamps), if possible additional attributes: context, links, xattr, all
`-c`
same as `--preserve`=*context*

`--no-preserve`=*ATTR_LIST*
don't preserve the specified attributes
`--parents`
use full source file name under DIRECTORY
`-R, -r`, `--recursive`
copy directories recursively
`--reflink`[=*WHEN*]
control clone/CoW copies. See below.

`--remove-destination`
remove each existing destination file before attempting to open it (contrast with `--force`)

`--sparse`=*WHEN*
control creation of sparse files. See below.

`--strip-trailing-slashes`
remove any trailing slashes from each SOURCE argument
`-s, --symbolic-link`
make symbolic links instead of copying
`-S, --suffix`=*SUFFIX*
override the usual backup suffix
`-t, --target-directory`=*DIRECTORY*
copy all SOURCE arguments into DIRECTORY
`-T, --no-target-directory`
treat DEST as a normal file
`-u, --update`
copy only when the SOURCE file is newer than the destination file or when the destination file is missing
`-v, --verbose`
explain what is being done
`-x, --one-file-system`
stay on this file system
`-Z, --context`=*CONTEXT*
set security context of copy to CONTEXT
`--help`
display this help and exit
`--version`
output version information and exitBy default, sparse SOURCE files are detected by a crude heuristic and the corresponding DEST file is made sparse as well. That is the behavior selected by `--sparse`=*auto*. Specify `--sparse`=*always* to create a sparse DEST file whenever the SOURCE file contains a long enough sequence of zero bytes. Use `--sparse`=*never* to inhibit creation of sparse files.
When `--reflink`[=*always*] is specified, perform a lightweight copy, where the data blocks are copied only when modified. If this is not possible the copy fails, or if `--reflink`=*auto* is specified, fall back to a standard copy.
The backup suffix is '~', unless set with `--suffix` or SIMPLE_BACKUP_SUFFIX. The version control method may be selected via the `--backup` option or through the VERSION_CONTROL environment variable. Here are the values:none, offnever make backups (even if `--backup` is given)
numbered, tmake numbered backupsexisting, nilnumbered if numbered backups exist, simple otherwisesimple, neveralways make simple backupsAs a special case, cp makes a backup of SOURCE when the force and backup options are given and SOURCE and DEST are the same name for an existing, regular file.



https://blog.csdn.net/nuoshueihe/article/details/9128945