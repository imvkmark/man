# [WIP]国际化与字符编码支持 - Multibyte String //todo

用来处理多字节字串的函数


## 安装

php中需要启用 mbstring 扩展

## 配置


`mbstring.language` 默认 : "neutral"

PHP_INI_ALL     默认的本地语言设置

`mbstring.detect_order` 默认 : Null

PHP_INI_ALL     默认的字串检测顺序

`mbstring.http_input` 默认 : "pass"

PHP_INI_ALL     输入字串编码

`mbstring.http_output` 默认 : "pass"

PHP_INI_ALL     输出字串编码

`mbstring.internal_encoding` 默认 : Null

PHP_INI_ALL     默认的内部编码

`mbstring.script_encoding` 默认 : Null

PHP_INI_ALL     脚本编码

`bstring.substitute_character` 默认 : Null

PHP_INI_ALL     替代编码

`mbstring.func_overload` 默认 : "0"

PHP_INI_SYSTEM  过载

`mbstring.encoding_translation` 默认 : "0"

PHP_INI_PERDIR  启用明显的字串编码检测

`mbstring.strict_detection` 默认 : "0"

PHP_INI_ALL     启用严格的编码检测



函数








