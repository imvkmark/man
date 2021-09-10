# man - fdisk(8)

> Linux 分区表操作工具软件, 查看磁盘使用情况和磁盘分区

**fdisk 命令** 用于观察硬盘实体使用情况，也可对硬盘分区。它采用传统的问答式界面，而非类似 DOS fdisk 的 cfdisk 互动式操作界面，因此在使用上较为不便，但功能却丝毫不打折扣。

```
fdisk [-u]设备名
fdisk -l [-u] [设备名 ...]
fdisk -s分区 ...
fdisk -v
```

## 描述

硬盘可以被分成一个或多个逻辑磁盘，称为分区。 这些分区信息都存放在硬盘 0 扇区的 分区表中。

在 BSD 风格中，分区被称为“磁盘片”和“磁盘标签”

Linux 至少需要一个分区，即用做它的 root 文件系统。 Linux 可以使用交换文件和/或交换分区，交换分区更有效。因此，通常用户会创建第二个 Linux 分区供交换分区使用。在 Intel 兼容的硬件上，启动系统的 BIOS 往往只能访问 1024 柱面之前的硬盘。因此，使用大硬盘的用户通常创建第三个只有几兆大小的小分区，通常用来装配在 /boot ，用来存放内核映象和一些其它启动时需要的附属文件，所以应确保此分区必须是在 BIOS 可访问的部分。出于安全方面的考虑、管理方面的原因、备份的需要或为了某些测试，也可以将一个硬盘分成更多的分区使用。

fdisk （以第一种形式调用）是一个以菜单问答形式出现的用来创建和修改分区的程序。它可以辩认 DOS 类型的分区表和 BSD 或 SUN 类型的磁盘标签。

设备 通常是下列之一：

```
/dev/hda
/dev/hdb
/dev/sda
/dev/sdb
```

(/dev/hd[a-h] 指 IDE 硬盘，/dev/sd[a-p] 指 SCSI 硬盘， /dev/ed[a-d] 指 ESDI 硬盘，/dev/xd[ab] 指 XT 硬盘)。设备名指整个硬盘设备。

分区 是在 设备名 后跟一个分区号。例如： /dev/hda1 是指系统在第一个 IDE 硬盘上的第一个分区。 IDE 硬盘可以最多创建 63 个分区，SCSI 可以创建 15 个。又见 /usr/src/linux/Documnetation/devices.txt。

一个 BSD/SUN 风格的磁盘标签可以描述 8 个分区，其中第三个应该是“整个磁盘”分区。不要在零柱面使用那些的确使用其第一扇区的分区，（比如交换分区）因为这将损坏磁盘标签。

一个 IRIX/SGI 风格的磁盘标签可以描述 16 个分区，其中第十一个应该是完整“卷标”分区，而第九个应该被标成“卷标头”。卷标头将覆盖分区表，即，它从零块开始并缺省时延伸 5 个柱面。卷标头中余下的空间可以用来存放头部目录记录信息。不要有任何分区与此卷标头重叠。同样，也不要改变它的类形和在其中创建任何文件系统，因为这样做将丢失分区表信息。只有当将 Linux 安装在 IRIX/SGI 机器上或在 Linux 中使用 IRIX/SGI 磁盘时才会使用这种类形的标签。

一个 DOS 风格的分区表可以描述无限的分区。零扇区用来存放 4 个分区（称为主分区）的描述信息。其中可以有一个分区是扩展分区；此扩展分区也就是存储各逻辑分区地方，是一个在组成链表的扇区里存放的描述符，每个描述符都是一个对应分区的开头．四个主分区，不管是否存在，都用数字 1-4 编号，而逻辑分区以 5 开始。

在 DOS 风格的分区表中，开始地址偏移量和每个分区的大小是以两种不同的方式来存放的：以扇区数的绝对值来描述（占 32 位）和以柱面、磁头、扇区三个一组的形式（占 10+8+6 个位）来描述。前一种描述很好 - 如果每扇区 512 个字节的情况，这种方式可描述到 2TB 的大小。后一种方式有两个不同的问题。第一个是这种 C/H/S 方式必须是在磁头数和每磁道扇区数都已知的情况下才能使用。第二个是就算我们已经知道了这些数字，而只用 24 位来描述这些信息也是不够的。 DOS 只使用这种 C/H/S 的方式，Windows 则两个都用，Linux 则不使用 C/H/S 的方式。

