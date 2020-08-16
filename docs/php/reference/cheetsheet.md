# Php 函数 Cheatsheet 

原文地址 : https://zhuangbi888.com/php-dict/

## 数组

array_change_key_case — 将数组中的所有键名修改为全大写或小写

array_chunk — 将一个数组分割成多个

array_column — 返回数组中指定的一列

array_combine — 创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值

array_count_values — 统计数组中所有的值

array_diff_assoc — 带索引检查计算数组的差集

array_diff_key — 使用键名比较计算数组的差集

array_diff_uassoc — 用用户提供的回调函数做索引检查来计算数组的差集

array_diff_ukey — 用回调函数对键名比较计算数组的差集

array_diff — 计算数组的差集

array_fill_keys — 使用指定的键和值填充数组

array_fill — 用给定的值填充数组

array_filter — 用回调函数过滤数组中的单元

array_flip — 交换数组中的键和值

array_intersect_assoc — 带索引检查计算数组的交集

array_intersect_key — 使用键名比较计算数组的交集

array_intersect_uassoc — 带索引检查计算数组的交集，用回调函数比较索引

array_intersect_ukey — 用回调函数比较键名来计算数组的交集

array_intersect — 计算数组的交集

array_key_exists — 检查数组里是否有指定的键名或索引

array_key_first — Gets the first key of an array

array_key_last — Gets the last key of an array

array_keys — 返回数组中部分的或所有的键名

array_map — 为数组的每个元素应用回调函数

array_merge_recursive — 递归地合并一个或多个数组

array_merge — 合并一个或多个数组

array_multisort — 对多个数组或多维数组进行排序

array_pad — 以指定长度将一个值填充进数组

array_pop — 弹出数组最后一个单元（出栈）

array_product — 计算数组中所有值的乘积

array_push — 将一个或多个单元压入数组的末尾（入栈）

array_rand — 从数组中随机取出一个或多个单元

array_reduce — 用回调函数迭代地将数组简化为单一的值

array_replace_recursive — 使用传递的数组递归替换第一个数组的元素

array_replace — 使用传递的数组替换第一个数组的元素

array_reverse — 返回单元顺序相反的数组

array_search — 在数组中搜索给定的值，如果成功则返回首个相应的键名

array_shift — 将数组开头的单元移出数组

array_slice — 从数组中取出一段

array_splice — 去掉数组中的某一部分并用其它值取代

array_sum — 对数组中所有值求和

array_udiff_assoc — 带索引检查计算数组的差集，用回调函数比较数据

array_udiff_uassoc — 带索引检查计算数组的差集，用回调函数比较数据和索引

array_udiff — 用回调函数比较数据来计算数组的差集

array_uintersect_assoc — 带索引检查计算数组的交集，用回调函数比较数据

array_uintersect_uassoc — 带索引检查计算数组的交集，用单独的回调函数比较数据和索引

array_uintersect — 计算数组的交集，用回调函数比较数据

array_unique — 移除数组中重复的值

array_unshift — 在数组开头插入一个或多个单元

array_values — 返回数组中所有的值

array_walk_recursive — 对数组中的每个成员递归地应用用户函数

array_walk — 使用用户自定义函数对数组中的每个元素做回调处理

array — 新建一个数组

arsort — 对数组进行逆向排序并保持索引关系

asort — 对数组进行排序并保持索引关系

compact — 建立一个数组，包括变量名和它们的值

count — 计算数组中的单元数目，或对象中的属性个数

current — 返回数组中的当前单元

each — 返回数组中当前的键／值对并将数组指针向前移动一步

end — 将数组的内部指针指向最后一个单元

extract — 从数组中将变量导入到当前的符号表

in_array — 检查数组中是否存在某个值

key_exists — 别名 array_key_exists

key — 从关联数组中取得键名

krsort — 对数组按照键名逆向排序

ksort — 对数组按照键名排序

list — 把数组中的值赋给一组变量

natcasesort — 用“自然排序”算法对数组进行不区分大小写字母的排序

natsort — 用“自然排序”算法对数组排序

next — 将数组中的内部指针向前移动一位

pos — current 的别名

prev — 将数组的内部指针倒回一位

range — 根据范围创建数组，包含指定的元素

reset — 将数组的内部指针指向第一个单元

rsort — 对数组逆向排序

shuffle — 打乱数组

sizeof — count 的别名

sort — 对数组排序

uasort — 使用用户自定义的比较函数对数组中的值进行排序并保持索引关联

uksort — 使用用户自定义的比较函数对数组中的键名进行排序

usort — 使用用户自定义的比较函数对数组中的值进行排序



## 字符串

addcslashes — 以 C 语言风格使用反斜线转义字符串中的字符

addslashes — 使用反斜线引用字符串

bin2hex — 函数把包含数据的二进制字符串转换为十六进制值

chop — rtrim 的别名

chr — 返回指定的字符

chunk_split — 将字符串分割成小块

convert_cyr_string — 将字符由一种 Cyrillic 字符转换成另一种

convert_uudecode — 解码一个 uuencode 编码的字符串

convert_uuencode — 使用 uuencode 编码一个字符串

count_chars — 返回字符串所用字符的信息

crc32 — 计算一个字符串的 crc32 多项式

crypt — 单向字符串散列

echo — 输出一个或多个字符串

explode — 使用一个字符串分割另一个字符串

fprintf — 将格式化后的字符串写入到流

get_html_translation_table — 返回使用 htmlspecialchars 和 htmlentities 后的转换表

hebrev — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew）

