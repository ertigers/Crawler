// 使用http.js模块发送GET请求
const httpUtil = require('../http2');
const schedule = require('node-schedule');
const moment = require('moment');

const flashBug = ()=>{
  console.log('开始执行打卡-----');
  const url = 'https://cloud.tsinglink.com/api/mis/v1/punch/checked/tsinglink'
  const timeToCheck = moment().hour(13).minute(30);
  const params = {
    punchedtime : moment().unix(),
    type :  2
  }
  httpUtil.post(url, params).then(data => {
    console.log('打卡数据:', data);
  }).catch(err => {
    console.error('打卡失败:', err);
  });
}

const autoStart = ()=>{
  console.log('-----抢购茅台任务已启动------');
  // 每天早上8:40执行抢购茅台的任务
  schedule.scheduleJob('00 12 * * *', flashBug);
};

module.exports = {
  autoStart
};