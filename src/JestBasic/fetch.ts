import axios from 'axios';

export default {
 // mock
  async fetchPostsList(callback) {
    return axios.get('http://localhost:3005/testData').then(res => {
      callback(res.data);
    })
  },

//   异步测试
// 1.普通返回
   fetchData(callback) {
     axios.get('http://localhost:3005/testData').then(res => {
        callback(res.data);
    })
 },
   //   2.直接返回promise
    fetchData2() {
        return axios.get('http://localhost:3005/testData')
    },

  //   2.错误接口
    fetchData3() {
        return axios.get('http://localhost:3005/testDatakkk')
    },
}