<template>
    <div @submit="onSubmit">
        <Address/>
        <q-btn label="Pay" type="submit" color="primary"/>
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
  methods: {
    onSubmit () {
      this.showPaymentSuccess = !this.showPaymentSuccess
    }
  }
}
</script>
