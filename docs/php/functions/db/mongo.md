# 与具体数据库系统相关的扩展 - Mongo


 MongoDB是一个基于分布式文件存储的数据库。由C++语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。

 MongoDB是一个高性能，开源，无模式的文档型数据库，是当前NoSql数据库中比较热门的一种。

 MongoDB是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似json的bjson格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。

 传统的关系数据库一般由数据库（database）、表（table）、记录（record）三个层次概念组成，MongoDB是由数据库（database）、集合（collection）、文档对象（document）三个层次组成。MongoDB对于关系型数据库里的表，但是集合中没有列、行和关系概念，这体现了模式自由的特点。

精准介绍:

MongoDB开发学习（1）开天辟地，经典入门
MongoDB开发学习（2）索引的基本操作


## 安装

MongoDB的PHP驱动程序可以工作在几乎任何系统上
win平台扩展dll地址
https://s3.amazonaws.com/drivers.mongodb.org/php/index.html

## 配置

`mongo.allow_empty_keys` 默认 : 0 

PHP_INI_ALL   

`[1.2.0]mongo.allow_persistent`默认 : 1 

PHP_INI_ALL

`mongo.chunk_size` 默认 : 262144 

PHP_INI_ALL   

`mongo.cmd`默认 :  "$"  
    
PHP_INI_ALL   

`mongo.default_host` 默认 : "localhost" 
     
PHP_INI_ALL   

`mongo.default_port` 默认 : 27017 

PHP_INI_ALL   

`[1.2.10]mongo.is_master_interval` 默认 : 15 

PHP_INI_ALL 
Added in 1.2.10, before 1.3.0 the default value was 60. 

`mongo.long_as_object` 默认 : 0

PHP_INI_ALL   

`mongo.native_long` 默认 : 0* 

PHP_INI_ALL   

`[1.2.10]mongo.ping_interval` 默认 : 5 

PHP_INI_ALL

`mongo.utf8` 默认 : 1 

PHP_INI_ALL   



定义常量



## 函数 



### 核心类
1.MongoClient — MongoClient 类
2.MongoDB — MongoDB 类
3.MongoCollection — The MongoCollection class
4.MongoCursor — The MongoCursor class
### Types
1.MongoId — MongoId 类
2.MongoCode — The MongoCode class
3.MongoDate — The MongoDate class
4.MongoRegex — MongoRegex 类
5.MongoBinData — The MongoBinData class
6.MongoInt32 — MongoInt32 类
7.MongoInt64 — MongoInt64 类
8.MongoDBRef — The MongoDBRef class
9.MongoMinKey — The MongoMinKey class
10.MongoMaxKey — The MongoMaxKey class
11.MongoTimestamp — MongoTimestamp 类
### GridFS Classes
1.MongoGridFS — The MongoGridFS class
2.MongoGridFSFile — The MongoGridFSFile class
3.MongoGridFSCursor — The MongoGridFSCursor class
6.Miscellaneous
1.MongoLog — The MongoLog class
2.MongoPool — The MongoPool class
3.Mongo — The Mongo class [deprecated]

### Mongo 函数

对 99% 的用户是完全没用的。 仅仅在做着一些不寻常的事的情况下有用，比如在 PHP 驱动的基础上编写自己的驱动

`array bson_decode ( string $bson )`

反序列化一个 BSON 对象为 PHP 数组

`string bson_encode ( mixed $anything )`

序列化一个 PHP 变量为 BSON 字符串

### Exceptions
1.MongoException — The MongoException class
2.MongoResultException — MongoResultException 类
3.MongoCursorException — The MongoCursorException class
4.MongoCursorTimeoutException — The MongoCursorTimeoutException class
5.MongoConnectionException — The MongoConnectionException class
6.MongoGridFSException — The MongoGridFSException class

