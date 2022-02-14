
export function shortlistProdAction ({ commit }, payload) {
  commit('addToShortlist', payload)
}

export function updateShortlist ({ commit }, payload) {
  commit('updateShortlist', payload)
}

export function updateCart ({ commit }, payload) {
  commit('updateCart', payload)
}
