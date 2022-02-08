<template>
    <q-page>
        <q-item v-for="n in 10" :key="n" class="q-mb-sm" clickable v-ripple>
            <q-item-section avatar>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/parallax2.jpg">
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>Product Name</q-item-label>
            </q-item-section>

            <q-item-section side>
                <q-checkbox v-model="check1" />
            </q-item-section>
        </q-item>
        <q-item>
            <q-item-section>
                <q-item-label>Total</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-item-label>= $12312</q-item-label>
            </q-item-section>
        </q-item>
        <q-btn
            color="red"
            icon-right="send"
            label="Proceed to Pay"
            class="q-ma-md"
            no-caps
            @click="showPaymentDialog"
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
export default {
  name: 'Checkout',
  data () {
    return {
      check1: false,
      basic: false
    }
  },
  methods: {
    showPaymentDialog () {
      this.basic = !this.basic
    },
    proceedToPayment () {
      this.$router.push('/payment')
    }
  }
}
</script>