hebrevc — 将逻辑顺序希伯来文（logical-Hebrew）转换为视觉顺序希伯来文（visual-Hebrew），并且转换换行符

hex2bin — 转换十六进制字符串为二进制字符串

html_entity_decode — Convert HTML entities to their corresponding characters

htmlentities — 将字符转换为 HTML 转义字符

htmlspecialchars_decode — 将特殊的 HTML 实体转换回普通字符

htmlspecialchars — 将特殊字符转换为 HTML 实体

implode — 将一个一维数组的值转化为字符串

join — 别名 implode

lcfirst — 使一个字符串的第一个字符小写

levenshtein — 计算两个字符串之间的编辑距离

localeconv — Get numeric formatting information

ltrim — 删除字符串开头的空白字符（或其他字符）

md5_file — 计算指定文件的 MD5 散列值

md5 — 计算字符串的 MD5 散列值

metaphone — Calculate the metaphone key of a string

money_format — 将数字格式化成货币字符串

nl_langinfo — Query language and locale information

nl2br — 在字符串所有新行之前插入 HTML 换行标记

number_format — 以千位分隔符方式格式化一个数字

ord — 转换字符串第一个字节为 0-255 之间的值

parse_str — 将字符串解析成多个变量

print — 输出字符串

printf — 输出格式化字符串

quoted_printable_decode — 将 quoted-printable 字符串转换为 8-bit 字符串

quoted_printable_encode — 将 8-bit 字符串转换成 quoted-printable 字符串

quotemeta — 转义元字符集

rtrim — 删除字符串末端的空白字符（或者其他字符）

setlocale — 设置地区信息

sha1_file — 计算文件的 sha1 散列值

sha1 — 计算字符串的 sha1 散列值

similar_text — 计算两个字符串的相似度

soundex — Calculate the soundex key of a string

sprintf — Return a formatted string

sscanf — 根据指定格式解析输入的字符

str_getcsv — 解析 CSV 字符串为一个数组

str_ireplace — str_replace 的忽略大小写版本

str_pad — 使用另一个字符串填充字符串为指定长度

str_repeat — 重复一个字符串

str_replace — 子字符串替换

str_rot13 — 对字符串执行 ROT13 转换

str_shuffle — 随机打乱一个字符串

str_split — 将字符串转换为数组

str_word_count — 返回字符串中单词的使用情况

strcasecmp — 二进制安全比较字符串（不区分大小写）

strchr — 别名 strstr

strcmp — 二进制安全字符串比较

strcoll — 基于区域设置的字符串比较

strcspn — 获取不匹配遮罩的起始子字符串的长度

strip_tags — 从字符串中去除 HTML 和 PHP 标记

stripcslashes — 反引用一个使用 addcslashes 转义的字符串

stripos — 查找字符串首次出现的位置（不区分大小写）

stripslashes — 反引用一个引用字符串

stristr — strstr 函数的忽略大小写版本

strlen — 获取字符串长度

strnatcasecmp — 使用“自然顺序”算法比较字符串（不区分大小写）

strnatcmp — 使用自然排序算法比较字符串

strncasecmp — 二进制安全比较字符串开头的若干个字符（不区分大小写）

strncmp — 二进制安全比较字符串开头的若干个字符

strpbrk — 在字符串中查找一组字符的任何一个字符

strpos — 查找字符串首次出现的位置

strrchr — 查找指定字符在字符串中的最后一次出现

strrev — 反转字符串

strripos — 计算指定字符串在目标字符串中最后一次出现的位置（不区分大小写）

strrpos — 计算指定字符串在目标字符串中最后一次出现的位置

strspn — 计算字符串中全部字符都存在于指定字符集合中的第一段子串的长度。

strstr — 查找字符串的首次出现

strtok — 标记分割字符串

strtolower — 将字符串转化为小写

strtoupper — 将字符串转化为大写

strtr — 转换指定字符

substr_compare — 二进制安全比较字符串（从偏移位置比较指定长度）

substr_count — 计算字串出现的次数

substr_replace — 替换字符串的子串

substr — 返回字符串的子串

trim — 去除字符串首尾处的空白字符（或者其他字符）

ucfirst — 将字符串的首字母转换为大写

ucwords — 将字符串中每个单词的首字母转换为大写

vfprintf — 将格式化字符串写入流

vprintf — 输出格式化字符串

vsprintf — 返回格式化字符串

wordwrap — 打断字符串为指定数量的字串



## 多字节字符串

mb_check_encoding — 检查字符串在指定的编码里是否有效

mb_chr — Get a specific character

mb_convert_case — 对字符串进行大小写转换

mb_convert_encoding — 转换字符的编码

mb_convert_kana — Convert "kana" one from another ("zen-kaku", "han-kaku" and more)

mb_convert_variables — 转换一个或多个变量的字符编码

mb_decode_mimeheader — 解码 MIME 头字段中的字符串

mb_decode_numericentity — 根据 HTML 数字字符串解码成字符

mb_detect_encoding — 检测字符的编码

mb_detect_order — 设置/获取 字符编码的检测顺序

mb_encode_mimeheader — 为 MIME 头编码字符串

mb_encode_numericentity — Encode character to HTML numeric string reference

mb_encoding_aliases — Get aliases of a known encoding type

mb_ereg_match — Regular expression match for multibyte string

mb_ereg_replace_callback — Perform a regular expression search and replace with multibyte support using a callback

mb_ereg_replace — Replace regular expression with multibyte support

mb_ereg_search_getpos — Returns start point for next regular expression match

mb_ereg_search_getregs — Retrieve the result from the last multibyte regular expression match

