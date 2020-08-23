# 影响PHP行为的扩展 - PHP 选项/信息


## 介绍

这些函数允许你获得许多关于PHP本身的参数, 如运行时的配置,被加载的扩展,版本等等,你也将找到设置你的运行中的PHP的选项的函数.


## 配置

`assert.active boolean`  (默认: "1")

PHP_INI_ALL     启用 assert() 运行


`assert.bail     boolean`  (默认: "0")

PHP_INI_ALL     遇到失败的 assertion 时候终止脚本运行



`assert.warning`  (默认: "1")

PHP_INI_ALL     在每个失败的 assertion 的时候解决PHP waning


`assert.callback`  (默认: Null)

PHP_INI_ALL     失败的 assertion 的时候调用的用户函数


`assert.quiet_eval`  (默认: "0")

PHP_INI_ALL     如果启用, 则不对 assertion报错,如果关闭,则根据error_reporting进行等级报错


`enable_dl`  (默认: "1")

PHP_INI_SYSTEM  此已废弃的 特性即将 被移除。, 这里仅仅支持 apache 模块, 是否动态的启用dl()函数

`max_execution_time ` (默认: "30")

PHP_INI_ALL     PHP脚本编译器默认执行的最长时限, 命令行不受时间限制, 在运行时候 可以使用 set_time_limit() 进行设置,但是这个设置也和服务器的设置有关系,apache中有个 Timeout  选项,而 IIS 有一个 CGI timeout 函数.


`max_input_time`  (默认: "-1")

PHP_INI_PERDIR     分析$_GET, $_POST 的最长时间, [上传] 测量的时间是在PHP开始接受数据算起.
Available since PHP 4.3.0.

`max_input_nesting_level`  (默认: "64")

PHP_INI_PERDIR     输入变量的最大嵌入深度
Available since PHP 4.4.8 and PHP 5.2.3.

`max_input_vars`  (默认: "1000")

PHP_INI_PERDIR     最大的变量数量, 用于防止hash碰撞的服务器攻击
Available since PHP 5.3.9.

`magic_quotes_gpc`  (默认: "1")

PHP_INI_PERDIR     如果在输入的变量中存在 ', ", \, NULL 字符将被自动转义
PHP_INI_ALL in PHP <= 4.2.3. Removed in PHP 5.4.0.

`magic_quotes_runtime  (默认: "0")`

PHP_INI_ALL      如果开启, 从外部 数据库/ 文件 获取到的数据将会自动被 反斜线 转义, 如果开启了 magic_quotes_sybase,将会使用单引号对单引号进行转义而非反斜线.
一下函数将受影响:
```
get_meta_tags()
file_get_contents()
file()
fgets()
fwrite()
fread()
fputcsv()
stream_socket_recvfrom()
exec()
system()
passthru()
stream_get_contents()
bzread()
gzfile()
gzgets()
gzwrite()
gzread()
exif_read_data()
dba_insert()
dba_replace()
dba_fetch()
ibase_fetch_row()
ibase_fetch_assoc()
ibase_fetch_object()
mssql_fetch_row()
mssql_fetch_object()
mssql_fetch_array()
mssql_fetch_assoc()
mysqli_fetch_row()
mysqli_fetch_array()
mysqli_fetch_assoc()
mysqli_fetch_object()
pg_fetch_row()
pg_fetch_assoc()
pg_fetch_array()
pg_fetch_object()
pg_fetch_all()
pg_select()
sybase_fetch_object()
sybase_fetch_array()
sybase_fetch_assoc()
SplFileObject::fgets()
SplFileObject::fgetcsv()
SplFileObject::fwrite()
```
Removed in PHP 5.4.0.

`zend.enable_gc` (默认: "1")
PHP_INI_ALL     启用或者禁用 gc [垃圾回收器]
Available since PHP 5.3.0.



## 函数


`mixed assert_options ( int $what [, mixed $value ] )`

设置 assert() 控制选项, 或者获取当前的 assert()选项.
- $what     assert 选项, 这些选项可以使用ini_set进行控制,对应说明见 上边配置
    ASSERT_ACTIVE
    ASSERT_WARNING
    ASSERT_BAIL
    ASSERT_QUIET_EVAL
    ASSERT_CALLBACK
- $value     配置参数

`bool assert ( mixed $assertion )`

