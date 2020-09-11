import { defineConfig } from 'dumi';
// more config: https://d.umijs.org/config
export default defineConfig({
    title: 'Wulicode - Man',
    mode: 'site',
    devServer: {
        port: 8003,
    },
    nodeModulesTransform: {
        type: 'none',
        exclude: [],
    },
    devtool: false,
    logo: '/images/icon.png',
    chunks: ['umi'],
    navs: [
        { title: '常用命令', path: '/commands' },
        { title: '系统', path: '/system' },
        { title: '库', path: '/library' },
        { title: '特殊', path: '/special' },
        { title: '格式约定', path: '/formats-convention' },
        { title: '游戏', path: '/games' },
        { title: '约定相关', path: '/conventions-miscellany' },
        { title: '管理权限', path: '/administration-previleged' },
        { title: '其他', path: '/other' },
        { title: '软件', path: '/software' },
        { title: '系统', path: '/os' },
    ],
});
