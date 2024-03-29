# crontab

> 为独立的用户维护计划任务文件

这个 crontab 命令提交、编辑、列出或移除 cron 计划任务。一个 cron 计划任务是一个命令，其运行是由 cron 守护程序在规则的调度间隔执行的。要提交一个 cron 计划任务，使用 `crontab -e`。crontab 命令调用一个编辑会话，允许创建一个 crontab 文件。为此文件中的每个 cron 计划任务创建条目。每个条目必须是正确的计划任务格式。

```
crontab [-u user] file
crontab [-u user] [-l | -r | -e] [-i] [-s]
crontab -n [ hostname ]
crontab -c
```

## 选项 & 参数

`-u {user}`

用来设定某个用户的 crontab 服务, 如果不使用这个选项, crontab 编辑当前用户的 crontab, 注意 `su` 可能会混淆 crontab, 所以使用 su 的时候必须要加上 `-u` 选项. 如果一个用户的计划任务不存在, 运行 `crontab -u` 的时候会自动创建.

`-l`

显示某个用户的 crontab 文件内容，如果不指定用户，则表示显示当前用户的 crontab 文件内容

`-r`

从 `/var/spool/cron` 目录中删除某个用户的 crontab 文件，如果不指定用户，则默认删除当前用户的 crontab 文件。

`-e`

编辑某个用户的 crontab 文件内容。如果不指定用户，则表示编辑当前用户的 crontab 文件

`-i`

在删除用户的 crontab 文件时给确认提示

`-n`

`cron` 使用 `-c` 选项时候使用, 启用主机集群.

`-c`

`cron` 使用 `-c` 选项时候使用, 启用主机集群.

## 文件

```
/etc/cron.allow
/etc/cron.deny
```

## 扩展阅读

Linux 下的任务调度分为两类： **系统任务调度** 和 **用户任务调度** 。

**系统任务调度：** 系统周期性所要执行的工作，比如写缓存数据到硬盘、日志清理等。在`/etc`目录下有一个 crontab 文件，这个就是系统任务调度的配置文件。

`/etc/crontab`文件包括下面几行：

```
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=""HOME=/

# run-parts
51 * * * * root run-parts /etc/cron.hourly
24 7 * * * root run-parts /etc/cron.daily
22 4 * * 0 root run-parts /etc/cron.weekly
42 4 1 * * root run-parts /etc/cron.monthly
```

前四行是用来配置 crond 任务运行的环境变量，第一行 SHELL 变量指定了系统要使用哪个 shell，这里是 bash，第二行 PATH 变量指定了系统执行命令的路径，第三行 MAILTO 变量指定了 crond 的任务执行信息将通过电子邮件发送给 root 用户，如果 MAILTO 变量的值为空，则表示不发送任务执行信息给用户，第四行的 HOME 变量指定了在执行命令或者脚本时使用的主目录。

**用户任务调度：** 用户定期要执行的工作，比如用户数据备份、定时邮件提醒等。用户可以使用  crontab  工具来定制自己的计划任务。所有用户定义的 crontab 文件都被保存在`/var/spool/cron`目录中。其文件名与用户名一致，使用者权限文件如下：

```
/etc/cron.deny     该文件中所列用户不允许使用crontab命令
/etc/cron.allow    该文件中所列用户允许使用crontab命令
/var/spool/cron/   所有用户crontab文件存放的目录,以用户名命名
```

crontab 文件的含义：用户所建立的 crontab 文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令段，格式如下：

```
minute   hour   day   month   week   command     顺序：分 时 日 月 周
```

其中：

-   minute：  表示分钟，可以是从 0 到 59 之间的任何整数。
-   hour：表示小时，可以是从 0 到 23 之间的任何整数。
-   day：表示日期，可以是从 1 到 31 之间的任何整数。
-   month：表示月份，可以是从 1 到 12 之间的任何整数。
-   week：表示星期几，可以是从 0 到 7 之间的任何整数，这里的 0 或 7 代表星期日。
-   command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。

在以上各个字段中，还可以使用以下特殊字符：

-   星号（\*）：代表所有可能的值，例如 month 字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。
-   逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”
-   中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”
-   正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如\*/10，如果用在 minute 字段，表示每十分钟执行一次。

**crond 服务**

```
/sbin/service crond start    # 启动服务
/sbin/service crond stop     # 关闭服务
/sbin/service crond restart  # 重启服务
/sbin/service crond reload   # 重新载入配置
```

查看 crontab 服务状态：

```
service crond status
```

手动启动 crontab 服务：

```
service crond start
```

查看 crontab 服务是否已设置为开机启动，执行命令：

```
ntsysv
```

加入开机自动启动：

```
chkconfig –level 35 crond on
```

## 示例 & 常用

每 1 分钟执行一次 command

```
* * * * * command
```

每小时的第 3 和第 15 分钟执行

```
3,15 * * * * command
```

在上午 8 点到 11 点的第 3 和第 15 分钟执行

```
3,15 8-11 * * * command
```

每隔两天的上午 8 点到 11 点的第 3 和第 15 分钟执行

```
3,15 8-11 */2 * * command
```

每个星期一的上午 8 点到 11 点的第 3 和第 15 分钟执行

```
3,15 8-11 * * 1 command
```

每晚的 21:30 重启 smb

```
30 21 * * * /etc/init.d/smb restart
```

每月 1、10、22 日的 4 : 45 重启 smb

```
45 4 1,10,22 * * /etc/init.d/smb restart
```

每周六、周日的 1:10 重启 smb

```
10 1 * * 6,0 /etc/init.d/smb restart
```

每天 18 : 00 至 23 : 00 之间每隔 30 分钟重启 smb

```
0,30 18-23 * * * /etc/init.d/smb restart
```

每星期六的晚上 11:00 pm 重启 smb

```
0 23 * * 6 /etc/init.d/smb restart
```

每一小时重启 smb

```
* */1 * * * /etc/init.d/smb restart
```

晚上 11 点到早上 7 点之间，每隔一小时重启 smb

```
* 23-7/1 * * * /etc/init.d/smb restart
```

每月的 4 号与每周一到周三的 11 点重启 smb

```
0 11 4 * mon-wed /etc/init.d/smb restart
```

一月一号的 4 点重启 smb

```
0 4 1 jan * /etc/init.d/smb restart
```

每小时执行`/etc/cron.hourly`目录内的脚本

```
01 * * * * root run-parts /etc/cron.hourly
```
