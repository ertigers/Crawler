// 使用http.js模块发送GET请求
const httpUtil = require('../http2');
const schedule = require('node-schedule');
const moment = require('moment');

const onPunch = ()=>{
  console.log('开始执行打卡-----');
  const url = 'https://cloud.tsinglink.com/api/mis/v1/punch/checked/tsinglink'
  const timeToCheck = moment().hour(13).minute(30);
  const params = {
    t: moment().unix(),
    attendanceid:  418,
    direction :  moment().isBefore(timeToCheck) ? "1" : "0",
    latitude : 31.838788248697917, 
    longitude :  117.13468044704861, 
    index: 0,
    location :  "安徽省合肥市蜀山区创新大道",
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
  console.log('-----工作日早上8:40自动打卡任务已启动------');
  // 工作日早上8:40执行任务
  schedule.scheduleJob('40 8 * * 1-5', onPunch);
  console.log('-----工作日晚上17:47自动打卡任务已启动------');
  // 工作日晚上17:47执行任务
  schedule.scheduleJob('47 17 * * 1-5', onPunch);
};

module.exports = {
  autoStart
};