# man - useradd(8)

添加新用户或者更新新用户的默认值
当不加-D参数,useradd指令使用命令列来指定新帐号的设定值and使用系统上的预设值.新使用者帐号将产生一些系统档案，使用者目录建立，拷备起始档案等，这些均可以利用命令列选项指定。[**此版本为RedHatLinux提供，可帮每个新加入的使用者建立个别的group,毋须添加-n选项**]

### 语法

```
useradd [options] LOGIN
useradd -D
useradd -D [options]
```

### 选项

`-c, --comment COMMENT`
    新帐号password档的说明栏, 任意字符串, 生成一个登陆的简短描述并且被当做用户的全名字段来使用

`-b, --base-dir BASE_DIR`
    如果 `-d` 没有指定, 这个默认文件夹将是系统默认的基准文件夹, `BASE_DIR` 是定义用户 home 目录的文件目录, 如果此目录不存在, 否则用户的home目录不会被创建

`-d, --home HOME_DIR`
    新帐号每次登入时所使用的 `HOME_DIR`。预设值为`BASE_DIR`内login名称，并当成登入时目录名称, HOME_DIR的父级必须存在, 否则目录不会给创建

`-e, --expiredate EXPIRE_DATE`
    帐号终止日期。日期的指定格式为YYYY-MM-DD

`-f, --inactive INACTIVE`
    用户密码过期之后几日内禁用, 当值为0时帐号则立即过期。而当值为-1时则关闭此功能，预设值为-1

`-g, --gid GROUP`
    用户初始登陆时候的组名或者组id, 组必须存在, 群组数字也须为现有存在的群组

`-G, --groups GROUP1[,GROUP2,...[,GROUPN]]]`
    定义此使用者为此一堆groups的成员。每个群组使用`,`区格开来，不可以夹杂空白字符。群组名同-g选项的限制。定义值为使用者的起始群组。

`-h, --help`
    显示帮助信息

`-M` 
    用户的 Home 目录将不会被创建, 只有在`/etc/login.defs`系统设定中的才会创建目录

`-m, --create-home`
    使用者目录如不存在则自动建立。如使用-k选项 `SKEL_DIR` 内的档案将复制至使用者目录下。否则的话 `/etc/skel` 目录下的档案会复制过去取代。任何在 `SKEL_DIR`,  `/etc/skel` 的目录也相同会在使用者目录下一一建立。`-k`选项必须和`-m` 选项同时使用, 不建立目录以及不复制任何档案为预设值。

`-l` 
    不向用户登陆的日志文件中填写信息, **仅仅[Red Hat]**

`-n` 
    默认创建用户的时候将创建一个和用户相同名称的组, 这个选项关闭这个行为, 当这个选项使用的时候, 用户必须指定一个组
     When this option is used, users by default will be placed in whatever group is specified in `/etc/default/useradd`. If no default group is defined, group 1 will be used.

`-K, --key KEY=VALUE`
    覆盖 `/etc/login.defs` 默认值 (UID_MIN, UID_MAX, UMASK, PASS_MAX_DAYS and others).
    例如: `-K PASS_MAX_DAYS=-1` 在创建系统账户时候关闭密码过期. 及时系统账号没有密码.
    支持多值设定 
    `-K UID_MIN=100 -K UID_MAX=499`
    Note: `-K UID_MIN=10,UID_MAX=499` 将不合法

`-o, --non-unique`
    允许使用重复的 （非唯一） UID 创建用户

`-p, --password PASSWORD`
    加密的密码, 使用 `crypt(3)` 返回, 默认是禁用账户

`-r` 
    This flag is used to create a system account. That is, a user with a UID lower than the value of UID_MIN defined in /etc/login.defs and whose password does not expire. Note that useradd will not create a home directory for such an user, regardless of the default setting in /etc/login.defs. You have to specify -m option if you want a home directory for a system account to be created. **This is an option added by Red Hat**

`-s, --shell SHELL`
    使用者登入后使用的shell名称, 默认留空, 让系统选择默认的 shell, 例如 `-s /sbin/nologin` 是不允许登陆

`-u, --uid UID`
    用户的ID值。必须为唯一的ID值，除非用`-o`选项。数字不可为负值。预设为最小不得小于 `UID_MIN` 而逐次增加。0~`UID_MIN`传统上是保留给系统帐号使用。

`-Z, --selinux-user SEUSER`
    The SELinux user for the user's login. The default is to leave this
field blank, which causes the system to select the default SELinux
user.

**改变默认值**
    当使用 `-D` 选项, `useradd` 将显示默认的当前值, 或者使用命令行更新当前值, 可用选项如下

`-b HOME_DIR`
    定义使用者所属目录的`父目录`。使用者名称会附加在 `HOME_DIR` 后面用来建立新使用者的目录。使用-d后则此选项无效。

`-e EXPIRE_DATE`
    使用者帐号过期日期

`-f INACTIVE`
    帐号过期几日后停权

`-g, --gid GROUP`
    新帐号起始群组名或ID。群组名须为现有存在的名称。群组ID也须为现有存在的群组。

`-s, --shell SHELL`
    使用者登入后使用的shell名称。往后新加入的帐号都将使用此shell.

如不指定任何参数，useradd显示目前预设的值

### 备注
`/etc/skel/` 目录下的文件将会覆盖默认的用户文件
The system administrator is responsible for placing the default user files in the /etc/skel/ directory.
This version of useradd was modified by Red Hat to suit Red Hat user/group conventions.

### CAVEATS

> You may not add a user to a NIS group. This must be performed on the
NIS server.

> Similarly, if the username already exists in an external user database
such as NIS, useradd will deny the user account creation request.

### 涉及到的文件

```
/etc/passwd             #User account information.
/etc/shadow             #Secure user account information.
/etc/group              #Group account information.
/etc/gshadow            #Secure group account information.
/etc/default/useradd    #Default values for account creation.
/etc/skel/              #Directory containing default files.
/etc/login.defs         #Shadow password suite configuration.
```
### 退出值

The useradd command exits with the following values:

```
0  success
1  can't update password file
2  invalid command syntax
3  invalid argument to option
4  UID already in use (and no -o)
6  specified group doesn't exist
9  username already in use
10 can't update group file
12 can't create home directory
13 can't create mail spool
```

### SEE ALSO

`chfn(1)`, `chsh(1)`, `passwd(1)`, `crypt(3)`, `groupadd(8)`, `groupdel(8)`,`groupmod(8)`, `login.defs(5)`, `userdel(8)`, `usermod(8)`.