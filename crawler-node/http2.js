const axios = require('axios');

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
};


// 基本GET请求
const get = (url,data)=>{
  // data.token = '4436397eadeef610daf4da166d1248b8'
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data }).then(response => {
      console.log(url,data);
      resolve(response.data); // 返回响应数据
    })
    .catch(error => {
      reject(error); // 返回错误信息
    });    
  })

}

// 基本POST请求
const post = (url,data)=>{
  return new Promise((resolve, reject) => {
    axios.post(url,data,config).then(response => {
      resolve(response.data); // 返回响应数据
    })
    .catch(error => {
      reject(error); // 返回错误信息
    });
  })
}


module.exports = {
  get,
  post
};