import request from '@/utils/request'

export function getRuleList(params) {
  return request({
    url: '/aps/rulelist',
    method: 'get',
    params
  })
}


export function saveFlow(params) {
  return request({
    url: '/aps/ruleadd',
    method: 'post',
    params
  })
}

export function remove(flowId) {
  return request({
    url: '/aps/ruledelete',
    method: 'delete',
    params: {
      flowId
    }
  })
}