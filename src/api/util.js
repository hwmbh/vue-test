import Cookies from 'js-cookie'

/**
 * 检查权限标识
 * @param perm
 * @returns {*|boolean}
 */
let checkPerms = (perm) => {
  return Cookies.get('perms') && JSON.parse(Cookies.get('perms')).findIndex(item => perm === item) >= 0
}

export default {
  checkPerms
}
