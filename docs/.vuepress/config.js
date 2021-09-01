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
				apiKey: "eee6e259e4f1bf8fda4e0111ec2c7bd4",
				indexName: "man",
				appId: "SXPLIEYR2X",
				locales: {
					"/": {
						placeholder: "搜索",
					},
				},
			},
		],
	],
};
