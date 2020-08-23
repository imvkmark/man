# 与具体数据库系统相关的扩展 - cubrid

访问CUBRID数据库服务


## 安装

PECL 扩展的 DLL 当前不可用
http://pecl.php.net/package/cubrid


## 配置





## 定义常量



## 函数

CUBRID 函数

`bool cubrid_bind ( resource $req_identifier , int $bind_index , mixed $bind_value [, string $bind_value_type ] )`

在cubrid_prepare()中sql中的占位符中的值,可用本函数进行绑定然后执行

`bool cubrid_close_prepare ( resource $req_identifier )`

关闭存储资源的句柄
     
`bool cubrid_close_request ( resource $req_identifier )`

关闭请求句柄

`array cubrid_col_get ( resource $conn_identifier , string $oid , string $attr_name )`

`int cubrid_col_size ( resource $conn_identifier , string $oid , string $attr_name )`

`array cubrid_column_names ( resource $req_identifier )`

`array cubrid_column_types ( resource $req_identifier )`

`bool cubrid_commit ( resource $conn_identifier )`

`resource cubrid_connect_with_url ( string $conn_url [, string $userid [, string $passwd [, bool $new_link = false ]]] )`

`resource cubrid_connect ( string $host , int $port , string $dbname [, string $userid [, string $passwd [, bool $new_link = false ]]] )`

`string cubrid_current_oid ( resource $req_identifier )`

`bool cubrid_disconnect ([ resource $conn_identifier ] )`

`bool cubrid_drop ( resource $conn_identifier , string $oid )`

`int cubrid_error_code_facility ( void )`

`int cubrid_error_code ( void )`

`string cubrid_error_msg ( void )`

`resource cubrid_execute ( resource $conn_identifier , string $sql [, int $option ] )`

`bool cubrid_execute ( resource $request_identifier [, int $option ] )`

`mixed cubrid_fetch ( resource $result [, int $type = CUBRID_BOTH ] )`

`bool cubrid_free_result ( resource $req_identifier )`

`bool cubrid_get_autocommit ( resource $conn_identifier )`

`string cubrid_get_charset ( resource $conn_identifier )`

`string cubrid_get_class_name ( resource $conn_identifier , string $oid )`

`string cubrid_get_client_info ( void )`

`array cubrid_get_db_parameter ( resource $conn_identifier )`

`int cubrid_get_query_timeout ( resource $req_identifier )`

`string cubrid_get_server_info ( resource $conn_identifier )`

`mixed cubrid_get ( resource $conn_identifier , string $oid [, mixed $attr ] )`

`string cubrid_insert_id ([ resource $conn_identifier ] )`

`int cubrid_is_instance ( resource $conn_identifier , string $oid )`

`bool cubrid_lob_close ( array $lob_identifier_array )`

`bool cubrid_lob_export ( resource $conn_identifier , resource $lob_identifier , string $path_name )`

`array cubrid_lob_get ( resource $conn_identifier , string $sql )`

`bool cubrid_lob_send ( resource $conn_identifier , resource $lob_identifier )`

`string cubrid_lob_size ( resource $lob_identifier )`

`bool cubrid_lob2_bind ( resource $req_identifier , int $bind_index , mixed $bind_value [, string $bind_value_type ] )`

`bool cubrid_lob2_close ( resource $lob_identifier )`

`bool cubrid_lob2_export ( resource $lob_identifier , string $file_name )`

`bool cubrid_lob2_import ( resource $lob_identifier , string $file_name )`

`resource cubrid_lob2_new ([ resource $conn_identifier [, string $type = "BLOB" ]] )`

`string cubrid_lob2_read ( resource $lob_identifier , int $len )`

`bool cubrid_lob2_seek64 ( resource $lob_identifier , string $offset [, int $origin = CUBRID_CURSOR_CURRENT ] )`

`bool cubrid_lob2_seek ( resource $lob_identifier , int $offset [, int $origin = CUBRID_CURSOR_CURRENT ] )`

`string cubrid_lob2_size64 ( resource $lob_identifier )`

`int cubrid_lob2_size ( resource $lob_identifier )`

`string cubrid_lob2_tell64 ( resource $lob_identifier )`

`int cubrid_lob2_tell ( resource $lob_identifier )`

`bool cubrid_lob2_write ( resource $lob_identifier , string $buf )`

`bool cubrid_lock_read ( resource $conn_identifier , string $oid )`

