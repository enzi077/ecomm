<template>
    <q-page class="q-ma-md">
        <q-list>
            <q-item-section>
                <q-item-label class="text-h6">Payment</q-item-label>
                <q-item-label caption>Total= ${{toRem.amt}}</q-item-label>
                <div class="q-gutter-sm">
                    <q-radio v-model="type" val="card" label="Card" />
                    <q-radio v-model="type" val="gpay" label="Google Pay" />
                    <q-radio v-model="type" val="cash" label="Cash" />
                </div>
            </q-item-section>
            <q-item-section>
                <CardPayment v-if="type==='card'" />
                <Gpay v-else-if="type==='gpay'" />
                <CashOnDelivery v-else-if="type==='cash'" />
            </q-item-section>
        </q-list>
    </q-page>
</template>

<script>
import CardPayment from '../components/CardPayment.vue'
import Gpay from '../components/Gpay.vue'
import CashOnDelivery from '../components/CashOnDelivery.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      type: ''
    }
  },
  computed: {
    ...mapState('myStore', ['toRem'])
  },
  components: {
    CardPayment,
    Gpay,
    CashOnDelivery
  }
}
</script>
