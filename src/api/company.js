import {fetch, fetchapi, baseUrl} from 'config/index.js'
/**
 * 获取公司列表
 * @param params
 * @returns {*}
 */
export function getCompanyList(params) {
  return fetch(`${baseUrl}/company-management/companies?paging=${params.paging}`, params)
}
/**
 *添加公司
 * @param params
 * @returns {*}
 */
export function addCompanyList(params) {
  return fetch(`${baseUrl}/company-management/companies`, params, 'POST').then(res => {
    console.log('+++++++++++++++++++++',res)
  })
}
