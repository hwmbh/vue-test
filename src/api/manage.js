import { axios } from './base'

/**
 * 登录
 * @param params
 * @returns {AxiosPromise<any>}
 */
export let login = (params) => {
  return axios.post('/cgSecurity/auth/login', {}, {
    params: {
      userName: params.username,
      password: params.password
    }
  })
}

/**
 * 钉钉code登录请求
 * @param code
 * @param state
 * @returns {AxiosPromise<any>}
 */
export let dingLogin = (code, state) => {
  return axios.post('/cgSecurity/auth/dingLogin', {}, {
    params: {
      code: code,
      state: state
    }
  })
}

/**
 * 退出
 * @returns {AxiosPromise<any>}
 */
export let logout = () => {
  return axios.post('/cgSecurity/auth/logout')
}

/**
 * 修改密码
 * @param params
 * @returns {AxiosPromise<any>}
 */
export let modiPassword = (params) => {
  return axios.post('/cgSecurity/user/password', {}, {
    params: {
      password: params.password,
      newPassword: params.newPassword
    }
  })
}

/**
 * 加载左侧菜单
 * @returns {AxiosPromise<any>}
 */
export let loadNav = () => {
  return axios.post('/cgSecurity/menu/userMenu')
}

/* -------- 用户/管理员 -------- */
/**
 * 获取用户列表
 * @param params
 * @returns {AxiosPromise<any>}
 */
export let getUsers = (params) => {
  return axios.post('/cgSecurity/user/list', {}, {
    params: {
      username: params.username,
      limit: params.limit,
      page: params.page
    }
  })
}

/**
 * 保存用户
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let saveUser = (fields) => {
  return axios.post('/cgSecurity/user/save', fields)
}

/**
 * 获取单个用户信息
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let getUser = (id) => {
  return axios.post('/cgSecurity/user/info', {}, {
    params: {
      userId: id
    }
  })
}

/**
 * 更新用户
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let updateUser = (fields) => {
  return axios.post('/cgSecurity/user/update', fields)
}

/**
 * 删除用户项
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let deleteUser = (id) => {
  return axios.post('/cgSecurity/user/delete', [id])
}

/* -------- 角色 -------- */
/**
 * 获取角色列表
 * @param params
 * @returns {AxiosPromise<any>}
 */
export let getRoles = (params) => {
  return axios.post('/cgSecurity/role/list', {}, {
    params: {
      roleName: params.roleName,
      limit: params.limit,
      page: params.page
    }
  })
}

/**
 * 获取单个角色信息
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let getRole = (id) => {
  return axios.post('/cgSecurity/role/info', {}, {
    params: {
      roleId: id
    }
  })
}

/**
 * 表单中获取角色列表
 * @returns {AxiosPromise<any>}
 */
export let getRolesFrom = () => {
  return axios.post('/cgSecurity/role/select')
}

/**
 * 保存角色
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let saveRole = (fields) => {
  return axios.post('/cgSecurity/role/save', fields)
}

/**
 * 更新角色
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let updateRole = (fields) => {
  return axios.post('/cgSecurity/role/update', fields)
}

/**
 * 删除角色项
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let deleteRole = (id) => {
  return axios.post('/cgSecurity/role/delete', [id])
}

/* -------- 部门 -------- */
/**
 * 获取部门列表
 * @returns {AxiosPromise<any>}
 */
export let getDeptList = () => {
  return axios.post('/cgSecurity/dept/list')
}

/**
 * 保存部门
 * @param fields 表单字段
 * @returns {AxiosPromise<any>}
 */
export let saveDept = (fields) => {
  return axios.post('/cgSecurity/dept/save', fields)
}

/**
 * 更新部门
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let updateDept = (fields) => {
  delete fields.parent
  return axios.post('/cgSecurity/dept/update', fields)
}

/**
 * 删除部门项
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let deleteDept = (id) => {
  return axios.post('/cgSecurity/dept/delete', {}, {
    params: {
      deptId: id
    }
  })
}

/* -------- 菜单 -------- */
/**
 * 获取菜单列表
 * @returns {AxiosPromise<any>}
 */
export let getMenuList = () => {
  return axios.post('/cgSecurity/menu/list')
}

/**
 * 保存菜单
 * @param fields 表单字段
 * @returns {AxiosPromise<any>}
 */
export let saveMenu = (fields) => {
  return axios.post('/cgSecurity/menu/save', fields)
}

/**
 * 更新菜单
 * @param fields
 * @returns {AxiosPromise<any>}
 */
export let updateMenu = (fields) => {
  delete fields.parent
  delete fields.children
  return axios.post('/cgSecurity/menu/update', fields)
}

/**
 * 删除菜单项
 * @param id
 * @returns {AxiosPromise<any>}
 */
export let deleteMenu = (id) => {
  return axios.post('/cgSecurity/menu/delete', {}, {
    params: {
      menuId: id
    }
  })
}