如果可能， fdisk 会自动获得磁盘的几何结构。这不一定是磁盘的物理结构（当然，现在的磁盘没有真正的物理结构，同样也不能以简单的柱面/磁头/扇区的形式来描述），而是 MS-DOS 用来供分区表使用的几何结构。

通常，缺省时这些都将工作得很好，而且，如果磁盘上只有一个 Linux 操作系统时也不会有任何问题。然而，如果磁盘上还有其它操作系统，那么，用其它操作系统的 fdisk 来生成其自身使用的至少一个分区是比较好的选择。当 Linux 启动的时侯，它会扫描分区表，并由此推出和其它共存操作系统友好合作所需的（伪）几何结构。

当打印一个分区表时，系统会对分区表进行一次一至性检查。这些检查会验证磁盘几何结构和物理地址的开始、结束、指向和标识，同时在柱面的边界检查分区的开始和结束。（除了第一个分区）

一些版本的 MS-DOS 在创建第一个分区时并不是从柱面边界的开始处，而是从第一柱面的第 2 扇区处开始。从柱面 1 开始的分区不能直接从柱面边界开始，但这未必会造成困难，除非你在你的机器上安装了 OS/2 操作系统。

当执行了对分区表的更新后退出时，程序会运行一次 sync() 和 BLKRRPART ioct1() （从磁盘上重读分区表信息）。以前，在使用完 fdisk 后需要重启系统。我认为现在不需要这样了 -- 太快的重起可能导致未写入磁盘的数据丢失。注意，内核和磁盘硬件都可能缓存数据。

DOS6.x WARNING
DOS6.x 的 FORMAT 命令会在分区的第一扇区的数据区查找一些信息，并认为这些信息比分区表中的信息更可靠。 DOS 的 FORMAT 命令认为 DOS 的 FDISK 命令会在分区变化时自动清除分区数据区的前 512 字节区域。 DOS 的 FORMAT 将查看这些额外的信息，甚至在给出了 /U 这个参数后也是如此。我们认为这是 DOS FORMAT 和 DOS FDISK 的臭虫。

如果你使用 cfdisk 或 fdisk 更改了 DOS 分区表的条目，你必须同时使用 dd 命令将该分区的前 512 个字节清零，之后，你才能使用 DOS 的 FORMAT 命令对这个分区进行格式化。例如：如果你使用 cfdisk 去创建一个 DOS 分区表项目，即分区 /dev/hda1，然后（在退出 fdisk 或 cfdisk 后重启 Linux 使分区表合法化）你就有必要使用如下命令 “dd if=/dev/ero of=/dev/hda1 bs=512 count=1” 来将分区的前 512 个字节清零。

当你使用 dd 命令时请 务必万分小心 ， 由于任何小的打印错误都将造成磁盘数据的失效。

最好你还是使用由操作系统指定的分区工具软件。例如，当你创建 DOS 分区时应使用 DOS FDISK，而创建 Linux 分区时则使用 Linux 的 fdisk 或 cfdisk。

## 选项 & 参数

`-b sectorsize`

扇区大小(512、1024、2048 或 4096)

Specify the sector size of the disk. Valid values are 512, 1024, 2048 or 4096. (Recent kernels know the sector size. Use this only on old kernels or to override the kernel's ideas.) Since util-linux-ng 2.17 fdisk differentiates between logical and physical sector size. This option changes both sector sizes to sectorsize.

`-h`

打印此帮助文本

`-c`

兼容模式：“dos”或“nondos”(默认)

Switch off DOS-compatible mode. (Recommended)

`-C cyls`
指定柱面数
Specify the number of cylinders of the disk. I have no idea why anybody would want to do so.

`-H heads`
指定磁头数
Specify the number of heads of the disk. (Not the physical number, of course, but the number used for partition tables.) Reasonable values are 255 and 16.

`-S sects`

指定每个磁道的扇区数

Specify the number of sectors per track of the disk. (Not the physical number, of course, but the number used for partition tables.) A reasonable value is 63.

`-v`

打印 fdisk 的版本信息并退出．

`-l`

列出指定设备的分区表信息并退出。如果没有给出设备，那么使用那些在 /proc/partitions （如果存在）提到的．

`-u`

以扇区数而不是以柱面数的形式显示分区表中各分区的信息, 显示单位：“cylinders”(柱面)或“sectors”(扇区，默认)

`-s partition`
将分区的 大小 （单位为块）信息输出到标准输出
The size of the partition (in blocks) is printed on the standard output.

## 扩展阅读

- [Aliyun 盘挂载/扩容](https://note.wulicode.com/os/centos/aliyun-mount-disk.html)