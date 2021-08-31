# man - which(1)

which - 显示shell脚本的完整路径, which指令会在环境变量$PATH设置的目录里查找符合条件的文件

### 语法
```
which [options] [--] programname [...]
```

### 描述

> Which takes one or more arguments. For each of its arguments it prints to stdout the full path of the executables that would have been executed when this argument had been entered at the shell prompt. It does this by searching for an executable or script in the directories listed in the environment variable PATH using the same algorithm as bash(1).

> This man page is generated from the file which.texinfo.

### 选项
`--all`, `-a`
    Print all matching executables in PATH, not just the first.

`--read-alias`, `-i`
Read aliases from stdin, reporting matching ones on stdout. This is useful in combination with using an alias for which itself. For example:
`alias which=?alias | which -i?.`

`--skip-alias`
    Ignore option --read-alias?, if any. This is useful to explicity search for normal binaries, while using the `--read-alias? option in an alias or function for which.

`--read-functions`
    Read shell function definitions from stdin, reporting matching ones on stdout. This is useful in combination with using a shell function for which itself.  
For example:
```
which() { declare -f | which --read-functions $@ }
export -f which
```

`--skip-functions`
    Ignore option --read-functions?, if any. This is useful to explicity search for normal binaries, while using the --read-functions? option in an alias or function for which.

`--skip-dot`
    Skip directories in PATH that start with a dot.

`--skip-tilde`
    Skip directories in PATH that start with a tilde and executables which reside in the HOME directory.

`--show-dot`
    If a directory in PATH starts with a dot and a matching executable was found for that path, then print "./programname" rather than the full path.

`--show-tilde`
    Output a tilde when a directory matches the HOME directory. This option is ignored when which is invoked as root.

`--tty-only`
    Stop processing options on the right if not on tty.

`--version`,`-v`,`-V`
    Print version information on standard output then exit success-
fully.

`--help`
    Print usage information on standard output then exit successfully.

### RETURN VALUE

   Which returns the number of failed arguments, or -1 when no programname? was given.

### 示例


The recommended way to use this utility is by adding an alias (C shell)
or shell function (Bourne shell) for which like the following:

[ba]sh:

```
which ()
{
  (alias; declare -f) | /usr/bin/which --tty-only --read-alias --read-functions --show-tilde --show-dot $@
}
export -f which
```
[t]csh:

alias which ?alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde?

This  will  print  the readable ~/ and ./ when starting which from your
prompt, while still printing the full path when used from a script:

```
> which q2
~/bin/q2
> echo `which q2`
/home/carlo/bin/q2
```
