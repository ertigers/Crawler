// 使用http.js模块发送GET请求
const httpUtil = require('../http2');

const fetchWeather = ()=>{
  console.log('执行了-fetchWeather------------');
  const url = 'https://tianqi.2345.com/pc/getLifeIndex'
  const params = {
    areaId: 71872,
    areaType: 2,
    lifestyleType: 1,
    lifestyleDate: '07月11日'
  }
  httpUtil.get(url, params).then(data => {
    console.log('天气接口请求成功，响应数据:', data);
  }).catch(err => {
    console.error('天气接口请求失败:', err);
  });
}
module.exports = {
  fetchWeather
};