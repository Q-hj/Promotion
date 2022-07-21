/*
 * @Date: 2022-07-19 22:33:29
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-07-19 22:33:35
 * @Description: 引入同级 js
 */
const files = require.context("./", false, /\.js$/);

files.keys().forEach((path) => {
	if (path === "./index.js") return;
	// console.log(path);
	files(path);
});
