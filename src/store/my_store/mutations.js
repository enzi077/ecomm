/* eslint-disable prefer-const */
import { find, intersectionBy, uniqBy } from 'lodash-es'

export function setData (state, payload) {
  state.products = payload
}

export function setCatData (state, payload) {
  state.catProd = intersectionBy(state.products, payload, 'id')
}

export function addToShortlist (state, payload) {
  state.shortlistProd.push(payload.product)
  state.shortlistProd = uniqBy(state.shortlistProd, 'id')
}

export function addToUserShortlist (state, payload) {
  state.user.shortlist.push(payload.product)
  state.user.shortlist = uniqBy(state.user.shortlist, 'id')
}

export function updateShortlist (state, payload) {
  state.shortlistProd = state.shortlistProd.filter(item =>
    payload.check.sort().indexOf(item) < 0
  )
  state.shortlistProd = uniqBy(state.shortlistProd, 'id')
}

export function updateUserShortlist (state, payload) {
  state.user.shortlist = state.user.shortlist.filter(item =>
    payload.check.sort().indexOf(item) < 0
  )
  state.user.shortlist = uniqBy(state.user.shortlist, 'id')
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

export function updateUserCart (state, payload) {
  for (let item in payload.check) {
    state.user.cart.push(payload.check[item])
  }
  state.user.cart = uniqBy(state.user.cart, 'id')
}

export function removeFromUserCart (state, payload) {
  state.user.cart = state.user.cart.filter(item =>
    payload.check.sort().indexOf(item) < 0
  )
  state.user.cart = uniqBy(state.user.cart, 'id')
}

export function removeFromCart (state, payload) {
  state.cartItem = state.cartItem.filter(item =>
    payload.check.sort().indexOf(item) < 0
  )
  state.cartItem = uniqBy(state.cartItem, 'id')
}

export function noStock (state, payload) {
  let prod = find(state.products, { id: payload.prod.id })
  const index = state.products.indexOf(prod)
  state.products[index].rating.count -= payload.prod.rating.count
  state.products[index].currCount = payload.currCount
}

export function checkLogin (state, payload) {
  state.loggedIn = payload.loggedIn
  state.user = payload.user
}
