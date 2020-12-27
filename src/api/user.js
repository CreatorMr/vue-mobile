/**
 * 用户相关请求模块
 */

// import request from '@/utils/request.js'

export const login = data => {
  // return request({
  //   method: 'POST',
  //   url: '/api/user/login',
  //   data
  // })
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return setTimeout(_ => {
        return resolve({
          code: 0,
          data: {
            msg: '登录成功',
            userId: 123
          }
        })
      }, 2000)
    } else {
      reject(new Error('失败'))
    }
  })
}