`bool cubrid_lock_write ( resource $conn_identifier , string $oid )`

`int cubrid_move_cursor ( resource $req_identifier , int $offset [, int $origin = CUBRID_CURSOR_CURRENT ] )`

`bool cubrid_next_result ( resource $result )`

`int cubrid_num_cols ( resource $result )`

`int cubrid_num_rows ( resource $result )`

`resource cubrid_pconnect_with_url ( string $conn_url [, string $userid [, string $passwd ]] )`

`resource cubrid_pconnect ( string $host , int $port , string $dbname [, string $userid [, string $passwd ]] )`

`resource cubrid_prepare ( resource $conn_identifier , string $prepare_stmt [, int $option = 0 ] )`

`int cubrid_put ( resource $conn_identifier , string $oid [, string $attr ], mixed $value )`

`bool cubrid_rollback ( resource $conn_identifier )`

`array cubrid_schema ( resource $conn_identifier , int $schema_type [, string $class_name [, string $attr_name ]] )`

`bool cubrid_seq_drop ( resource $conn_identifier , string $oid , string $attr_name , int $index )`

`bool cubrid_seq_insert ( resource $conn_identifier , string $oid , string $attr_name , int $index , string $seq_element )`

`bool cubrid_seq_put ( resource $conn_identifier , string $oid , string $attr_name , int $index , string $seq_element )`

`bool cubrid_set_add ( resource $conn_identifier , string $oid , string $attr_name , string $set_element )`

`bool cubrid_set_autocommit ( resource $conn_identifier , bool $mode )`

`bool cubrid_set_db_parameter ( resource $conn_identifier , int $param_type , int $param_value )`

`bool cubrid_set_drop ( resource $conn_identifier , string $oid , string $attr_name , string $set_element )`

`bool cubrid_set_query_timeout ( resource $req_identifier , int $timeout )`

`string cubrid_version ( void )`

CUBRID MySQL 兼容性函数

`int cubrid_affected_rows ([ resource $conn_identifier ] )`

返回最后一次[INSERT, DELETE, UPDATE]所影响的行数

`string cubrid_client_encoding ([ resource $conn_identifier ] )`

返回当前连接的字符集
     
`bool cubrid_close ([ resource $conn_identifier ] )`

关闭cubrid连接

`bool cubrid_data_seek ( resource $result , int $row_number )`

`string cubrid_db_name ( array $result , int $index )`

`int cubrid_errno ([ resource $conn_identifier ] )`

`string cubrid_error ([ resource $connection ] )`

`array cubrid_fetch_array ( resource $result [, int $type = CUBRID_BOTH ] )`

`array cubrid_fetch_assoc ( resource $result [, int $type ] )`

`object cubrid_fetch_field ( resource $result [, int $field_offset = 0 ] )`

`array cubrid_fetch_lengths ( resource $result )`

`object cubrid_fetch_object ( resource $result [, string $class_name [, array $params [, int $type ]]] )`

`array cubrid_fetch_row ( resource $result [, int $type ] )`

`string cubrid_field_flags ( resource $result , int $field_offset )`

`int cubrid_field_len ( resource $result , int $field_offset )`

`string cubrid_field_name ( resource $result , int $field_offset )`

`bool cubrid_field_seek ( resource $result [, int $field_offset = 0 ] )`

`string cubrid_field_table ( resource $result , int $field_offset )`

`string cubrid_field_type ( resource $result , int $field_offset )`

`array cubrid_list_dbs ([ resource $conn_identifier ] )`

`int cubrid_num_fields ( resource $result )`

`bool cubrid_ping ([ resource $conn_identifier ] )`

`resource cubrid_query ( string $query [, resource $conn_identifier ] )`

`string cubrid_real_escape_string ( string $unescaped_string [, resource $conn_identifier ] )`

`string cubrid_result ( resource $result , int $row [, mixed $field = 0 ] )`

`resource cubrid_unbuffered_query ( string $query [, resource $conn_identifier ] )`

CUBRID 过时的别名和函数

`int cubrid_load_from_glo ( resource $conn_identifier , string $oid , string $file_name )`

`string cubrid_new_glo ( resource $conn_identifier , string $class_name , string $file_name )`

`int cubrid_save_to_glo ( resource $conn_identifier , string $oid , string $file_name )`

`int cubrid_send_glo ( resource $conn_identifier , string $oid )`

示例
