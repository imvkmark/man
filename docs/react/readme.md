# React 常见问题

## 加载自定义 Url

将加载的 URL 放到 div 中, 从而实现远程地址的加载来加载变量

```js
import postscribe from 'postscribe';

let script = serverUrl + '/' + apiUrl.pamWechatConfig + '?url=' + window.location.href+ '&type=base';
postscribe('#J_wxAuth', '<script src="' + script + '"></script>', {
    error : (e) => {
        console.log(e);
    },
    done : (e) => {
        wx.config(window.wxAuthConfig);
    }
})
```