mb_ereg_search_init — Setup string and regular expression for a multibyte regular expression match

mb_ereg_search_pos — Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string

mb_ereg_search_regs — Returns the matched part of a multibyte regular expression

mb_ereg_search_setpos — Set start point of next regular expression match

mb_ereg_search — Multibyte regular expression match for predefined multibyte string

mb_ereg — Regular expression match with multibyte support

mb_eregi_replace — Replace regular expression with multibyte support ignoring case

mb_eregi — Regular expression match ignoring case with multibyte support

mb_get_info — 获取 mbstring 的内部设置

mb_http_input — 检测 HTTP 输入字符编码

mb_http_output — 设置/获取 HTTP 输出字符编码

mb_internal_encoding — 设置/获取内部字符编码

mb_language — 设置/获取当前的语言

mb_list_encodings — 返回所有支持编码的数组

mb_ord — Get code point of character

mb_output_handler — 在输出缓冲中转换字符编码的回调函数

mb_parse_str — 解析 GET/POST/COOKIE 数据并设置全局变量

mb_preferred_mime_name — 获取 MIME 字符串

mb_regex_encoding — Set/Get character encoding for multibyte regex

mb_regex_set_options — Set/Get the default options for mbregex functions

mb_scrub — Description

mb_send_mail — 发送编码过的邮件

mb_split — 使用正则表达式分割多字节字符串

mb_strcut — 获取字符的一部分

mb_strimwidth — 获取按指定宽度截断的字符串

mb_stripos — 大小写不敏感地查找字符串在另一个字符串中首次出现的位置

mb_stristr — 大小写不敏感地查找字符串在另一个字符串里的首次出现

mb_strlen — 获取字符串的长度

mb_strpos — 查找字符串在另一个字符串中首次出现的位置

mb_strrchr — 查找指定字符在另一个字符串中最后一次的出现

mb_strrichr — 大小写不敏感地查找指定字符在另一个字符串中最后一次的出现

mb_strripos — 大小写不敏感地在字符串中查找一个字符串最后出现的位置

mb_strrpos — 查找字符串在一个字符串中最后出现的位置

mb_strstr — 查找字符串在另一个字符串里的首次出现

mb_strtolower — 使字符串小写

mb_strtoupper — 使字符串大写

mb_strwidth — 返回字符串的宽度

mb_substitute_character — 设置/获取替代字符

mb_substr_count — 统计字符串出现的次数

mb_substr — 获取部分字符串



## 变量处理

boolval — 获取变量的布尔值

debug_zval_dump — Dumps a string representation of an internal zend value to output

doubleval — floatval 的别名

empty — 检查一个变量是否为空

floatval — 获取变量的浮点值

get_defined_vars — 返回由所有已定义变量所组成的数组

get_resource_type — 返回资源（resource）类型

gettype — 获取变量的类型

import_request_variables — 将 GET／POST／Cookie 变量导入到全局作用域中

intval — 获取变量的整数值

is_array — 检测变量是否是数组

is_bool — 检测变量是否是布尔型

is_callable — 检测参数是否为合法的可调用结构

is_countable — Verify that the contents of a variable is a countable value

is_double — is_float 的别名

is_float — 检测变量是否是浮点型

is_int — 检测变量是否是整数

is_integer — is_int 的别名

is_iterable — Verify that the contents of a variable is an iterable value

is_long — is_int 的别名

is_null — 检测变量是否为 NULL

is_numeric — 检测变量是否为数字或数字字符串

is_object — 检测变量是否是一个对象

is_real — is_float 的别名

is_resource — 检测变量是否为资源类型

is_scalar — 检测变量是否是一个标量

is_string — 检测变量是否是字符串

isset — 检测变量是否已设置并且非 NULL

print_r — 以易于理解的格式打印变量。

serialize — 产生一个可存储的值的表示

settype — 设置变量的类型

strval — 获取变量的字符串值

unserialize — 从已存储的表示中创建 PHP 的值

unset — 释放给定的变量

var_dump — 打印变量的相关信息

var_export — 输出或返回一个变量的字符串表示



## 文件系统

basename — 返回路径中的文件名部分

chgrp — 改变文件所属的组

chmod — 改变文件模式

chown — 改变文件的所有者

clearstatcache — 清除文件状态缓存

copy — 拷贝文件

delete — 参见 unlink 或 unset

dirname — 返回路径中的目录部分

disk_free_space — 返回目录中的可用空间

disk_total_space — 返回一个目录的磁盘总大小

diskfreespace — disk_free_space 的别名

fclose — 关闭一个已打开的文件指针

feof — 测试文件指针是否到了文件结束的位置

fflush — 将缓冲内容输出到文件

fgetc — 从文件指针中读取字符

fgetcsv — 从文件指针中读入一行并解析 CSV 字段

fgets — 从文件指针中读取一行

fgetss — 从文件指针中读取一行并过滤掉 HTML 标记

file_exists — 检查文件或目录是否存在

file_get_contents — 将整个文件读入一个字符串

file_put_contents — 将一个字符串写入文件

file — 把整个文件读入一个数组中

fileatime — 取得文件的上次访问时间

filectime — 取得文件的 inode 修改时间

filegroup — 取得文件的组

fileinode — 取得文件的 inode

filemtime — 取得文件修改时间

fileowner — 取得文件的所有者

fileperms — 取得文件的权限

filesize — 取得文件大小

filetype — 取得文件类型

flock — 轻便的咨询文件锁定

fnmatch — 用模式匹配文件名

fopen — 打开文件或者 URL

