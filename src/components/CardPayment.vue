<template>
    <div class="row items-start">
        <Address/>
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
                <q-btn label="Pay" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
        <q-dialog v-model="showPaymentSuccess">
            <q-card>
                <q-card-section>
                    Your payment is successful
                </q-card-section>
                <q-card-actions>
                    <q-btn flat label="OK" color="primary" v-close-popup />
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
  computed: {
    ...mapGetters('myStore', ['getFinalPaymentArr'])
  },
  methods: {
    ...mapActions('myStore', ['updateProductCount']),
    onSubmit () {
      this.updateProductCount(this.getFinalPaymentArr)
      this.showPaymentSuccess = !this.showPaymentSuccess
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
