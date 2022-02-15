/* eslint-disable prefer-const */
import { uniqBy } from 'lodash-es'

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
    payload.check.sort().indexOf(item) < 0
  )
}

export function updateCart (state, payload) {
  if (payload.remove) {
    state.cartItem = state.cartItem.filter(item =>
      payload.check.sort().indexOf(item.id) < 0
    )
  } else {
    for (let item in payload.check) {
      state.cartItem.push(payload.check[item])
    }
    state.cartItem = uniqBy(state.cartItem, 'id')
  }
}