fpassthru — 输出文件指针处的所有剩余数据

fputcsv — 将行格式化为 CSV 并写入文件指针

fputs — fwrite 的别名

fread — 读取文件（可安全用于二进制文件）

fscanf — 从文件中格式化输入

fseek — 在文件指针中定位

fstat — 通过已打开的文件指针取得文件信息

ftell — 返回文件指针读/写的位置

ftruncate — 将文件截断到给定的长度

fwrite — 写入文件（可安全用于二进制文件）

glob — 寻找与模式匹配的文件路径

is_dir — 判断给定文件名是否是一个目录

is_executable — 判断给定文件名是否可执行

is_file — 判断给定文件名是否为一个正常的文件

is_link — 判断给定文件名是否为一个符号连接

is_readable — 判断给定文件名是否可读

is_uploaded_file — 判断文件是否是通过 HTTP POST 上传的

is_writable — 判断给定的文件名是否可写

is_writeable — is_writable 的别名

lchgrp — 修改符号链接的所有组

lchown — 修改符号链接的所有者

link — 建立一个硬连接

linkinfo — 获取一个连接的信息

lstat — 给出一个文件或符号连接的信息

mkdir — 新建目录

move_uploaded_file — 将上传的文件移动到新位置

parse_ini_file — 解析一个配置文件

parse_ini_string — 解析配置字符串

pathinfo — 返回文件路径的信息

pclose — 关闭进程文件指针

popen — 打开进程文件指针

readfile — 输出文件

readlink — 返回符号连接指向的目标

realpath_cache_get — 获取真实目录缓存的详情

realpath_cache_size — 获取真实路径缓冲区的大小

realpath — 返回规范化的绝对路径名

rename — 重命名一个文件或目录

rewind — 倒回文件指针的位置

rmdir — 删除目录

set_file_buffer — stream_set_write_buffer 的别名

stat — 给出文件的信息

symlink — 建立符号连接

tempnam — 建立一个具有唯一文件名的文件

tmpfile — 建立一个临时文件

touch — 设定文件的访问和修改时间

umask — 改变当前的 umask

unlink — 删除文件



## 目录处理

chdir — 改变目录

chroot — 改变根目录

closedir — 关闭目录句柄

dir — 返回一个 Directory 类实例

getcwd — 取得当前工作目录

opendir — 打开目录句柄

readdir — 从目录句柄中读取条目

rewinddir — 倒回目录句柄

scandir — 列出指定路径中的文件和目录



## 数学

abs — 绝对值

acos — 反余弦

acosh — 反双曲余弦

asin — 反正弦

asinh — 反双曲正弦

atan2 — 两个参数的反正切

atan — 反正切

atanh — 反双曲正切

base_convert — 在任意进制之间转换数字

bindec — 二进制转换为十进制

ceil — 进一法取整

cos — 余弦

cosh — 双曲余弦

decbin — 十进制转换为二进制

dechex — 十进制转换为十六进制

decoct — 十进制转换为八进制

deg2rad — 将角度转换为弧度

exp — 计算 e 的指数

expm1 — 返回 exp(number) - 1，甚至当 number 的值接近零也能计算出准确结果

floor — 舍去法取整

fmod — 返回除法的浮点数余数

getrandmax — 显示随机数最大的可能值

hexdec — 十六进制转换为十进制

hypot — 计算一直角三角形的斜边长度

intdiv — 对除法结果取整

is_finite — 判断是否为有限值

is_infinite — 判断是否为无限值

is_nan — 判断是否为合法数值

lcg_value — 组合线性同余发生器

log10 — 以 10 为底的对数

log1p — 返回 log(1 + number)，甚至当 number 的值接近零也能计算出准确结果

log — 自然对数

max — 找出最大值

min — 找出最小值

mt_getrandmax — 显示随机数的最大可能值

mt_rand — 生成更好的随机数

mt_srand — 播下一个更好的随机数发生器种子

octdec — 八进制转换为十进制

pi — 得到圆周率值

pow — 指数表达式

rad2deg — 将弧度数转换为相应的角度数

rand — 产生一个随机整数

round — 对浮点数进行四舍五入

sin — 正弦

sinh — 双曲正弦

sqrt — 平方根

srand — 播下随机数发生器种子

tan — 正切

tanh — 双曲正切



## 类和对象

__autoload — 尝试加载未定义的类

call_user_method_array — 以参数列表的数组，调用用户方法

call_user_method — 对特定对象调用用户方法

class_alias — 为一个类创建别名

class_exists — 检查类是否已定义

get_called_class — 后期静态绑定（"Late Static Binding"）类的名称

get_class_methods — 返回由类的方法名组成的数组

get_class_vars — 返回由类的默认属性组成的数组

get_class — 返回对象的类名

get_declared_classes — 返回由已定义类的名字所组成的数组

get_declared_interfaces — 返回一个数组包含所有已声明的接口

get_declared_traits — 返回所有已定义的 traits 的数组

get_object_vars — 返回由对象属性组成的关联数组

get_parent_class — 返回对象或类的父类名

interface_exists — 检查接口是否已被定义

is_a — 如果对象属于该类或该类是此对象的父类则返回 TRUE

is_subclass_of — 如果此对象是该类的子类，则返回 TRUE

method_exists — 检查类的方法是否存在

property_exists — 检查对象或类是否具有该属性

trait_exists — 检查指定的 trait 是否存在



## 字符类型检测

ctype_alnum — 做字母和数字字符检测

ctype_alpha — 做纯字符检测

ctype_cntrl — 做控制字符检测

ctype_digit — 做纯数字检测

