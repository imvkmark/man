---
hero:
    title: WuliCode Man 知识库
features:
    - icon: /images/logo/command.png
      title: 普通的命令
    - icon: /images/logo/system.png
      title: 系统调用
    - icon: /images/logo/library.png
      title: 库函数
    - icon: /images/logo/files.png
      title: 特殊文件
    - icon: /images/logo/format.png
      title: 文件的格式
    - icon: /images/logo/games.png
      title: 游戏
    - icon: /images/logo/macro.png
      title: 附件和变量
    - icon: /images/logo/system.png
      title: 系统管理命令
    - icon: /images/logo/other.png
      title: 其他
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org) <br/> <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备13016276号-7</a>
---

# Linux man 命令后面的数字含义及作用

Linux 的 man 很强大，该手册分成很多 section，使用 man 时可以指定不同的 section 来浏览，各个 section 意义如下：

```
1 - commands
    普通的命令

2 - system calls
    系统调用,如 open,write 之类的(通过这个，至少可以很方便的查到调用这个函数，需要加什么头文件)

3 - library calls
    库函数,如 printf,fread

4 - special files
    特殊文件,也就是/dev 下的各种设备文件
    
5 - file formats and convertions
    指文件的格式,比如 passwd, 就会说明这个文件中各个字段的含义

6 - games for linux
    给游戏留的,由各个游戏自己定义

7 - macro packages and conventions
    附件还有一些变量,比如向 environ 这种全局变量在这里就有说明

8 - system management commands
    系统管理用的命令,这些命令只能由 root 使用,如 ifconfig

9 - 其他
    其他命令
```
这里根据 https://www.die.net/ 进行 man 命令的区分, 以便这个项目发展的更好

## 格式说明

格式替换

`-a` 

说明

```
(^(-[A-Za-z-\/]*\s{0,1}(<.*?>)?)\s*((--[a-zA-Z-=]*)?(<.*?>)?))(\s*)(#\s*)?(.*)?\n?
`\2` `\4` \n\n \9 \n\n
```