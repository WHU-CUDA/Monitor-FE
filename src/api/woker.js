import request from '@/utils/request'

const worker = {
  getWorkerByName(name) {
    return request.get('/api/worker/' + name)
  }
}

export default worker