ctype_graph — 做可打印字符串检测，空格除外

ctype_lower — 做小写字符检测

ctype_print — 做可打印字符检测

ctype_punct — 检测可打印的字符是不是不包含空白、数字和字母

ctype_space — 做空白字符检测

ctype_upper — 做大写字母检测

ctype_xdigit — 检测字符串是否只包含十六进制字符



## 日期和时间

checkdate — 验证一个格里高里日期

date_add — 别名 DateTime::add

date_create_from_format — 别名 DateTime::createFromFormat

date_create_immutable_from_format — 别名 DateTimeImmutable::createFromFormat

date_create_immutable — 别名 DateTimeImmutable::__construct

date_create — 别名 DateTime::__construct

date_date_set — 别名 DateTime::setDate

date_default_timezone_get — 取得一个脚本中所有日期时间函数所使用的默认时区

date_default_timezone_set — 设定用于一个脚本中所有日期时间函数的默认时区

date_diff — 别名 DateTime::diff

date_format — 别名 DateTime::format

date_get_last_errors — 别名 DateTime::getLastErrors

date_interval_create_from_date_string — 别名 DateInterval::createFromDateString

date_interval_format — 别名 DateInterval::format

date_isodate_set — 别名 DateTime::setISODate

date_modify — 别名 DateTime::modify

date_offset_get — 别名 DateTime::getOffset

date_parse_from_format — Get info about given date formatted according to the specified format

date_parse — Returns associative array with detailed info about given date

date_sub — 别名 DateTime::sub

date_sun_info — Returns an array with information about sunset/sunrise and twilight begin/end

date_sunrise — 返回给定的日期与地点的日出时间

date_sunset — 返回给定的日期与地点的日落时间

date_time_set — 别名 DateTime::setTime

date_timestamp_get — 别名 DateTime::getTimestamp

date_timestamp_set — 别名 DateTime::setTimestamp

date_timezone_get — 别名 DateTime::getTimezone

date_timezone_set — 别名 DateTime::setTimezone

date — 格式化一个本地时间／日期

getdate — 取得日期／时间信息

gettimeofday — 取得当前时间

gmdate — 格式化一个 GMT/UTC 日期／时间

gmmktime — 取得 GMT 日期的 UNIX 时间戳

gmstrftime — 根据区域设置格式化 GMT/UTC 时间／日期

idate — 将本地时间日期格式化为整数

localtime — 取得本地时间

microtime — 返回当前 Unix 时间戳和微秒数

mktime — 取得一个日期的 Unix 时间戳

strftime — 根据区域设置格式化本地时间／日期

strptime — 解析由 strftime 生成的日期／时间

strtotime — 将任何字符串的日期时间描述解析为 Unix 时间戳

time — 返回当前的 Unix 时间戳

timezone_abbreviations_list — 别名 DateTimeZone::listAbbreviations

timezone_identifiers_list — 别名 DateTimeZone::listIdentifiers

timezone_location_get — 别名 DateTimeZone::getLocation

timezone_name_from_abbr — Returns the timezone name from abbreviation

timezone_name_get — 别名 DateTimeZone::getName

timezone_offset_get — 别名 DateTimeZone::getOffset

timezone_open — 别名 DateTimeZone::__construct

timezone_transitions_get — 别名 DateTimeZone::getTransitions

timezone_version_get — Gets the version of the timezonedb



## CURL

curl_close — 关闭 cURL 会话

curl_copy_handle — 复制一个cURL句柄和它的所有选项

curl_errno — 返回最后一次的错误代码

curl_error — 返回当前会话最后一次错误的字符串

curl_escape — 使用 URL 编码给定的字符串

curl_exec — 执行 cURL 会话

curl_file_create — 创建一个 CURLFile 对象

curl_getinfo — 获取一个cURL连接资源句柄的信息

curl_init — 初始化 cURL 会话

curl_multi_add_handle — 向curl批处理会话中添加单独的curl句柄

curl_multi_close — 关闭一组cURL句柄

curl_multi_errno — 返回上一次 curl 批处理的错误码

curl_multi_exec — 运行当前 cURL 句柄的子连接

curl_multi_getcontent — 如果设置了CURLOPT_RETURNTRANSFER，则返回获取的输出的文本流

curl_multi_info_read — 获取当前解析的cURL的相关传输信息

curl_multi_init — 返回一个新cURL批处理句柄

curl_multi_remove_handle — 移除cURL批处理句柄资源中的某个句柄资源

curl_multi_select — 等待所有cURL批处理中的活动连接

curl_multi_setopt — 为 cURL 并行处理设置一个选项

curl_multi_strerror — 返回字符串描述的错误代码

curl_pause — 暂停和取消暂停一个连接。

curl_reset — 重置一个 libcurl 会话句柄的所有的选项

curl_setopt_array — 为 cURL 传输会话批量设置选项

curl_setopt — 设置 cURL 传输选项

curl_share_close — 关闭 cURL 共享句柄

curl_share_errno — 返回共享 curl 句柄的最后一次错误号

curl_share_init — 初始化一个 cURL 共享句柄。

curl_share_setopt — 为 cURL 共享句柄设置选项。

curl_share_strerror — 返回错误号对应的错误消息

curl_strerror — 返回错误代码的字符串描述

curl_unescape — 解码给定的 URL 编码的字符串

curl_version — 获取 cURL 版本信息



## 过滤器

filter_has_var — 检测是否存在指定类型的变量

filter_id — 返回与某个特定名称的过滤器相关联的id

filter_input_array — 获取一系列外部变量，并且可以通过过滤器处理它们

