# shutdown

用来执行系统关机的命令


**shutdown命令** 用来系统关机命令。shutdown指令可以关闭所有程序，并依用户的需要，进行重新开机或关机的动作。

shutdown 以一种安全的方式关闭系统。所有登陆用户都可以看到关机信息提示，并且 `login(1)` 将被阻塞。可以指定立刻关机，也可以指定系统在一定的延时后关机。所有进程都将接收到 SIGTERM 信号。这可以使 `vi(1)` 等程序有时间将处于编辑状态的文件进行存储，邮件和新闻程序进程则可以将所有缓冲池内的数据进行适当的清除等等。 shutdown 通过通知 init 进程，要求它改换运行级别来实现。运行级别 0 用来关闭系统，运行级别 6 用来重启系统，运行级别 1 用来使系统进入执行系统管理任务状态，如果没有给出 -h 或 -r 标志时，这是 shutdown 命令的默认工作状态。具体关机或重启所执行的操作请查阅 /etc/inittab 文件中相应的运行级别栏。  


##  语法

```
/sbin/shutdown [-t sec] [-arkhncfFHP] time [warning-message]
```

## 选项

`-a`
    使用 /etc/shutdown.allow 来验证身份。
`-t <sec>`  
    通知 `init(8)` 在转换到其它运行级别前，发送警告 (warning) 信号后延时 (sec) 秒数后再发送关闭 (kill) 信号。
`-k`
    并非真正关机，只向所有人显示警告信息。
`-r`
重启。

`-h`
停机。

`-n`      
    *[DEPRECATED]* 不调用 `init(8)` 程序进行关机操作，而由自己进行。不建议用户使用这种关机方式，它的结果一般也不是你希望的那样。
`-f`
    重启时跳过磁盘检测。
`-F`
    重启时强制磁盘检测。
`-c`
    取消运行中的 shutdown 进程。不可能为此选项指定 time 参数，但你可以在命令行输入一条解释消息来向所有用户说明。(一般的shutdown指令可以用按“+”号来进行中断)
    
## 参数
`time`
    关机时间。
`warning-message`
    发送给所有用户的消息。


> time 参数的格式可以有很多种。首先，可以是 hh:mm 格式的绝对时间，其中 hh 指的是小时（一到二位数），mm 指的是分钟（二位数）。第二种是 +m 格式，其中 m 指的是等待的分钟数。 now 是 +0 的别名。

> 如果 shutdown 在调用时使用了延时，它将自动创建一个咨询 (advisory) 文件 /etc/nologin ，作用是禁止 `login(1)` 允许新用户登陆，除非 shutdown 在向 init 发信号前意外中止 (就是说，它被取消或出了什么问题)。它会在调用 init 改变运行级之前删除这个文件。

> -f 标志意味着 '快速重启'。这将创建一个咨询 (advisory) 文件 /fastboot ，此文件在系统重启时会被检测到。启动脚本 rc 会检测是否存在这样的文件，如果有，就不会再运行 `fsck(1)`，因为系统是以正常方式关闭的。这之后，启动进程会删除 /fastboot。

> -F 标志意味着 '强制 fsck'。这将创建一个咨询 (advisory) 文件 /forcefsck，此文件在系统重启时会被检测到。启动脚本 rc 会检测是否存在这个文件，如果有，就运行 `fsck(1)` 并且加上一个特殊的 'force' 标志，以使得即使正常卸载的文件系统也被检查。这之后，启动进程会删除 /forcefsck。

 > -n 标志导致 shutdown 不调用 init 程序进行关机，而是自己关闭所有运行中的进程。shutdown 接下来会关闭配额 (quota)，记账 (accounting) 和交换分区，卸载所有文件系统。  
 
## ACCESS CONTROL

>   如果在 /etc/inittab 文件中有适当的条目，当按下特殊键 CTRL-ALT-DEL 时，shutdown 可以被 `init(8)` 调用。这意味着可以物理地接触到终端键盘的任何人都可以关闭系统。要避免这种行为，shutdown 可以检测是否有授权的用户登录到了虚拟终端之一。如果 shutdown 在调用时带有 -a 参数 (可以将它添加到 /etc/inittab 中 shutdown 的执行命令之后)，它将检测是否存在 /etc/shutdown.allow 文件。接下来它比较文件中的登录名与虚拟终端的登录用户列表 (在/var/run/utmp)。只有当授权的用户之一 或者 root 登录了，它才会继续。否则，它会把信息
`shutdown: no authorized users logged in`
写到 (物理的) 系统终端。/etc/shutdown.allow 的格式是每行一个用户名。允许出现空行和注释行 (以 # 开头)。此文件当前有最多 32 个用户的限制。

>   注意，如果 /etc/shutdown.allow 不存在，-a 参数将被忽略。 

##  实例

指定现在立即关机：

```
shutdown -h now
```

指定5分钟后关机，同时送出警告信息给登入用户：

```
shutdown +5 "System will shutdown after 5 minutes"
```


## FILES
```sh
/fastboot
/etc/inittab
/etc/init.d/halt
/etc/init.d/reboot
/etc/shutdown.allow
```

## NOTES

> 很多用户忘记了传递 time 参数，结果被 shutdown 产生的错误消息所迷惑。time 参数是必须的，90% 的情况下这个参数会是 now。

> Init 只能在终端模式捕获 CTRL-ALT-DEL 并且启动 shutdown。如果系统正在运行 X window System，X 服务器处理所有的按键。一些 X11 环境使得捕获 CTRL-ALT-DEL 成为可能，但是这个事件究竟做了什么依赖于那个环境。

> Shutdown 没有被设计为使用 setuid。/etc/shutdown.allow 不用来找出谁在执行 shutdown ，它*只*用来检查当前在终端 (之一) 登录的用户。 


## SEE ALSO
`fsck(8)`, `init(8)`, `halt(8)`, `poweroff(8)`, `reboot(8)`  