# scp

scp 是 (secure copy) 的简写，用于在 Linux 下进行远程拷贝文件

> 和它类似的命令有 cp，不过 cp 只是在本机进行拷贝不能跨服务器，而且 scp 传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读 read only system 时，用 scp 可以帮你把文件移出来。另外，scp 还非常不占资源，不会提高多少系统负荷，在这一点上，rsync 就远远不及它了。虽然 rsync 比 scp 会快一点，但当小文件众多的情况下，rsync 会导致硬盘 I/O 非常高，而 scp 基本不影响系统正常使用。

```
scp [-1246BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file] [-l limit] [-o ssh_option] [-P port] [-S program] [[user@]host1:]file1 ... [[user@]host2:]file2
```

## 参数

scp copies files between hosts on a network. It uses ssh(1) for data transfer, and uses the same authentication and provides the same security as ssh(1). Unlike rcp(1), scp will ask for passwords or passphrases if they are needed for authentication.

File names may contain a user and host specification to indicate that the file is to be copied to/from that host. Local file names can be made explicit using absolute or relative pathnames to avoid scp treating file names containing ':' as host specifiers. Copies between two remote hosts are also permitted.

When copying a source file to a target file which already exists, scp will replace the contents of the target file (keeping the inode).

If the target file does not yet exist, an empty file with the target file name is created, then filled with the source file contents. No attempt is made at "near-atomic" transfer using temporary files.

The options are as follows:

`-1`
使用 ssh 协议版本 1；
Forces scp to use protocol 1.

`-2`
使用 ssh 协议版本 2；
Forces scp to use protocol 2.

`-4`
使用 ipv4；
Forces scp to use IPv4 addresses only.

`-6`
使用 ipv6；
Forces scp to use IPv6 addresses only.

`-B`

以批处理模式运行；
Selects batch mode (prevents asking for passwords or passphrases).

`-C`

使用压缩；
Compression enable. Passes the -C flag to ssh(1) to enable compression.

`-c <cipher>`
Selects the cipher to use for encrypting the data transfer. This option is directly passed to ssh(1).

`-F <ssh_config>`

指定 ssh 配置文件；
Specifies an alternative per-user configuration file for ssh. This option is directly passed to ssh(1).

`-i <identity_file>`

identity_file 从指定文件中读取传输时使用的密钥文件（例如亚马逊云 pem），此参数直接传递给 ssh；
Selects the file from which the identity (private key) for public key authentication is read. This option is directly passed to ssh(1).

`-l <limit>`

指定宽带限制；
Limits the used bandwidth, specified in Kbit/s.

`-o <ssh_option>`

指定使用的 ssh 选项；

Can be used to pass options to ssh in the format used in ssh_config(5). This is useful for specifying options for which there is no separate scp command-line flag. For full details of the options listed below, and their possible values, see ssh_config(5).

AddressFamily
BatchMode
BindAddress
ChallengeResponseAuthentication
CheckHostIP
Cipher
Ciphers
Compression
CompressionLevel
ConnectionAttempts
ConnectTimeout
ControlMaster
ControlPath
GlobalKnownHostsFile
GSSAPIAuthentication
GSSAPIDelegateCredentials
HashKnownHosts
Host'
HostbasedAuthentication
HostKeyAlgorithms
HostKeyAlias
HostName
IdentityFile
IdentitiesOnly
KbdInteractiveDevices
LogLevel
MACs'
NoHostAuthenticationForLocalhost
NumberOfPasswordPrompts
PasswordAuthentication
Port'
PreferredAuthentications
Protocol
ProxyCommand
PubkeyAuthentication
RekeyLimit
RhostsRSAAuthentication
RSAAuthentication
SendEnv
ServerAliveInterval
ServerAliveCountMax
SmartcardDevice
StrictHostKeyChecking
TCPKeepAlive
UsePrivilegedPort
User'
UserKnownHostsFile
VerifyHostKeyDNS

`-P port`

指定远程主机的端口号；
Specifies the port to connect to on the remote host. Note that this option is written with a capital 'P', because -p is already reserved for preserving the times and modes of the file in rcp(1).

`-p`

保留文件的最后修改时间，最后访问时间和权限模式；
Preserves modification times, access times, and modes from the original file.

`-q`

不显示复制进度；
Quiet mode: disables the progress meter as well as warning and diagnostic messages from ssh(1).

`-r`
以递归方式复制。
Recursively copy entire directories. Note that scp follows symbolic links encountered in the tree traversal.

`-S program`
Name of program to use for the encrypted connection. The program must understand ssh(1) options.

`-v` Verbose mode. Causes scp and ssh(1) to print debugging messages about their progress. This is helpful in debugging connection, authentication, and configuration problems.

The scp utility exits 0 on success, and >0 if an error occurs.

IPV6

IPv6 address can be used everywhere where IPv4 address. In all entries must be the IPv6 address enclosed in square brackets. Note: The square brackets are metacharacters for the shell and must be escaped in shell.

## 实例

### 本地复制到远程

**复制文件**

```
# 指定了用户名，命令执行后需要输入用户密码
# 指定了远程的目录
$ scp local_file remote_username@remote_ip:remote_folder
# 指定了文件名
$ scp local_file remote_username@remote_ip:remote_file

# 没有指定用户名，命令执行后需要输入用户名和密码
# 仅指定了远程的目录，文件名字不变
$ scp local_file remote_ip:remote_folder
# 指定了文件名
$ scp local_file remote_ip:remote_file
```

**复制目录**

```
# 指定了用户名，命令执行后需要输入用户密码
$ scp -r local_folder remote_username@remote_ip:remote_folder

# 没有指定用户名，命令执行后需要输入用户名和密码
$ scp -r local_folder remote_ip:remote_folder
```

### 从远程复制到本地

从远程复制到本地的 scp 命令与上面的命令雷同，只要将从本地复制到远程的命令后面 2 个参数互换顺序就可以。

**从远处复制文件到本地目录**

```
# 从 remote_addr 机器上的/opt/soft/的目录中下载nginx.tar.gz 文件到本地/opt/soft/目录中
$ scp root@remote_addr:/opt/soft/nginx.tar.gz /opt/soft/
```

**从远处复制到本地**

```
# 从 remote_addr 机器上的/opt/soft/中下载mongodb 目录到本地的/opt/soft/目录来。
$ scp -r root@remote_addr:/opt/soft/mongodb /opt/soft/
```

**历史**

scp is based on the rcp(1) program in BSD source code from the Regents of the University of California.

## 参考文章

-   [每天一个 linux 命令（60）：scp 命令](http://www.cnblogs.com/peida/archive/2013/03/15/2960802.html)
-   [scp(1) - Linux man page](https://linux.die.net/man/1/scp)
