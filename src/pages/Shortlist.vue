<template>
    <q-page>
        <q-list bordered>
            <q-item>
                <q-item-section avatar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Product Name</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-checkbox v-model="check1"/>
                </q-item-section>
            </q-item>
        </q-list>
        <q-btn
          no-caps
          color="green"
          label="Add to Cart"
          class="q-ma-md"
        />
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      check1: true
    }
  }
}
</script>
