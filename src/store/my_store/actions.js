
export function setProducts ({ commit }, payload) {
  commit('setProducts', payload)
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

export function removeFromCart ({ commit }, payload) {
  commit('removeFromCart', payload)
}

export function toggleFav ({ commit }, payload) {
  commit('toggleFav', payload)
}