filter_input — 通过名称获取特定的外部变量，并且可以通过过滤器处理它

filter_list — 返回所支持的过滤器列表

filter_var_array — 获取多个变量并且过滤它们

filter_var — 使用特定的过滤器过滤一个变量



## 函数处理

call_user_func_array — 调用回调函数，并把一个数组参数作为回调函数的参数

call_user_func — 把第一个参数作为回调函数调用

create_function — Create an anonymous (lambda-style) function

forward_static_call_array — Call a static method and pass the arguments as array

forward_static_call — Call a static method

func_get_arg — 返回参数列表的某一项

func_get_args — 返回一个包含函数参数列表的数组

func_num_args — Returns the number of arguments passed to the function

function_exists — 如果给定的函数已经被定义就返回 TRUE

get_defined_functions — 返回所有已定义函数的数组

register_shutdown_function — 注册一个会在php中止时执行的函数

register_tick_function — Register a function for execution on each tick

unregister_tick_function — De-register a function for execution on each tick



## 正则处理

preg_filter — 执行一个正则表达式搜索和替换

preg_grep — 返回匹配模式的数组条目

preg_last_error — 返回最后一个PCRE正则执行产生的错误代码

preg_match_all — 执行一个全局正则表达式匹配

preg_match — 执行匹配正则表达式

preg_quote — 转义正则表达式字符

preg_replace_callback_array — Perform a regular expression search and replace using callbacks

preg_replace_callback — 执行一个正则表达式搜索并且使用一个回调进行替换

preg_replace — 执行一个正则表达式的搜索和替换

preg_split — 通过一个正则表达式分隔字符串



## 网络

checkdnsrr — 给指定的主机（域名）或者IP地址做DNS通信检查

closelog — 关闭系统日志链接

define_syslog_variables — Initializes all syslog related variables

dns_check_record — 别名 checkdnsrr

dns_get_mx — 别名 getmxrr

dns_get_record — 获取指定主机的DNS记录

fsockopen — 打开一个网络连接或者一个Unix套接字连接

gethostbyaddr — 获取指定的IP地址对应的主机名

gethostbyname — 返回主机名对应的 IPv4地址。

gethostbynamel — 获取互联网主机名对应的 IPv4 地址列表

gethostname — 获取主机名

getmxrr — 获取互联网主机名对应的 MX 记录

getprotobyname — Get protocol number associated with protocol name

getprotobynumber — Get protocol name associated with protocol number

getservbyname — 获取互联网服务协议对应的端口

getservbyport — Get Internet service which corresponds to port and protocol

header_register_callback — 调用一个 header 函数

header_remove — 删除之前设置的 HTTP 头

header — 发送原生 HTTP 头

headers_list — 返回已发送的 HTTP 响应头（或准备发送的）

headers_sent — 检测 HTTP 头是否已经发送

http_response_code — 获取/设置响应的 HTTP 状态码

inet_ntop — Converts a packed internet address to a human readable representation

inet_pton — Converts a human readable IP address to its packed in_addr representation

ip2long — 将 IPV4 的字符串互联网协议转换成长整型数字

long2ip — 将长整型转化为字符串形式带点的互联网标准格式地址（IPV4）

openlog — Open connection to system logger

pfsockopen — 打开一个持久的网络连接或者Unix套接字连接。

setcookie — 发送 Cookie

setrawcookie — 发送未经 URL 编码的 cookie

socket_get_status — 别名 stream_get_meta_data

socket_set_blocking — 别名 stream_set_blocking

socket_set_timeout — 别名 stream_set_timeout

syslog — Generate a system log message



## 程序执行

escapeshellarg — 把字符串转码为可以在 shell 命令里使用的参数

escapeshellcmd — shell 元字符转义

exec — 执行一个外部程序

passthru — 执行外部程序并且显示原始输出

proc_close — 关闭由 proc_open 打开的进程并且返回进程退出码

proc_get_status — 获取由 proc_open 函数打开的进程的信息

proc_nice — 修改当前进程的优先级

proc_open — 执行一个命令，并且打开用来输入/输出的文件指针。

proc_terminate — 杀除由 proc_open 打开的进程

shell_exec — 通过 shell 环境执行命令，并且将完整的输出以字符串的方式返回。

system — 执行外部程序，并且显示输出



## PHP选项和信息

assert_options — 设置/获取断言的各种标志

assert — 检查一个断言是否为 FALSE

cli_get_process_title — Returns the current process title

cli_set_process_title — Sets the process title

extension_loaded — 检查一个扩展是否已经加载

gc_collect_cycles — 强制收集所有现存的垃圾循环周期

gc_disable — 停用循环引用收集器

gc_enable — 激活循环引用收集器

gc_enabled — 返回循环引用计数器的状态

gc_mem_caches — Reclaims memory used by the Zend Engine memory manager

gc_status — Gets information about the garbage collector

get_cfg_var — 获取 PHP 配置选项的值

get_current_user — 获取当前 PHP 脚本所有者名称

get_defined_constants — 返回所有常量的关联数组，键是常量名，值是常量值

get_extension_funcs — 返回模块函数名称的数组

get_include_path — 获取当前的 include_path 配置选项

get_included_files — 返回被 include 和 require 文件名的 array

get_loaded_extensions — 返回所有编译并加载模块名的 array

get_magic_quotes_gpc — 获取当前 magic_quotes_gpc 的配置选项设置

get_magic_quotes_runtime — 获取当前 magic_quotes_runtime 配置选项的激活状态

get_required_files — 别名 get_included_files

