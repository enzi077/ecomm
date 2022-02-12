/* eslint-disable prefer-const */
export function addToShortlist (state, payload) {
  state.shortlistProd.push(payload)
}

export function updateShortlist (state, payload) {
  state.shortlistProd = state.shortlistProd.filter(item =>
    payload.check.sort().indexOf(item.id) < 0
  )
}
