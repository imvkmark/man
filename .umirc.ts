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
            title: 'Php',
            path: '/php',
        },
        {
            title: 'Nginx',
            path: '/nginx',
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
