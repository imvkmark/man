# groupadd

用于创建一个新的工作组, 新工作组的信息将被添加到系统文件中

```
groupadd [-g gid [-o]] [-r] [-f] [-K KEY=VALUE] group
```

## 选项 & 参数

`-g GID`

ID 值。除非使用-o 参数不然该值必须是唯一，不可相同。数值不可为负。预设为最小不得小于 `GID_MIN` 而逐次增加。0~`GID_MIN`传统上是保留给系统帐号使用。

`-r`

此参数是用来建立系统帐号。它会自动帮你选定一个小于 `GID_MIN` 的 gid 除非命令行再加上-g 参数。
[**这是 REDHAT 额外增设的选项**]。

`-K KEY=VALUE`

覆盖 `/etc/login.defs` 默认值 (GID_MIN, GID_MAX and others).
可一次设置多个值:

> Example: 设置 GID 从 100 to 499.
> `groupadd -K GID_MIN=100 -K GID_MAX=499 test`
> 新组 "test" 添加到 `/etc/group`.
> `/etc/group test:x:105:`
> Note: 参数使用`,` 分隔不工作.
> (Example: -K GID_MIN=10,GID_MAX=499)

`-o`

允许使用不同的 GID 来创建组

`-f`

这是 force 标志。使得新增一个已经存在的群组帐号时，系统会出现错误讯息然后结束 groupadd。如果是这样的情况，不会改变这个群组(或再新增一次), 也可同时加上-g 选项当你加上一个 gid，此时 gid 就不用是唯一值，可不加-o 参数，建好群组后会显结果.[**这是 REDHAT 额外增设的选项**]。

`-h, --help`

显示帮助信息并推出

**参数**

`group` 指定新建工作组的组名。

## 实例

建立一个新组，并设置组 ID 加入系统：

```
groupadd -g 344 jsdigname
```

此时在`/etc/passwd`文件中产生一个组 ID（GID）是 344 的项目。

## 相关文件

```sh
/etc/group      #Group account information.
/etc/gshadow    #Secure group account information.
/etc/login.defs #Shadow password suite configuration.
```

## 警告

> If the groupname already exists in an external group database such as `NIS`, groupadd will deny the group creation request.

## 退出值

> The groupadd command exits with the following values:
> `0` success
> `2` invalid command syntax
> `3` invalid argument to option
> `4` GID not unique (when -o not used)
> `9` group name not unique
> `10` can't update group file