检测给定的断言是否是 FALSE , 如果给定的参数为字串,将被作为php代码执行
assertion 应当使用debug 特性, .应当作为健全检测来检测条件应当是 true
assertion 不应当用于运行时候的输入检测.
assert function接收三个参数,第一个是文件, 第二个是行号, 第三个是参数.

`bool dl ( string $library )`

 加载扩展函数, 不建议使用
 载入指定参数 library 的 PHP 扩展
 [5.3]在5.3中被移除

` bool extension_loaded ( string $name )`

检测扩展是否加载

`int gc_collect_cycles ( void )`

[>=5.3.0] 强制回收

`void gc_enable ( void )`

禁用垃圾回收

`bool gc_enabled ( void )`

检测是否 gc 可用

`void gc_disable ( void )`

禁用gc

`string get_cfg_var ( string $option )`

获取PHP配置选项的值, 这里获取的是PHP核心配置的值

- $option     
    cfg_file_path     如果可用, 则返回配置文件的绝对地址.
    post_max_size     最大的传输大小
    variables_order   变量顺序
    ......

`string get_current_user ( void )`

返回当前PHP脚本的所有者名称, 返回字串

`array get_defined_constants ([ bool $categorize = false ] )`

返回定义的常量的信息, 指定了 $categorize , 则根据类别返回PHP定义的常量

`array get_extension_funcs ( string $module_name )`

根据模块名称以数组的形式返回函数列表, 定义在该模块中的函数的列表

`string get_include_path ( void )`

获取当前 include_path 配置选项

`array get_included_files ( void )`

获取包含的文件列表, 使用:include, include_once, require or require_once 的列表

`array get_loaded_extensions ([ bool $zend_extensions = false ] )`

返回加载的扩展列表
- $zend_extensions     
    仅返回 zend 方式加载的扩展

`int get_magic_quotes_gpc ( void )`

获取 magic_quotes_gpc 的配置, 在运行时候尝试设置 magic_quotes_gpc 将不会生效

`int get_magic_quotes_runtime ( void )`

获取当前的 magic_quotes_runtime 设置

`string getenv ( string $varname )`

获取环境变量的值

`int getlastmod ( void )`

返回的时间戳适用于 date() 函数

获取当前页面上次修改的时间戳, 如果想要访问其他文件的修改时间,可以使用 filemtime()

`int getmygid ( void )`

获取当前脚本的 组ID

`int getmyinode ( void )`

获取当前脚本的 inode

`int getmypid ( void )`

获取PHP的进程ID

`int getmyuid ( void )`

获取PHP脚本所有者的用户ID 

`array getopt ( string $options [, array $longopts ] )`

 获取命令行参数列表
```
- $option     短参数列表
      独立字符[a-z0-9A-Z]    不接受任何字符
      独立字符+冒号          必要参数
      独立字符+2冒号          可选参数, 可选参数不接受 ' '作为分隔符    
- $longopts   长参数列表
    长参数和短参数不同点是,长参数接收是数组形式的, 而短参数接受的是字串.
```
```
$shortopts = "";
$shortopts = "f:"; // Required value
$shortopts .= "v::"; // Optional value
$shortopts .= "abc"; // These options do not accept values


$longopts = array(
     "required:" , // Required value
     "optional::" , // Optional value
     "option" , // No value
     "opt" , // No value
);
$options = getopt($shortopts, $longopts);
var_dump($options);
```

`array getrusage ([ int $who = 0 ] )`

获取当前资源的使用量
[unix] 该函数尚未在win平台下实现

`array ini_get_all ([ string $extension [, bool $details = true ]] )`

返回所有配置选项信息
- $extension   
   如果指定,则仅仅返回指定扩展选项的配置
- $details
   是否取回详细信息
   包括配置的
       global_value
       local_value
       access          PHP配置指令作用域说明 
     
`string ini_get ( string $varname )`

获取单个配置选项的值

`void ini_restore ( string $varname )`

重置选项的值到默认config文件的值

`string ini_set ( string $varname , string $newvalue )`

设置配置选项的值

`int memory_get_peak_usage ([ bool $real_usage = false ] )`

返回内存峰值
如果指定 $real_usage ,则返回系统分配的内存的真实大小, 如果设置为 false 则返回 emalloc() 的值

`int memory_get_usage ([ bool $real_usage = false ] )`

返回系统分配给当前脚本最大的值
如果指定 $real_usage ,则返回系统分配的内存的真实大小, 如果设置为 false 则返回 emalloc() 的值

`string php_ini_loaded_file ( void )`

获取当前加载的php.ini的配置信息

