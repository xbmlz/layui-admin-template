'use strict';

window.rootPath = (function (src) {
	src = document.currentScript
		? document.currentScript.src
		: document.scripts[document.scripts.length - 1].src;
	return src.substring(0, src.lastIndexOf("/") + 1);
})();

layui.config({
	base: window.rootPath + 'modules/',
	version: '1.0.0',
}).extend({
	app: 'app',
}).use([], function () { });