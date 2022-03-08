import { shallowMount, createLocalVue } from '@vue/test-utils'
import CashOnDelivery from '../../../src/components/CashOnDelivery.vue'
import Vuex from 'vuex'
import * as All from 'quasar'
import myStore from '../../../src/store/my_store'
import { components } from './components'

const { Quasar } = All
const localVue = createLocalVue()
localVue.use(Quasar, { components })
localVue.use(Vuex)

describe('Mount Address', () => {
  let state
  let store
  beforeEach(() => {
    state = {
      user: {
        username: 'Prateek',
        password: 'Prateek123',
        email: 'prateek@gmail.com',
        address: 'Blr',
        contact: 123456789
      }
    }
    store = new Vuex.Store({
      modules: {
        myStore: {
          state,
          actions: myStore.actions,
          getters: myStore.getters,
          namespaced: true
        }
      }
    })
  })

  const wrapper = shallowMount(CashOnDelivery, {
    localVue,
    store
  })
  const vm = wrapper.vm

  it('has default data properties', () => {
    expect(typeof vm.showPaymentSuccess).toBe('boolean')
  })
  // check for getUser,address and getUser.contact
  it('to check for user getter working', () => {
    const submitBtn = wrapper.find('#pay')
    submitBtn.trigger('click')
    expect(state.user.address).toBe('Blr')
  })
})
