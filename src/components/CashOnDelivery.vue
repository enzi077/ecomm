<template>
    <div>
        <Address class="col-12"/>
        <q-btn @click="onSubmit" label="Pay" type="submit" color="primary"/>
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
      text: '',
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
      this.updateProductCount(this.getFinalPaymentArr)
      this.removeFromCart({ check: this.toRem, forCart: true, user: this.getUser })
      this.showPaymentSuccess = !this.showPaymentSuccess
    }
  }
}
</script>
