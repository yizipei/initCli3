//仓库：用来存放数据，可以直接获取里面的对象，但不能直接修改数据，需通过mutations提交
const state = {
}
//计算属性：对仓库里的数据进行过滤，返回想要的数据
const getters = {
}
//提交数据：同步commit方式提交，修改仓库里的数据
const mutations = {
}

//提交数据：异步获取数据，提交mutations方法修改数据
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