`string php_ini_scanned_files ( void )`

返回附加的 ini 文件夹所加载的文件的列表
返回 ', ' 分割的 配置文件的列表, ', '在新行之后
如果 --with-config-file-scan-dir 没有指定,本函数返回false
如果指定的文件夹中没有文件,则返回空字串.

`string php_logo_guid ( void )`
`string php_egg_logo_guid( void )`

函数返回加载PHP图像的guid, 如果expose_php 选项开启,则允许使显示PHP logo图像 

![-w192](/_static/images/media/15934459230634/15934466171902.jpg)
     

`string php_sapi_name ( void )`

返回服务器和PHP之间的接口[the Server API , SAPI]的类型(小写状态) 
     PHP_SAPI  返回同样的值.
     可选的值:
    * aolserver
    * apache
    * apache2filter
    * apache2handler
    * caudium
    * cgi (until PHP 5.3)
    * cgi-fcgi
    * cli
    * continuity
    * embed
    * isapi
    * litespeed
    * milter
    * nsapi
    * phttpd
    * pi3web
    * roxen
    * thttpd
    * tux
    * webjames

`string php_uname ([ string $mode = "a" ] )`

返回PHP运行的操作系统的信息
> $mode
  a     包含所有模式, s, n, r, v, m
  s     操作系统的名称  [Windows NT]
  n     域名
  r     版本号
  v     版本信息
  m     机器类型

`bool phpcredits ([ int $flag = CREDITS_ALL ] )`

打印出所有的PHP贡献者, 模块开发者
- $flag

```
  CREDITS_ALL     
       CREDITS_DOCS + CREDITS_GENERAL + CREDITS_GROUP + 
       CREDITS_MODULES + CREDITS_FULLPAGE
  CREDITS_DOCS          文档组
  CREDITS_FULLPAGE      全页显示
  CREDITS_GENERAL       语言设计, 概念, php作者, sapi 模块
  CREDITS_GROUP         核心开发者
  CREDITS_MODULES       模块和开发者
  CREDITS_SAPI          SAPI模块和开发者
```

`bool phpinfo ([ int $what = INFO_ALL ] )`

输出PHP配置的信息

```
- $what
  INFO_GENERAL     1
       配置行, php.ini位置, build date, 服务器信息,系统信息
  INFO_CREDITS     2
       PHP贡献者
  INFO_CONFIGURATION     4
       当前和主要的设置值, ini_get()可以获取
  INFO_MODULES     8
       加载的模块和他们的配置设置
  INFO_ENVIRONMENT     16
       环境变量的信息     $_ENV.
  INFO_VARIABLES     32
       所有的预定义变量的信息, EGPCS (Environment, GET, POST, Cookie, Server)
  INFO_LICENSE     64
       PHP使用协议
  INFO_ALL     -1
       包含以上所有
```

`string phpversion ([ string $extension ] )`

返回PHP的版本号
     PHP_VERSION 变量

`bool putenv ( string $setting )`

向服务器添加变量, 变量在当前请求下有效

设置环境变量可能导致安全问题, 
     safe_mode_allowed_env_vars 包含一个','分割的前缀列表, 安全模式下,用户只允许修改变量并且这个变量拥有 "PHP_" 前缀, 如果设置为空的话,php将允许修改任何环境变量.
     safe_mode_protected_env_vars  这儿参数包含一系列环境变量是用户不允许修改的.

`void restore_include_path ( void )`

恢复默认的 include_path 配置

`string set_include_path ( string $new_include_path )`

设置 include_path, 返回旧的 include_path

`bool set_magic_quotes_runtime ( bool $new_setting )`

设置 magic_quotes_runtime

`void set_time_limit ( int $seconds )`

设置脚本最大运行时间.

`string sys_get_temp_dir ( void )`

返回系统临时文件的路径 [C:\Windows\TEMP]

`mixed version_compare ( string $version1 , string $version2 [, string $operator ] )`

版本对比函数
```
 比较规则  any string < dev < alpha = a < beta = b < RC = rc < # < pl = p
 $version1     版本1
 $version2     版本2
 $operator     操作符   [>]
      <, lt, <=, le, >, gt, >=, ge, ==, =, eq, !=, <>, ne
      这里只允许小写, 大小写敏感
```

`string zend_logo_guid ( void )`

返回zend 的logoid

`int zend_thread_id ( void )`

返回zend 当前的进程id

`string zend_version ( void )`

返回zend的版本号
