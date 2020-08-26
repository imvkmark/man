# composer 中国镜像

修改 composer 的全局配置文件

## Composer 全局安装配置

安畅网络镜像
```
composer config -g repos.packagist composer https://php.cnpkg.org
```
阿里巴巴开源镜像提供的 packagist 镜像服务
```
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer
```
交通大学镜像
```
composer config -g repos.packagist composer https://packagist.mirrors.sjtug.sjtu.edu.cn
```
华为云
```
composer config -g repo.packagist composer https://mirrors.huaweicloud.com/repository/php/
```
腾讯云
```
composer config -g repos.packagist composer https://mirrors.cloud.tencent.com/composer/
```

phpcomposer 镜像
```
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```
~~Laravel China 镜像 : 已停用~~


关闭全局配置
```
composer config -g --unset repos.packagist
```

更换镜像
```
composer config -g repo.packagist composer 镜像地址
composer clearcache
composer update || install
```