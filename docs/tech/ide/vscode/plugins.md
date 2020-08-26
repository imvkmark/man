# 常用的 vscode 插件

## 图片粘贴 [Paste Image]

安装插件 [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)

安装之后可以使用 `alt + cmd + v` 来将图片直接粘贴到编辑器中,
直接粘贴的图片默认位置和命名并不符合我们的要求, 所以需要重新进行配置

配置日期的参考文档: [Moment 格式](https://momentjs.com/docs/#/displaying/format/)

```json
{
    "settings": {
        "pasteImage.basePath": "${projectRoot}",
        "pasteImage.defaultName": "Y/MMDD/HHmmss",
        "pasteImage.prefix": ".. image:: /",
        "pasteImage.path": "${projectRoot}/_static/images/",
        "pasteImage.encodePath": "none"
    }
}
```

这样我们粘贴图片的之后就可以直接将文件粘贴到
`/_static/images/2020/0131/191053.png` 类似目录下
