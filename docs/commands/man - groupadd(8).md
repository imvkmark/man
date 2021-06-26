# man - groupadd(8)


创建新用户组

## 语法
```
groupadd [-g gid [-o]] [-r] [-f] [-K KEY=VALUE] group
```

## 描述
> `groupadd`可指定群组名称来建立新的群组帐号。需要时可从系统中取得新群组值

## 选项


> `-f` 
    这是force标志。使得新增一个已经存在的群组帐号时，系统会出现错误讯息然后结束groupadd。如果是这样的情况，不会改变这个群组(或再新增一次), 也可同时加上-g选项当你加上一个gid，此时gid就不用是唯一值，可不加-o参数，建好群组后会显结果.[**这是REDHAT额外增设的选项**]。

> `-r` 
    此参数是用来建立系统帐号。它会自动帮你选定一个小于 `GID_MIN` 的gid除非命令行再加上-g参数。
[**这是REDHAT额外增设的选项**]。

> `-g GID`
    ID值。除非使用-o参数不然该值必须是唯一，不可相同。数值不可为负。预设为最小不得小于 `GID_MIN` 而逐次增加。0~`GID_MIN`传统上是保留给系统帐号使用。

> `-h, --help`
    显示帮助信息并推出

> `-K KEY=VALUE`
    覆盖  `/etc/login.defs` 默认值 (GID_MIN, GID_MAX and others).
    可一次设置多个值:
    > Example: 设置GID从 100 to 499.
    `groupadd -K GID_MIN=100 -K GID_MAX=499 test`
    > 新组 "test" 添加到 `/etc/group`.
    `/etc/group test:x:105:`
    Note: 参数使用`,` 分隔不工作.
    (Example: -K GID_MIN=10,GID_MAX=499)

> `-o`
    允许使用不同的 GID 来创建组
    

## FILES
```sh
/etc/group      #Group account information.
/etc/gshadow    #Secure group account information.
/etc/login.defs #Shadow password suite configuration.
```
## CAVEATS[防止误解的说明；警告]

> If the groupname already exists in an external group database such as `NIS`, groupadd will deny the group creation request.

## EXIT VALUES


> The groupadd command exits with the following values:
`0`  success
`2`  invalid command syntax
`3`  invalid argument to option
`4`  GID not unique (when -o not used)
`9`  group name not unique
`10` can't update group file

## SEE ALSO
`chfn(1)`, `chsh(1)`, `passwd(1)`, `gpasswd(8)`, `groupdel(8)`, `groupmod(8)`, `login.defs(5)`, `useradd(8)`, `userdel(8)`, `usermod(8)`.
