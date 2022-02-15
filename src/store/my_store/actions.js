import axios from '../../axios-auth'
/* eslint-disable prefer-const */
export function loadData ({ commit }, payload) {
  commit('setData', payload)
}

export function loadCategoryData ({ commit }, payload) {
  axios.get(`/products/category/${payload}`)
    .then(res => {
      commit('setCatData', res.data)
    })
    .catch(err => console.log(err))
}

export function shortlistProdAction ({ commit }, payload) {
  commit('addToShortlist', payload)
}

export function updateShortlist ({ commit }, payload) {
  commit('updateShortlist', payload)
}

export function updateCart ({ commit }, payload) {
  commit('updateCart', payload)
}
