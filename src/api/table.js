import request from '@/utils/request'

const table = {
  getList(params) {
    return request({
      url: '/api/tasks/tabledata',
      method: 'get',
      params
    })
  }
}

export default table
