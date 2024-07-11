// const express = require('express');
// const path = require("path");
// const app = express();
// 静态目录
// app.use(express.static(path.join(__dirname, 'dist')));
// app.listen(8888, () => console.log('App listening on port 8888!'));



console.log('*****app.js程序正在启动****');

const mis = require('./demos/mis')
// const weather = require('./demos/weather')

mis.autoStart()
