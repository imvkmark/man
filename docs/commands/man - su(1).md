# man - su(1)

运行一个命令来切换用户和用户组, 超级用户除外，需要键入该使用者的密码

### 例子

```sh
su -c ls root   #变更帐号为 root 并在执行 ls 指令后退出变回原使用者。
su [用户名]     #在root用户下, 输入 su 普通用户. 则切换至普通用户, 从root切换到变通用户不需要密码
```
**`su`命令与`su -` 命令有什么区别**
> su 是切换到其他用户，但是不切换环境变量, su - 是完整的切换到一个用户环境

**`su`和`sudo`的区别**
>   由于su 对切换到超级权限用户root后，权限的无限制性，所以su并不能担任多个管理员所管理的系统。如果用su 来切换到超级用户来管理系统，也不能明确哪些工作是由哪个管理员进行的操作。特别是对于服务器的管理有多人参与管理时，最好是针对每个管理员的技术特长和 管理范围，并且有针对性的下放给权限，并且约定其使用哪些工具来完成与其相关的工作，这时我们就有必要用到 sudo。

>   通过sudo，我们能把某些超级权限有针对性的下放，并且不需要普通用户知道root密码，所以sudo 相对于权限无限制性的su来说，还是比较安全的，所以sudo 也能被称为受限制的su ；另外sudo 是需要授权许可的，所以也被称为授权许可的su；

>    sudo 执行命令的流程是当前用户切换到root（或其它指定切换到的用户），然后以root（或其它指定的切换到的用户）身份执行命令，执行完成后，直接退回到当前用户；而这些的前提是要通过sudo的配置文件/etc/sudoers来进行授权；


#### SYNOPSIS
```
su [OPTION]... [-] [USER [ARG]...]
```

#### DESCRIPTION
> 变更用户
`-, -l, --login`
    加了这个参数之后，就好像是重新登陆一样，大部分环境变量(例如HOME、SHELL和USER等)都是以该使用者(USER)为主，并且工作目录也会改变。如果没有指定USER，缺省情况是root
`-c, --command=COMMAND`
    变更账号为USER的使用者，并执行指令（command）后再变回原来使用者
`--session-command=COMMAND`
    pass a single COMMAND to the shell with -c and do not create a new session
`-f, --fast`
  不必读启动文件（如 csh.cshrc 等），仅用于csh或tcsh两种Shell
`-m, --preserve-environment`
    执行su时不改变环境变数
`-p`     same as -m
`-s, --shell=SHELL`
    run SHELL if /etc/shells allows it
`--help`
    显示说明文件
`--version`
    显示版本资讯
`USER`
    欲变更的使用者账号
`ARG`
    传入新的Shell参数
A mere - implies -l.   If USER not given, assume root.

#### SEE ALSO
The  full  documentation	 for su is maintained as a Texinfo manual.  If the info and su programs are properly installed at your site, the  command `info su` should give you access to the complete manual.