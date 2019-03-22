import { axios } from './base'

/**
 * 公司管理
 * @returns {AxiosPromise<any>}
 */
export let administrator = () => {
  return axios.get('http://localhost:3000/users')
}

