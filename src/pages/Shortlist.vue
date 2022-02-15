<template>
    <q-page v-if="shortlistGetter">
        <q-list bordered>
            <q-item v-for="product in shortlistGetter" :key="product.id">
                <q-item-section avatar>
                    <q-avatar>
                        <img :src="product.image">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{product.title}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-checkbox v-model="check" :val="product"/>
                </q-item-section>
            </q-item>
        </q-list>
        <q-btn
          no-caps
          color="green"
          label="Add to Cart"
          class="q-ma-md"
          @click="updateCart({check})"
        />
        <q-btn
          no-caps
          color="red"
          label="Remove from shortlist"
          class="q-ma-md"
          @click="updateShortlist({check})"
        />
    </q-page>
    <Spinner v-else/>
</template>

<script>
import Spinner from 'src/components/Spinner.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  /* eslint-disable prefer-const */
  components: { Spinner },
  data () {
    return {
      check: []
    }
  },
  computed: {
    ...mapGetters('myStore', ['shortlistGetter', 'cartItemGetter'])
  },
  methods: {
    ...mapActions('myStore', ['updateShortlist', 'updateCart'])
    // updateShortlistCart () {
    //  let tempArr = this.cartItemGetter.filter(item => this.check.sort().indexOf(item.id) > -1)
    //  console.log(tempArr)
    // }
  }
}
</script>
