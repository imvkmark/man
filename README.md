---
home: true
title: Man 查询手册
heroImage: images/linux.png
tagline: null
footer: MIT Licensed | Copyright © 2018-present wulicode.com
---

# Man @ wulicode

访问地址 : https://wulicode.com/man/

github : https://github.com/imvkmark/man/

欢迎大家提交 pr, 为大家提供一个实用的工具尽一份力量

## 本地运行

```
# clone project
$ git clone {project-url}

# install dependencies
$ yarn

# start dev server
$ yarn docs:dev

# build
$ yarn docs:build
```

## Linux man 命令后面的数字含义及作用

Linux 的 man 很强大，该手册分成很多 section，使用 man 时可以指定不同的 section 来浏览，各个 section 意义如下：

```js:no-line-numbers
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

这里根据 https://www.die.net/ 进行 man 命令的区分

## Thanks To :

-   [vuepress@next](https://v2.vuepress.vuejs.org/zh/) - Vue 驱动的静态网站生成器
-   https://wangchujiang.com/linux-command/
-   https://www.die.net/
