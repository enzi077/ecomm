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
                    v-model.number="itemCount"
                    type="number"
                    style="max-width: 100px"
                    :rules="[ val => val <= cartItem.rating.count || `Only ${cartItem.rating.count} available`]"
                />
            </q-item-section>
            <q-item-section side>
                <q-checkbox v-model="check" :val="cartItem.id"/>
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label>Total</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-item-label>= ${{getTotalPrice}}</q-item-label>
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
            @click="updateCart({check, remove: true})"
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Checkout',
  data () {
    return {
      check: [],
      basic: false,
      itemCount: 1
    }
  },
  //   watch :{
  //       outOfStock() {
  //           for(let item in this.cartItemGetter){
  //               if(this.cartItemGetter[item].rating.count < item)
  //           }
  //       }
  //   },
  computed: {
    ...mapGetters('myStore', ['cartItemGetter']),
    getTotalPrice () {
      if (this.check) {
        return (this.cartItemGetter.filter(item =>
          this.check.sort().indexOf(item.id) > -1
        ).reduce(function (tempVal, currVal) {
          return tempVal + currVal.price
        }, 0))
      } else {
        return (this.cartItemGetter.reduce(function (tempVal, currVal) {
          return tempVal + currVal.price
        }, 0))
      }
    }
  },
  methods: {
    ...mapActions('myStore', ['updateCart']),
    showPaymentDialog () {
      this.basic = !this.basic
    },
    proceedToPayment () {
      this.$router.push({ path: '/payment', query: { amt: this.getTotalPrice } })
    }
  }
}
</script>
