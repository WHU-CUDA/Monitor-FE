import request from '@/utils/request'

const broker = {
  getBrokerData(params) {
    return request({
      url: '/api/workers',
      method: 'get',
      params
    })
  }
}

export default broker
