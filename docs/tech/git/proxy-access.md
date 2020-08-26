# Git 设置代理来访问

## 全局代理

```
# 设置代理
$ git config --global http.proxy http://127.0.0.1:1087
$ git config --global https.proxy https://127.0.0.1:1087

# 取消代理
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy
```

## 设置项目代理

```
# 设置代理
$ git config --local http.proxy 127.0.0.1:1086
$ git config --local https.proxy 127.0.0.1:1086

# 取消代理
$ git config --local --unset http.proxy
$ git config --local --unset https.proxy
```

## 给指定的URL设置代理

```ini
[http "https://github.com/"]
    proxy = http://127.0.0.1:1086
[https "https://github.com/"]
    proxy = http://127.0.0.1:1086
[http "https://my.comapnyserver.com/"]
    proxy = ""
```