get_resources — Returns active resources

getenv — 获取一个环境变量的值

getlastmod — 获取页面最后修改的时间

getmygid — 获取当前 PHP 脚本拥有者的 GID

getmyinode — 获取当前脚本的索引节点（inode）

getmypid — 获取 PHP 进程的 ID

getmyuid — 获取 PHP 脚本所有者的 UID

getopt — 从命令行参数列表中获取选项

getrusage — 获取当前资源使用状况

ini_alter — 别名 ini_set

ini_get_all — 获取所有配置选项

ini_get — 获取一个配置选项的值

ini_restore — 恢复配置选项的值

ini_set — 为一个配置选项设置值

magic_quotes_runtime — 别名 set_magic_quotes_runtime

main — 虚拟的main

memory_get_peak_usage — 返回分配给 PHP 内存的峰值

memory_get_usage — 返回分配给 PHP 的内存量

php_ini_loaded_file — 取得已加载的 php.ini 文件的路径

php_ini_scanned_files — 返回从额外 ini 目录里解析的 .ini 文件列表

php_logo_guid — 获取 logo 的 guid

php_sapi_name — 返回 web 服务器和 PHP 之间的接口类型

php_uname — 返回运行 PHP 的系统的有关信息

phpcredits — 打印 PHP 贡献者名单

phpinfo — 输出关于 PHP 配置的信息

phpversion — 获取当前的PHP版本

putenv — 设置环境变量的值

restore_include_path — 还原 include_path 配置选项的值

set_include_path — 设置 include_path 配置选项

set_magic_quotes_runtime — 设置当前 magic_quotes_runtime 配置选项的激活状态

set_time_limit — 设置脚本最大执行时间

sys_get_temp_dir — 返回用于临时文件的目录

version_compare — 对比两个「PHP 规范化」的版本数字字符串

zend_logo_guid — 获取 Zend guid

zend_thread_id — 返回当前线程的唯一识别符

zend_version — 获取当前 Zend 引擎的版本



## 错误处理

debug_backtrace — 产生一条回溯跟踪(backtrace)

debug_print_backtrace — 打印一条回溯。

error_clear_last — 清除最近一次错误

error_get_last — 获取最后发生的错误

error_log — 发送错误信息到某个地方

error_reporting — 设置应该报告何种 PHP 错误

restore_error_handler — 还原之前的错误处理函数

restore_exception_handler — 恢复之前定义过的异常处理函数。

set_error_handler — 设置用户自定义的错误处理函数

set_exception_handler — 设置用户自定义的异常处理函数

trigger_error — 产生一个用户级别的 error/warning/notice 信息

user_error — trigger_error 的别名



## 输出缓冲控制

flush — 刷新输出缓冲

ob_clean — 清空（擦掉）输出缓冲区

ob_end_clean — 清空（擦除）缓冲区并关闭输出缓冲

ob_end_flush — 冲刷出（送出）输出缓冲区内容并关闭缓冲

ob_flush — 冲刷出（送出）输出缓冲区中的内容

ob_get_clean — 得到当前缓冲区的内容并删除当前输出缓。

ob_get_contents — 返回输出缓冲区的内容

ob_get_flush — 刷出（送出）缓冲区内容，以字符串形式返回内容，并关闭输出缓冲区。

ob_get_length — 返回输出缓冲区内容的长度

ob_get_level — 返回输出缓冲机制的嵌套级别

ob_get_status — 得到所有输出缓冲区的状态

ob_gzhandler — 在ob_start中使用的用来压缩输出缓冲区中内容的回调函数。ob_start callback function to gzip output buffer

ob_implicit_flush — 打开/关闭绝对刷送

ob_list_handlers — 列出所有使用中的输出处理程序。

ob_start — 打开输出控制缓冲

output_add_rewrite_var — 添加URL重写器的值（Add URL rewriter values）

output_reset_rewrite_vars — 重设URL重写器的值（Reset URL rewriter values）



## 密码散列算法

password_get_info — 返回指定散列（hash）的相关信息

password_hash — 创建密码的散列（hash）

password_needs_rehash — 检测散列值是否匹配指定的选项

password_verify — 验证密码是否和散列值匹配



## Session

session_abort — Discard session array changes and finish session

session_cache_expire — 返回当前缓存的到期时间

session_cache_limiter — 读取/设置缓存限制器

session_commit — session_write_close 的别名

session_create_id — Create new session id

session_decode — 解码会话数据

session_destroy — 销毁一个会话中的全部数据

session_encode — 将当前会话数据编码为一个字符串

session_gc — Perform session data garbage collection

session_get_cookie_params — 获取会话 cookie 参数

session_id — 获取/设置当前会话 ID

session_is_registered — 检查变量是否在会话中已经注册

session_module_name — 获取/设置会话模块名称

session_name — 读取/设置会话名称

session_regenerate_id — 使用新生成的会话 ID 更新现有会话 ID

session_register_shutdown — 关闭会话

session_register — Register one or more global variables with the current session

session_reset — Re-initialize session array with original values

session_save_path — 读取/设置当前会话的保存路径

session_set_cookie_params — 设置会话 cookie 参数

session_set_save_handler — 设置用户自定义会话存储函数

session_start — 启动新会话或者重用现有会话

session_status — 返回当前会话状态

session_unregister — Unregister a global variable from the current session

session_unset — 释放所有的会话变量

session_write_close — Write session data and end session



## JSON

json_decode — 对 JSON 格式的字符串进行解码

json_encode — 对变量进行 JSON 编码

json_last_error_msg — Returns the error string of the last json_encode() or json_decode() call

