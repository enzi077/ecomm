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

export function getLoggedUser ({ commit }) {
  axios.get('/login/user', { headers: { token: localStorage.getItem('token') } })
    .then(res => {
      commit('checkLogin', { user: res.data, loggedIn: true })
    })
    .catch(err => console.log(err))
}

export function userLogout ({ commit }, payload) {
  commit('checkLogin', payload)
}

export function shortlistProdAction ({ commit }, payload) {
  if (payload.user) {
    axios.post('/login/user', payload)
      .then(res => {
        if (res.status === 200) {
          commit('addToUserShortlist', payload)
        }
      })
      .catch(err => console.log(err))
  } else {
    commit('addToShortlist', payload)
  }
}

export function updateShortlist ({ commit }, payload) {
  if (payload.user) {
    axios.put('/login/user', payload)
      .then(res => {
        if (res.status === 200) {
          commit('updateUserShortlist', payload)
        }
      })
      .catch(err => console.log(err))
  } else {
    commit('updateShortlist', payload)
  }
}

export function updateCart ({ commit }, payload) {
  if (payload.user) {
    axios.post('/login/user', payload)
      .then(res => {
        if (res.status === 200) {
          commit('updateUserCart', payload)
        }
      })
      .catch(err => console.log(err))
  } else {
    commit('updateCart', payload)
  }
}

export function removeFromCart ({ commit }, payload) {
  if (payload.user) {
    axios.put('/login/user', payload)
      .then(res => {
        if (res.status === 200) {
          commit('removeFromUserCart', payload)
        }
      })
      .catch(err => console.log(err))
  } else {
    commit('removeFromCart', payload)
  }
}

export function updatePayment ({ commit }, payload) {
  commit('updatePayment', payload)
}

export function noStock ({ commit }, payload) {
  commit('noStock', payload)
}

export function updateProductCount ({ commit }, payload) {
  axios.put('/products', payload)
    .then(res => {
      commit('setData', res.data)
    })
    .catch(err => console.log(err))
}

export function editProfile ({ commit }, payload) {
  if (payload.id) {
    axios.put(`/login/user/editprofile/${payload.id}`, payload)
      .then(res => {
        commit('updUser', res.data)
      })
      .catch(err => console.log(err))
  }
}
