const sidebar = require("./sidebar.js");
const navbar = require("./navbar.js");
module.exports = {
	lang: "zh-CN",
	title: "Man 查询手册",
	themeConfig: {
		logo: "/images/logo.png",
		sidebar,
		navbar,
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
				apiKey: "9addc1d8ed38b88663d469a86e4c4f56",
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
