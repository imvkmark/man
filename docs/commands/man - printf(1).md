# man - printf(1)

printf - 格式化输出

## 语法

```
printf FORMAT [ARGUMENT]...
printf OPTION
```

## 描述
根据格式来打印参数或者执行选项

`--help` 
显示帮助并推出

`--version`
输出 version 信息并退出

FORMAT 控制输出和 `C printf` 一致, 转义序列是: 

```
    \"     double quote
    
    \\     backslash
    
    \a     alert (BEL)
    
    \b     backspace
    
    \c     produce no further output
    
    \e     escape
    
    \f     form feed
    
    \n     new line
    
    \r     carriage return
    
    \t     horizontal tab
    
    \v     vertical tab
    
    \NNN   byte with octal value NNN (1 to 3 digits)
    
    \xHH   byte with hexadecimal value HH (1 to 2 digits)
    
    \uHHHH Unicode (ISO/IEC 10646) character with hex value HHHH (4
          digits)
    
    \UHHHHHHHH
          Unicode character with hex value HHHHHHHH (8 digits)
    
    %%     a single %
    
    %b     ARGUMENT as a string with '\' escapes interpreted, except that 
          octal escapes are of the form \0 or \0NNN
    
    %q     ARGUMENT is printed in a format that can be reused as shell
          input, escaping non-printable characters with the proposed
          POSIX $'' syntax.
    
    and all C format specifications ending with one of diouxXfeEgGcs,
    with ARGUMENTs converted to proper type first.  Variable widths are
    handled.
    
    NOTE: your shell may have its own version of printf, which usually
    supersedes the version described here.  Please refer to your shell's
    documentation for details about the options it supports.
```
