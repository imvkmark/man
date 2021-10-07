const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
module.exports = {
	lang: "zh-CN",
	title: "Man @ Wulicode",
	base: "/man/",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
		repo: "https://github.com/imvkmark/man",
		displayAllHeaders: true,
		smoothScroll: true,
	},
	markdown: {
		code: {
			lineNumbers: false,
		},
	},
	plugins: [
		[
			"@vuepress/docsearch",
			{
				apiKey: "45de64359970775158253bef92ef8187",
				indexName: "man",
				appId: "RIQA6JWBXJ",
				locales: {
					"/": {
						placeholder: "搜索",
					},
				},
			},
		],
	],
};
