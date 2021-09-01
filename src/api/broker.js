import request from '@/utils/request'

const broker = {
  getBrokerData(params) {
    return request({
      url: '/api/broker',
      method: 'get',
      params
    })
  }
}

export default broker
