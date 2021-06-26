# man - watch(1)

watch - execute a program periodically, showing output fullscreen

### 语法

```
watch [-dhvt] [-n ] [--differences[=cumulative]] [--help] [--interval=] [--no-title] [--version] 
```

### 说明

`watch` runs *command* repeatedly, displaying its output (the first screenfull). This allows you to watch the program output change over time. By default, the program is run every 2 seconds; use `-n` or `--interval` to specify a different interval.

The `-d` or `--differences` flag will highlight the differences between successive updates. The `--cumulative` option makes highlighting "sticky", presenting a running display of all positions that have ever changed. The `-t` or `--no-title` option turns off the header showing the interval, command, and current time at the top of the display, as well as the following blank line.

`watch` will run until interrupted.

### 备注

Note that *command* is given to "sh -c" which means that you may need to use extra quoting to get the desired effect.

Note that POSIX option processing is used (i.e., option processing stops at the first non-option argument). This means that flags after *command* don't get interpreted by `watch` itself.

### 示例

To watch for mail, you might do

`watch -n 60 from`

To watch the contents of a directory change, you could use

`watch -d ls -l`

If you're only interested in files owned by user joe, you might use

`watch -d 'ls -l | fgrep joe'`

To see the effects of quoting, try these out

`watch echo $$`
`watch echo '$$'`
`watch echo "'"'$$'"'"`

You can watch for your administrator to install the latest kernel with

`watch uname -r`

(Just kidding.)