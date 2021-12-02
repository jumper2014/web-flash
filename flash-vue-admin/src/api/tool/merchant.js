import request from '@/utils/request'

export function createMerchantFile(params) {
  return request({
    url: '/merchant/createMerchantFile',
    method: 'get',
    params
  })
}

export function createATMFile(params) {
  return request({
    url: '/merchant/createATMFile',
    method: 'get',
    params
  })
}

export function createPOSFile(params) {
  return request({
    url: '/merchant/createPOSFile',
    method: 'get',
    params
  })
}


export function clearBatchTable() {
  return request({
    url: '/merchant/clearBatchTable',
    method: 'get'
  })
}

export function clearMerchantTable() {
  return request({
    url: '/merchant/clearMerchantTable',
    method: 'get'
  })
}
