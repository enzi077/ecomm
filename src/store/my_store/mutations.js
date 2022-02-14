/* eslint-disable prefer-const */
export function setProducts (state, payload) {
  state.products = payload
}
export function addToShortlist (state, payload) {
  if (state.shortlistProd.includes(payload.product)) {
    state.shortlistProd = state.shortlistProd.filter(item =>
      item.id !== payload.product.id
    )
  } else {
    state.shortlistProd.push(payload.product)
  }
}

export function updateShortlist (state, payload) {
  state.shortlistProd = state.shortlistProd.filter(item =>
    payload.check.sort().indexOf(item.id) < 0
  )
}

export function updateCart (state, payload) {
  if (payload.remove) {
    state.cartItem = state.cartItem.filter(item =>
      payload.check.sort().indexOf(item.id) < 0
    )
  } else {
    state.cartItem = state.shortlistProd.filter(item =>
      payload.check.sort().indexOf(item.id) > -1
    )
  }
}

export function toggleFav (state, payload) {
  if (state.shortlistProd.includes(payload)) {
    return true
  } else {
    return false
  }
}
