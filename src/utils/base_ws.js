let base_ws
// 开发环境
if (process.env.NODE_ENV === 'development') {
  base_ws = 'ws://localhost:5555/update-dashboard'
} else if (process.env.NODE_ENV === 'production') {
  base_ws = 'ws://oj.api.wangx.wang/ws/'
}

export default base_ws
