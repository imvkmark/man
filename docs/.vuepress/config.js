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
	plugins: [
		[
			"vuepress-plugin-auto-sidebar",
			{
				// options
			},
		],
	],
};
