<template>
    <q-page class="q-ma-md">
        <q-list>
            <q-item-section>
                <q-item-label class="text-h6">Payment</q-item-label>
                <q-item-label caption>Total= ${{$route.query.amt}}</q-item-label>
                <div class="q-gutter-sm">
                    <q-radio v-model="type" val="card" label="Card" />
                    <q-radio v-model="type" val="gpay" label="Google Pay" />
                    <q-radio v-model="type" val="cash" label="Cash" />
                </div>
            </q-item-section>
            <q-item-section>
                <CardPayment v-if="type==='card'" :toRem="$route.query.itemsToBeRem"/>
                <Gpay v-else-if="type==='gpay'" :toRem="$route.query.itemsToBeRem"/>
                <CashOnDelivery v-else-if="type==='cash'" :toRem="$route.query.itemsToBeRem"/>
            </q-item-section>
        </q-list>
    </q-page>
</template>

<script>
import CardPayment from '../components/CardPayment.vue'
import Gpay from '../components/Gpay.vue'
import CashOnDelivery from '../components/CashOnDelivery.vue'

export default {
  data () {
    return {
      type: ''
    }
  },
  components: {
    CardPayment,
    Gpay,
    CashOnDelivery
  }
}
</script>
