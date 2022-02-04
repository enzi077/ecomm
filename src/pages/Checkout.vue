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
            @click="basic=true"
        />
        <q-dialog v-model="basic">
            <q-card>
                <q-card-section>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                </q-card-section>

                <q-card-section class="q-pt-none">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, sequi.</p>
                </q-card-section>

                <q-card-actions align="right">
                <q-btn flat label="Decline" color="primary" v-close-popup />
                <q-btn flat label="Accept" color="primary" v-close-popup />
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
  }
}
</script>