json_last_error — 返回最后发生的错误



## Stream

set_socket_blocking — 别名 stream_set_blocking

stream_bucket_append — Append bucket to brigade

stream_bucket_make_writeable — Return a bucket object from the brigade for operating on

stream_bucket_new — Create a new bucket for use on the current stream

stream_bucket_prepend — Prepend bucket to brigade

stream_context_create — 创建资源流上下文

stream_context_get_default — Retrieve the default stream context

stream_context_get_options — 获取资源流/数据包/上下文的参数

stream_context_get_params — Retrieves parameters from a context

stream_context_set_default — Set the default stream context

stream_context_set_option — 对资源流、数据包或者上下文设置参数

stream_context_set_params — Set parameters for a stream/wrapper/context

stream_copy_to_stream — Copies data from one stream to another

stream_filter_append — Attach a filter to a stream

stream_filter_prepend — Attach a filter to a stream

stream_filter_register — Register a user defined stream filter

stream_filter_remove — 从资源流里移除某个过滤器

stream_get_contents — 读取资源流到一个字符串

stream_get_filters — 获取已注册的数据流过滤器列表

stream_get_line — 从资源流里读取一行直到给定的定界符

stream_get_meta_data — 从封装协议文件指针中取得报头／元数据

stream_get_transports — 获取已注册的套接字传输协议列表

stream_get_wrappers — 获取已注册的流类型

stream_is_local — Checks if a stream is a local stream

stream_isatty — Check if a stream is a TTY

stream_notification_callback — A callback function for the notification context parameter

stream_register_wrapper — 别名 stream_wrapper_register

stream_resolve_include_path — Resolve filename against the include path

stream_set_blocking — 为资源流设置阻塞或者阻塞模式

stream_set_chunk_size — 设置资源流区块大小

stream_set_read_buffer — Set read file buffering on the given stream

stream_set_timeout — Set timeout period on a stream

stream_set_write_buffer — Sets write file buffering on the given stream

stream_socket_accept — 接受由 stream_socket_server 创建的套接字连接

stream_socket_client — Open Internet or Unix domain socket connection

stream_socket_enable_crypto — Turns encryption on/off on an already connected socket

stream_socket_get_name — 获取本地或者远程的套接字名称

stream_socket_pair — 创建一对完全一样的网络套接字连接流

stream_socket_recvfrom — Receives data from a socket, connected or not

stream_socket_sendto — Sends a message to a socket, whether it is connected or not

stream_socket_server — Create an Internet or Unix domain server socket

stream_socket_shutdown — Shutdown a full-duplex connection

stream_supports_lock — Tells whether the stream supports locking

stream_wrapper_register — 注册一个用 PHP 类实现的 URL 封装协议

stream_wrapper_restore — Restores a previously unregistered built-in wrapper

stream_wrapper_unregister — Unregister a URL wrapper



## SPL

class_implements — 返回指定的类实现的所有接口。

class_parents — 返回指定类的父类。

class_uses — Return the traits used by the given class

iterator_apply — 为迭代器中每个元素调用一个用户自定义函数

iterator_count — 计算迭代器中元素的个数

iterator_to_array — 将迭代器中的元素拷贝到数组

spl_autoload_call — 尝试调用所有已注册的__autoload()函数来装载请求类

spl_autoload_extensions — 注册并返回spl_autoload函数使用的默认文件扩展名。

spl_autoload_functions — 返回所有已注册的__autoload()函数。

spl_autoload_register — 注册给定的函数作为 __autoload 的实现

spl_autoload_unregister — 注销已注册的__autoload()函数

spl_autoload — __autoload()函数的默认实现

spl_classes — 返回所有可用的SPL类

spl_object_hash — 返回指定对象的hash id

spl_object_id — Return the integer object handle for given object



## BCMath

bcadd — 2个任意精度数字的加法计算

bccomp — 比较两个任意精度的数字

bcdiv — 2个任意精度的数字除法计算

bcmod — 对一个任意精度数字取模

bcmul — 2个任意精度数字乘法计算

bcpow — 任意精度数字的乘方

bcpowmod — Raise an arbitrary precision number to another, reduced by a specified modulus

bcscale — 设置所有bc数学函数的默认小数点保留位数

bcsqrt — 任意精度数字的二次方根

bcsub — 2个任意精度数字的减法



## 杂项

connection_aborted — 检查客户端是否已经断开

connection_status — 返回连接的状态位

constant — 返回一个常量的值

define — 定义一个常量

defined — 检查某个名称的常量是否存在

die — 等同于 exit

eval — 把字符串作为PHP代码执行

exit — 输出一个消息并且退出当前脚本

get_browser — 获取浏览器具有的功能

__halt_compiler — 中断编译器的执行

highlight_file — 语法高亮一个文件

highlight_string — 字符串的语法高亮

hrtime — Get the system's high resolution time

ignore_user_abort — 设置客户端断开连接时是否中断脚本的执行

pack — 将数据打包成二进制字符串

php_check_syntax — 检查PHP的语法（并执行）指定的文件

php_strip_whitespace — 返回删除注释和空格后的PHP源码

show_source — 别名 highlight_file

sleep — 延缓执行

sys_getloadavg — 获取系统的负载（load average）

time_nanosleep — 延缓执行若干秒和纳秒

time_sleep_until — 使脚本睡眠到指定的时间为止。

uniqid — 生成一个唯一ID

unpack — Unpack data from binary string

usleep — 以指定的微秒数延迟执行

## 备注
2020-07-23: 
- 移除 win 相关函数