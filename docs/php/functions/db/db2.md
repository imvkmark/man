# 与具体数据库系统相关的扩展 - IBM DB2

DB2调用层接口可以连接IBM DB2 Universal 数据库, IBM Cloudscape 和 Apache Derby 数据库


## 安装

这个模块使用 cmph 模块的 perfect hashing 函数

http://pecl.php.net/package/chdb


## 配置

`inclued.enabled int` 默认 : "Off"
PHP_INI_SYSTEM



## 定义常量



## 函数

`mixed db2_autocommit ( resource $connection [, bool $value ] )`

`bool db2_bind_param ( resource $stmt , int $parameter-number , string $variable-name [, int $parameter-type [, int $data-type = 0 [, int $precision = -1 [, int $scale = 0 ]]]] )`

`object db2_client_info ( resource $connection )`

`bool db2_close ( resource $connection )`

`resource db2_column_privileges ( resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $column-name ]]]] )`

`resource db2_columns ( resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $column-name ]]]] )`

`bool db2_commit ( resource $connection )`

`string db2_conn_error ([ resource $connection ] )`

`string db2_conn_errormsg ([ resource $connection ] )`

`resource db2_connect ( string $database , string $username , string $password [, array $options ] )`

`int db2_cursor_type ( resource $stmt )`

`string db2_escape_string ( string $string_literal )`

`resource db2_exec ( resource $connection , string $statement [, array $options ] )`

`bool db2_execute ( resource $stmt [, array $parameters ] )`

`array db2_fetch_array ( resource $stmt [, int $row_number = -1 ] )`

`array db2_fetch_assoc ( resource $stmt [, int $row_number = -1 ] )`

`array db2_fetch_both ( resource $stmt [, int $row_number = -1 ] )`

`object db2_fetch_object ( resource $stmt [, int $row_number = -1 ] )`

`bool db2_fetch_row ( resource $stmt [, int $row_number ] )`

`int db2_field_display_size ( resource $stmt , mixed $column )`

`string db2_field_name ( resource $stmt , mixed $column )`

`int db2_field_num ( resource $stmt , mixed $column )`

`int db2_field_precision ( resource $stmt , mixed $column )`

`int db2_field_scale ( resource $stmt , mixed $column )`

`string db2_field_type ( resource $stmt , mixed $column )`

`int db2_field_width ( resource $stmt , mixed $column )`

`resource db2_foreign_keys ( resource $connection , string $qualifier , string $schema , string $table-name )`

`bool db2_free_result ( resource $stmt )`

`bool db2_free_stmt ( resource $stmt )`

`string db2_get_option ( resource $resource , string $option )`

`string db2_last_insert_id ( resource $resource )`

`string db2_lob_read ( resource $stmt , int $colnum , int $length )`

`resource db2_next_result ( resource $stmt )`

`int db2_num_fields ( resource $stmt )`

`int db2_num_rows ( resource $stmt )`

`bool db2_pclose ( resource $resource )`

`resource db2_pconnect ( string $database , string $username , string $password [, array $options ] )`

`resource db2_prepare ( resource $connection , string $statement [, array $options ] )`

`resource db2_primary_keys ( resource $connection , string $qualifier , string $schema , string $table-name )`

`resource db2_procedure_columns ( resource $connection , string $qualifier , string $schema , string $procedure , string $parameter )`

`resource db2_procedures ( resource $connection , string $qualifier , string $schema , string $procedure )`

`mixed db2_result ( resource $stmt , mixed $column )`

`bool db2_rollback ( resource $connection )`

`object db2_server_info ( resource $connection )`

`bool db2_set_option ( resource $resource , array $options , int $type )`

`resource db2_special_columns ( resource $connection , string $qualifier , string $schema , string $table_name , int $scope )`

`resource db2_statistics ( resource $connection , string $qualifier , string $schema , string $table-name , bool $unique )`

`string db2_stmt_error ([ resource $stmt ] )`

`string db2_stmt_errormsg ([ resource $stmt ] )`

`resource db2_table_privileges ( resource $connection [, string $qualifier [, string $schema [, string $table_name ]]] )`

`resource db2_tables ( resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $table-type ]]]] )`

