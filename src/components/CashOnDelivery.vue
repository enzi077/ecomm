<template>
    <div>
        <Address class="col-12"/>
        <q-btn @click="onSubmit" type="submit" color="primary" id="pay" no-caps>Pay</q-btn>
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
import { mapState, mapActions, mapGetters } from 'vuex'
import Address from './Address.vue'
export default {
  data () {
    return {
      text: '',
      dense: true,
      showPaymentSuccess: false
    }
  },
  components: {
    Address
  },
  computed: {
    ...mapGetters('myStore', ['getFinalPaymentArr', 'getUser']),
    ...mapState('myStore', ['toRem'])
  },
  methods: {
    ...mapActions('myStore', ['updateProductCount', 'removeFromCart']),
    onSubmit () {
      if (this.getUser.address && this.getUser.contact) {
        this.updateProductCount(this.getFinalPaymentArr)
        this.removeFromCart({ check: this.toRem.itemsToBeRem, forCart: true, user: this.getUser })
        this.showPaymentSuccess = !this.showPaymentSuccess
      } else {
        this.$router.push('/profile')
      }
    }
  }
}
</script>
