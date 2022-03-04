<template>
    <div class="row items-start">
        <Address class="col-12"/>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            autofocus
            class="col-xs-12 col-sm-8 col-md-6 q-gutter-lg">
            <q-input
                v-model="name"
                label="Name"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="cardNumber"
                label="Card Number"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="date"
                label="Date"
                type="date"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="cvv"
                label="CVV"
                type="password"
                :dense="dense"
                stack-label
            />
            <div>
                <q-btn no-caps label="Pay" type="submit" color="primary"/>
                <q-btn no-caps label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
        <q-dialog v-model="showPaymentSuccess">
            <q-card>
                <q-card-section>
                    Your payment is successful
                </q-card-section>
                <q-card-actions>
                    <q-btn no-caps flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Address from './Address.vue'
export default {
  data () {
    return {
      name: '',
      cvv: '',
      cardNumber: '',
      date: '',
      dense: true,
      showPaymentSuccess: false
    }
  },
  components: {
    Address
  },
  props: ['toRem'],
  computed: {
    ...mapGetters('myStore', ['getFinalPaymentArr', 'getUser'])
  },
  methods: {
    ...mapActions('myStore', ['updateProductCount', 'removeFromCart']),
    onSubmit () {
      if (this.getUser.address && this.getUser.contact) {
        this.updateProductCount(this.getFinalPaymentArr)
        this.removeFromCart({ check: this.toRem, forCart: true, user: this.getUser })
        this.showPaymentSuccess = !this.showPaymentSuccess
      } else {
        this.$router.push('/profile')
      }
    },
    onReset () {
      this.name = ''
      this.cvv = ''
      this.cardNumber = ''
      this.date = ''
    }
  }
}
</script>
