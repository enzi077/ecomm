<template>
    <q-page>
        <q-item
          v-for="cartItem in cartItemGetter"
          :key="cartItem.id"
          class="q-mb-sm row"
          clickable
          v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img :src="cartItem.image">
                </q-avatar>
             </q-item-section>
            <q-item-section>
                <q-item-label>{{cartItem.title}}</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-input
                    @input="checkStock($event, cartItem)"
                    type="number"
                    style="max-width: 100px"
                />
            </q-item-section>
            <q-item-section side>
                <q-checkbox v-model="check" :val="cartItem"/>
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label>Total</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-item-label>= ${{total}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-btn
            color="green"
            label="Proceed to Pay"
            class="q-ma-md"
            no-caps
            @click="showPaymentDialog"
        />
        <q-btn
            color="red"
            label="Remove from cart"
            class="q-ma-md"
            no-caps
            @click="updateCartHere(check)"
        />
        <q-dialog v-model="basic">
            <q-card>
                <q-card-section>
                    Proceed to pay?
                </q-card-section>
                <q-card-actions>
                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="OK" color="primary" v-close-popup @click="proceedToPayment"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
/* eslint-disable prefer-const */
import { find } from 'lodash-es'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Checkout',
  data () {
    return {
      check: [],
      basic: false,
      itemCount: 0,
      total: 0,
      itemsForPayment: []
    }
  },
  computed: {
    ...mapGetters('myStore', ['cartItemGetter', 'getUser', 'getFinalPaymentArr']),
    ...mapState('myStore', ['loggedIn'])
  },
  watch: {
    check (newVal) {
      let finalPaymentArr = this.itemsForPayment.filter(item =>
        newVal.some(itemInCheck => itemInCheck.id === item.id)
      )
      this.updatePayment(finalPaymentArr)
      this.total = this.getFinalPaymentArr.reduce((accum, item) => accum + (item.unitPrice * item.currCount), 0)
    }
  },
  methods: {
    ...mapActions('myStore', ['updateCart', 'removeFromCart', 'noStock', 'updatePayment']),
    showPaymentDialog () {
      this.basic = !this.basic
    },
    proceedToPayment () {
      if (localStorage.getItem('token')) {
        this.$router.push({ path: '/payment', query: { amt: this.total } })
      } else {
        this.$router.push('/login')
      }
    },
    checkStock ($event, val) {
      let newObj = { id: val.id, currCount: $event, unitPrice: val.price }
      let replaceProd = find(this.itemsForPayment, { id: newObj.id })
      if (replaceProd) {
        this.itemsForPayment.splice(this.itemsForPayment.indexOf(replaceProd), 1, newObj)
      } else {
        this.itemsForPayment.push(newObj)
      }
      // whenever toggle is fired, again, then remove this item from check []
    },
    updateCartHere (products) {
      if (this.loggedIn) {
        this.removeFromCart({ check: products, forCart: true, user: this.getUser })
      } else {
        this.removeFromCart({ check: products, forCart: true })
      }
    }
  }
}
</script>
