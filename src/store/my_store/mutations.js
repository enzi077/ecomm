/* eslint-disable prefer-const */
import { intersectionBy, uniqBy } from 'lodash-es'

export function setData (state, payload) {
  state.products = payload
}

export function setCatData (state, payload) {
  state.catProd = intersectionBy(state.products, payload, 'id')
}

export function addToShortlist (state, payload) {
  if (state.shortlistProd.includes(payload.product, 0)) {
    state.shortlistProd = state.shortlistProd.filter(item =>
      item.id !== payload.product.id
    )
  } else {
    state.shortlistProd.push(payload.product)
  }
  state.shortlistProd = uniqBy(state.shortlistProd, 'id')
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
