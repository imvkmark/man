# 与具体数据库系统相关的扩展 - mysql

MySQL Drivers and Plugins

PHP offers several MySQL drivers and plugins for accessing and handling MySQL.
The differences and functionality of the MySQL extensions are described within the overview of this section.



* Overview of the MySQL PHP drivers

**Terminology overview**

* 什么是API
* 什么是连接器
* 什么是驱动
* 什么是扩展

**Choosing an API**

* 推荐的API

**Choosing a library**

* Mysql — Original MySQL API

## 简介

这个扩展不建议在写代码时候使用. 作为替代 mysqli / PDO 建议使用.同时加载mysql(recode)时候可能会崩溃

## 安装/配置

`mysql.allow_persistent` 默认 : "1"

 PHP_INI_SYSTEM     允许持久连接
 
`mysql.max_persistent` 默认 : "-1"

 PHP_INI_SYSTEM     每个进程中最大的持久连接数目
 
`mysql.max_links` 默认 : "-1"

 PHP_INI_SYSTEM     最大连接数包含持久连接
 
`mysql.trace_mode` 默认 : "0"

 PHP_INI_ALL        跟踪模式

 `mysql.default_port` 默认: Null

 PHP_INI_ALL        默认端口奥
    
`mysql.default_socket` 默认: Null

 PHP_INI_ALL        默认的socket

`mysql.default_host`  默认: Null

 PHP_INI_ALL        默认俩接的数据库服务地址
    
`mysql.default_user`  默认: Null

 PHP_INI_ALL        默认的用户名
    
`mysql.default_password`默认: Null

PHP_INI_ALL        默认密码

`mysql.connect_timeout` 默认 : "60"

 PHP_INI_ALL        连接超时密码


## 预定义常量

## MySQL 函数

`int mysql_affected_rows ([ resource $link_identifier ] )`

取得前一次 MySQL 操作所影响的记录行数,  INSERT，UPDATE 或 DELETE 查询所影响的记录行数

`string mysql_client_encoding ([ resource $link_identifier ] )`

从 MySQL 中取得 character_set 变量的值

`bool mysql_close ([ resource $link_identifier ] )`

关闭指定的连接标识所关联的到 MySQL 服务器的非持久连接

`resource mysql_connect ([ string $server [, string $username [, string $password [, bool $new_link [, int $client_flags ]]]]] )`

打开或重复使用一个到 MySQL 服务器的连接

`bool mysql_data_seek ( resource $result , int $row_number )`

将指定的结果标识所关联的 MySQL 结果内部的行指针移动到指定的行号

`string mysql_db_name ( resource $result , int $row [, mixed $field ] )`

取得 mysql_list_dbs() 调用所返回的数据库名

`int mysql_errno ([ resource $link_identifier ] )`

返回错误号

`string mysql_error ([ resource $link_identifier ] )`

返回上一个 MySQL 操作产生的文本错误信息

`string mysql_escape_string ( string $unescaped_string )`

转义一个字符串用于 mysql_query 
     1. 不转义 %, _
     2. 不接受数据连接句柄

`array mysql_fetch_array ( resource $result [, int $ result_type ] )`

取出一行数组模式
- $result_type
  MYSQL_ASSOC    mysql_fetch_assoc 
  MYSQL_NUM      mysql_fetch_row 
  MYSQL_BOTH

`array mysql_fetch_assoc ( resource $result )`

取出关联数组

`object mysql_fetch_field ( resource $result [, int $field_offset ] )`

返回一个包含字段信息的对象

```
[name] => id              # 列名 
[table] => welive_answer  # 该列所在的表名 
[def] =>            
[max_length] => 1         # 该列最大长度 
[not_null] => 1           # 1，如果该列不能为 NULL
[primary_key] => 1        # 1，如果该列是 primary key 
[multiple_key] => 0       # 1，如果该列是 non-unique key 
[unique_key] => 0         # 1，如果该列是 unique key 
[numeric] => 1            # 1，如果该列是 numeric 
[blob] => 0               # 1，如果该列是 BLOB 
[type] => int             # 该列的类型 
[unsigned] => 1           # 1，如果该列是无符号数 
[zerofill] => 0           # 1，如果该列是 zero-filled 
```

`array mysql_fetch_lengths ( resource $result )`

取得结果集中每个输出的长度
将上一次 mysql_fetch_row(), mysql_fetch_array(), mysql_fetch_object(),的获取的某一列的结果的长度存储到一个数组中.偏移量从 0 开始

`object mysql_fetch_object ( resource $result )`

从结果集中取得一行作为对象

`array mysql_fetch_row ( resource $result )`

从结果集中取得一行作为枚举数组

`string mysql_field_flags ( resource $result , int $field_offset )`

从结果中取得和指定字段关联的标志, 返回指定字段的字段标志。每个标志都用一个单词表示，之间用一个空格分开，因此可以用 explode() 将其分开

`int mysql_field_len ( resource $result , int $field_offset )`

返回指定字段的长度

`string mysql_field_name ( resource $result , int $field_index )`

取得结果中指定字段的字段名

`int mysql_field_seek ( resource $result , int $field_offset )`

将结果集中的指针设定为制定的字段偏移量 

`string mysql_field_table ( resource $result , int $field_offset )`

取得指定字段所在的表名 

`string mysql_field_type ( resource $result , int $field_offset )`

取得结果集中指定字段的类型

`bool mysql_free_result ( resource $result )`

释放结果内存

`string mysql_get_client_info ( void )`

取得 MySQL 客户端信息

`string mysql_get_host_info ([ resource $link_identifier ] )`

取得 MySQL 主机信息

`int mysql_get_proto_info ([ resource $link_identifier ] )`

取得 MySQL 协议信息

`string mysql_get_server_info ([ resource $link_identifier ] )`

取得 MySQL 服务器信息

`string mysql_info ([ resource $link_identifier ] )`

取得最近一条查询的信息 

`int mysql_insert_id ([ resource $link_identifier ] )`

取得上一步 INSERT 操作产生的 ID

`resource mysql_list_dbs ([ resource $link_identifier ] )`

列出 MySQL 服务器中所有的数据库

`resource mysql_list_fields ( string $database_name , string $table_name [, resource $link_identifier ] )`

列出 MySQL 结果中的字段

`resource mysql_list_processes ([ resource $link_identifier ] )`

列出 MySQL 进程

`int mysql_num_fields ( resource $result )`

取得结果集中字段的数目

`int mysql_num_rows ( resource $result )`

返回结果集中的行数

`resource mysql_pconnect ([ string $server [, string $username [, string $password [, int $client_flags ]]]] )`

打开一个到 MySQL 服务器的持久连接

`bool mysql_ping ([ resource $ link_identifier ] )`

Ping 一个服务器连接，如果没有连接则重新连接

`resource mysql_query ( string $query [, resource $link_identifier ] )`

发送一条 MySQL 查询

`string mysql_real_escape_string ( string $unescaped_string [, resource $link_identifier ] )`

转义 SQL 语句中使用的字符串中的特殊字符，并考虑到连接的当前字符集 

`bool mysql_select_db ( string $database_name [, resource $ link_identifier ] )`

选择 MySQL 数据库

`string mysql_stat ([ resource $link_identifier ] )`

取得当前系统状态

`string mysql_tablename ( resource $result , int $i )`

取得表名

`int mysql_thread_id ([ resource $link_identifier ] )`

返回当前线程的 ID

`resource mysql_unbuffered_query ( string $query [, resource $link_identifier ] )`

向 MySQL 发送一条 SQL 查询，并不获取和缓存结果的行

