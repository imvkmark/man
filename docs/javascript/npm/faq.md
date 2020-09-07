# npm 常见问题

## 1. PUT https://registry.npm.taobao.org/@... - [no_perms] Private mode enable, only admin can publish this module

使用 `npm publish` 或者使用 `yarn publish` 出现 couldn't publish package:"https://registry.npm.taobao.org/包...:unauthorized

出现原因：使用的是淘宝源 cnpm,登陆到的是 cnpm

解决方法：切换到npmjs的网址，代码如下

```
npm config set registry http://registry.npmjs.org/

# 切换回淘宝源
npm config set registry https://registry.npm.taobao.org/
```