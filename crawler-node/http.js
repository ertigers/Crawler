// http.js
const http = require('http');

/**
 * 发送HTTP GET请求
 * @param {string} url - 请求的URL
 * @param {object} options - 请求选项，如headers等
 * @param {Function} callback - 响应回调函数，参数为错误和响应数据
 */
function get(url, options, callback) {
  const protocol = http;
  const reqOptions = {
    method: 'GET',
    hostname: url.split('//')[1].split('/')[0],
    path: url.split('/').slice(3).join('/'),
    ...options
  };

  console.log('GET', reqOptions);

  protocol.request(reqOptions, (res) => {
    console.log(res);
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      callback(null, data);
    });
  }).on('error', (e) => {
    callback(e);
  }).end();
}

/**
 * 发送HTTP POST请求
 * @param {string} url - 请求的URL
 * @param {object} data - 发送的数据
 * @param {object} options - 请求选项，如headers等
 * @param {Function} callback - 响应回调函数，参数为错误和响应数据
 */
function post(url, data, options, callback) {
  const protocol = http;
  const reqOptions = {
    method: 'POST',
    hostname: url.split('//')[1].split('/')[0],
    path: url.split('/').slice(3).join('/'),
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  };
  console.log('post', reqOptions);

  const postData = JSON.stringify(data);

  protocol.request(reqOptions, (res) => {
    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    res.on('end', () => {
      callback(null, responseData);
    });
  }).on('error', (e) => {
    callback(e);
  }).end(postData);
}

module.exports = {
  get,
  post
};