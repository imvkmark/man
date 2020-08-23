# 与具体数据库系统相关的扩展 - dBase

本函数允许你访问存储在dbf数据库中的记录


## 安装




## 配置





## 定义常量



## 函数

`bool dbase_add_record ( int $dbase_identifier , array $record )`

向数据库中添加记录

`bool dbase_close ( int $dbase_identifier )`

关闭给定标示符的数据库

`int dbase_create ( string $filename , array $fields )`

根据给定的定义创建一个dbase数据库

`bool dbase_delete_record ( int $dbase_identifier , int $record_number )`

根据给定的行号,删除数据库中的记录

`array dbase_get_header_info ( int $dbase_identifier )`

根据给定的标示符返回数据库的列定义

`array dbase_get_record_with_names ( int $dbase_identifier , int $record_number )`

根据给定的索引返回数据库中的记录

`array dbase_get_record ( int $dbase_identifier , int $record_number )`

根据给定的索引以数组形式返回数据库中的一行数据

`int dbase_numfields ( int $dbase_identifier )`

返回数据库中字段的个数

`int dbase_numrecords ( int $dbase_identifier )`

返回数据库中记录的个数

`int dbase_open ( string $filename , int $mode )`

打开一个数据库

`bool dbase_pack ( int $dbase_identifier )`

执行由dbase_delete_record()指定的行号类似于执行删除操作

`bool dbase_replace_record ( int $dbase_identifier , array $record , int $record_number )`

根据给定的记录和行号来替换记录

















































