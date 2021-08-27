import request from '@/utils/request'

const dashboard = {
  getTableData(params) {
    return request({
      url: '/api/dashboard',
      method: 'get',
      params
    })
  }
}

export default dashboard
