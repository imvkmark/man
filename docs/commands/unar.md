# unar - 解压缩文件内容

```
unar [OPTION]... ARCHIVE [FILE]...  
```

## 选项

`-o`, `-output-directory` *DIRECTORY*

The directory to write the contents of the archive to. Defaults to the current directory.

`-f`, `-force-overwrite`

Always overwrite files when a file to be unpacked already exists on disk. By default, the program asks the user if possible, otherwise skips the file.

`-r`, `-force-rename`

Always rename files when a file to be unpacked already exists on disk.

`-s`, `-force-skip`

Always skip files when a file to be unpacked already exists on disk.

`-d`, `-force-directory`

Always create a containing directory for the contents of the unpacked archive. By default, a directory is created if there is more than one top-level file or folder.

`-D`, `-no-directory`

Never create a containing directory for the contents of the unpacked archive.

`-p`, `-password` *PASSWORD*

The password to use for decrypting protected archives.

`-e`, `-encoding` *ENCODING*

The encoding to use for filenames in the archive, when it is not known. If not specified, the program attempts to auto-detect the encoding used. Use "help" or "list" as the argument to give a listing of all supported encodings.

`-E`, `-password-encoding` *ENCODING*

The encoding to use for the password for the archive, when it is not known. If not specified, then either the encoding given by the -encoding option or the auto-detected encoding is used.

`-i`, `-indexes`

Instead of specifying the files to list as filenames or wildcard patterns, specify them as indexes, as output by lsar.

`-nr`, `-no-recursion`

Do not attempt to extract archives contained in other archives. For instance, when unpacking a .tar.gz file, only unpack the .tar file and not its contents.

`-t`, `-copy-time`

Copy the file modification time from the archive file to the containing directory, if one is created.

`-k`, `-forks visible`|`hidden`|`skip`

How to handle Mac OS resource forks. `visible` creates AppleDouble files with the extension ".rsrc", `hidden` creates AppleDouble files with the prefix ".\_", and `skip` discards all resource forks. Defaults to `visible`.

`-q`, `-quiet`

Run in quiet mode.

`-h`, `-help`

Display help information.
