/* eslint-disable prefer-const */
export function addToShortlist (state, payload) {
//   for (let shortlistItem in state.shortlistProd) {
//     if (payload.id !== shortlistItem.id) {
//       state.shortlistProd.push(payload)
//     } else {
//       console.log('Removeing')
//       state.shortlistProd.filter(item => item !== payload)
//     }
//   }

  state.shortlistProd.push(payload)
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
