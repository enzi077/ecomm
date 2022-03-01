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
          color="positive"
          label="Add to Cart"
          class="q-ma-md"
          @click="updateCartHere(check)"
        />
        <q-btn
          no-caps
          color="negative"
          label="Remove from shortlist"
          class="q-ma-md"
          @click="updateShortlistHere(check)"
        />
    </q-page>
    <Spinner v-else/>
</template>

<script>
import Spinner from 'src/components/Spinner.vue'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  /* eslint-disable prefer-const */
  components: { Spinner },
  data () {
    return {
      check: []
    }
  },
  computed: {
    ...mapGetters('myStore', ['shortlistGetter', 'cartItemGetter', 'getUser']),
    ...mapState('myStore', ['loggedIn'])
  },
  methods: {
    ...mapActions('myStore', ['updateShortlist', 'updateCart']),
    updateShortlistHere (products) {
      if (this.loggedIn) {
        this.updateShortlist({ check: products, user: this.getUser })
      } else {
        this.updateShortlist({ check: products })
      }
    },
    updateCartHere (products) {
      if (this.loggedIn) {
        this.updateCart({ check: products, forCart: true, user: this.getUser })
      } else {
        this.updateCart({ check: products, forCart: true })
      }
    }
  }
}
</script>
