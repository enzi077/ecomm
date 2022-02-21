
export function getProducts (state) {
  return state.products
}

export function shortlistGetter (state) {
  if (state.loggedIn) {
    return state.user.shortlist
  } else {
    return state.shortlistProd
  }
}

export function cartItemGetter (state) {
  if (state.loggedIn) {
    return state.user.cart
  } else {
    return state.cartItem
  }
}

export function getUser (state) {
  return state.user
}
