import { defineConfig } from 'dumi';
// more config: https://d.umijs.org/config
export default defineConfig({
    title: 'Wulicode - 知识库',
    mode: 'site',
    devServer: {
        port: 8001,
    },
    logo: '/images/icon.png',
    navs: [
        {
            title: 'Os/系统',
            path: '/os',
            children: [
                { title: 'Linux/Unix', path: '/os/linux' },
                { title: 'Shell', path: '/shell' },
                { title: 'CentOS', path: '/os/centos' },
                { title: 'Mac', path: '/os/mac' },
            ],
        },
        {
            title: 'Tech',
            path: '/tech',
            children: [
                { title: 'Git', path: '/tech/git' },
                { title: 'Http', path: '/tech/http' },
                { title: 'Ide', path: '/tech/ide/phpstorm' },
                { title: 'Regex', path: '/tech/regex' },
                { title: 'Markup', path: '/tech/markup' },
            ],
        },
        {
            title: 'Man',
            path: '/man',
            children: [
                { title: '常用命令', path: '/man/commands' },
                { title: '系统', path: '/man/system' },
                { title: '库', path: '/man/library' },
                { title: '特殊', path: '/man/special' },
                { title: '格式约定', path: '/man/formats-convention' },
                { title: '游戏', path: '/man/games' },
                { title: '约定相关', path: '/man/conventions-miscellany' },
                { title: '管理权限', path: '/man/administration-previleged' },
                { title: '其他', path: '/man/other' },
                { title: '软件', path: '/man/software' },
                { title: '系统', path: '/man/os' },
            ],
        },
        {
            title: 'Php',
            path: '/php',
            children: [
                {
                    title: '影响PHP行为的扩展',
                    path: '/php/functions/php-behaviour',
                },
                { title: '变量相关', path: '/php/functions/varible-type' },
                { title: '数学函数', path: '/php/functions/math' },
                { title: '压缩', path: '/php/functions/archive' },
                { title: '信用卡', path: '/php/functions/c-card' },
                { title: '日历', path: '/php/functions/calendar' },
                { title: '加密', path: '/php/functions/crypt' },
                { title: '数据库', path: '/php/functions/db' },
                { title: '数据库抽象层', path: '/php/functions/db-abstract' },
                { title: '文件', path: '/php/functions/file' },
                { title: '国际化', path: '/php/functions/i18n' },
                { title: '图片处理', path: '/php/functions/image' },
                { title: '其他', path: '/php/functions/other' },
                { title: '其他基础', path: '/php/functions/other-basic' },
                { title: '进程控制', path: '/php/functions/process' },
                { title: '服务器', path: '/php/functions/server' },
                { title: '文本', path: '/php/functions/text' },
                { title: 'Xml', path: '/php/functions/xml' },
            ],
        },
        {
            title: 'Nginx',
            path: '/nginx',
            children: [
                { title: 'Guide', path: '/nginx/guide' },
                { title: '示例', path: '/nginx/example' },
                { title: 'Variable', path: '/nginx/variable' },
            ],
        },
        {
            title: 'Poppy Framework',
            path: '/poppy',
            children: [
                { title: 'Framework', path: '/poppy/framework' },
                { title: 'Module', path: '/poppy/module' },
                { title: 'System', path: '/poppy/system' },
                { title: 'Project', path: '/poppy/project' },
                { title: 'Code Review', path: '/poppy/code-review' },
            ],
        },
    ],
});
