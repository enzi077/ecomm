<template>
    <div v-if="myProduct" class="row q-ma-md">
        <div class="col-12 col-sm-8 col-md-6">
            <q-card class="my-card">
                <q-img
                    basic
                    style="max-height: 300px"
                    :src="myProduct.image"
                />
            </q-card>
        </div>
        <div class="col-12 q-my-md justify-center">
            <q-list>
                <q-item>
                <q-item-section>
                    <q-item-label>Name: <span class="text-subtitle2">{{myProduct.title}}</span></q-item-label>
                    <q-item-label>Price: $<span class="text-subtitle2">{{myProduct.price}}</span></q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            <q-btn
            no-caps
            color="red"
            label="Add to Shortlist"
            class="q-ma-md"
            @click="updateShortlistDetailProd(myProduct)"
            />
            <q-btn
            no-caps
            color="green"
            label="Add to Cart"
            class="q-ma-md"
            @click="updateCartDetailProd(myProduct)"
            />
        </div>
    </div>
    <Spinner v-else/>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Spinner from 'src/components/Spinner.vue'
import axios from '../axios-auth'
export default {
  components: { Spinner },
  data () {
    return {
      myProduct: {}
    }
  },
  computed: {
    ...mapState('myStore', ['loggedIn']),
    ...mapGetters('myStore', ['cartItemGetter', 'shortlistGetter', 'getUser'])
  },
  methods: {
    ...mapActions('myStore', ['updateCart', 'shortlistProdAction']),
    updateCartDetailProd (product) {
      const check = []
      check.push(product)
      if (!this.cartItemGetter.some(item => item.id === product.id)) {
        if (this.loggedIn) {
          this.updateCart({ check, forCart: true, user: this.getUser })
          this.$q.notify({
            message: 'Added to Cart',
            color: '#c1c1c1'
          })
        } else {
          this.updateCart({ check, forCart: true })
          this.$q.notify({
            message: 'Added to Cart',
            color: '#c1c1c1'
          })
        }
      }
    },
    updateShortlistDetailProd (product) {
      if (!this.shortlistGetter.some(item => item.id === product.id)) {
        if (this.loggedIn) {
          this.shortlistProdAction({ product, user: this.getUser })
          this.$q.notify({
            message: 'Added to Shortlist',
            color: '#c1c1c1'
          })
        } else {
          this.shortlistProdAction({ product })
          this.$q.notify({
            message: 'Added to Shortlist',
            color: '#c1c1c1'
          })
        }
      }
    }
  },
  created () {
    axios.get(`/products/${this.$route.params.id}`)
      .then(res => {
        this.myProduct = res.data
      })
      .catch(error => console.log(error))
  }
}
</script>
