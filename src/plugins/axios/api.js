import service from './axios.js';
import qs from 'qs'

// // 发起get请求，后面可以拼接字符串等当查询条件
// export function getUserApp(id) {
//     return service.get('/getUserApp/' + id);
// }

// // 发起post请求，可以后跟params
// export function postSth(obj) {
//     return service.post('/test', {
//       params: {
//         obj,
//       }
//     })
// }

// 注册用户
export function register(data) {
    return service.post('/user', data)
}