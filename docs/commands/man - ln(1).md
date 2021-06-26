# man - ln(1)

ln - 在文件之间创建链接

## 命令

```
ln [OPTION]... [-T] TARGET LINK_NAME   (1st form)
    建立 LINK_NAME 到 TARGET 的链接
ln [OPTION]... TARGET                  (2nd form)
    在当前目录建立到目标的链接
ln [OPTION]... TARGET... DIRECTORY     (3rd form)
    为目录中的每个目标建立链接
ln [OPTION]... -t DIRECTORY TARGET...  (4th form)
    同上
```

## 说明

In the 1st form, create a link to TARGET with the name LINK_NAME. In the 2nd form, create a link to TARGET in the current directory. In the 3rd and 4th forms, create links to each TARGET in DIRECTORY. Create hard links by default, symbolic links with `--symbolic`. When creating hard links, each TARGET must exist. Symbolic links can hold arbitrary text; if later resolved, a relative link is interpreted in relation to its parent directory.
Mandatory arguments to long options are mandatory for short options too.

`--backup`[=*CONTROL*]
make a backup of each existing destination file
`-b`
like `--backup` but does not accept an argument
`-d, -F`, `--directory`
allow the superuser to attempt to hard link directories (note: will probably fail due to system restrictions, even for the superuser)

`-f, --force`
remove existing destination files
`-i, --interactive`
prompt whether to remove destinations
`-L, --logical`
make hard links to symbolic link references
`-n, --no-dereference`
treat destination that is a symlink to a directory as if it were a normal file
`-P, --physical`
make hard links directly to symbolic links
`-s, --symbolic`
make symbolic links instead of hard links
`-S, --suffix`=*SUFFIX*
override the usual backup suffix
`-t, --target-directory`=*DIRECTORY*
specify the DIRECTORY in which to create the links
`-T, --no-target-directory`
treat LINK_NAME as a normal file
`-v, --verbose`
print name of each linked file
`--help`
display this help and exit
`--version`
output version information and exitThe backup suffix is '~', unless set with `--suffix` or SIMPLE_BACKUP_SUFFIX. The version control method may be selected via the `--backup` option or through the VERSION_CONTROL environment variable. Here are the values:Using `-s` ignores `-L` and `-P`. Otherwise, the last option specified controls behavior when the source is a symbolic link, defaulting to `-P`.
none, offnever make backups (even if `--backup` is given)
numbered, tmake numbered backupsexisting, nilnumbered if numbered backups exist, simple otherwisesimple, neveralways make simple backups