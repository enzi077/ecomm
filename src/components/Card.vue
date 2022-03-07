<template>
    <div
        v-if="showCatItems"
        class="row q-pa-md q-gutter-md justify-evenly"
    >
        <div class="text-h6 col-12 text-center">{{catTitle}}</div>
        <q-card
            v-for="product in catProd"
            v-show="product.price >= priceRangeGlobal[0] && product.price <= priceRangeGlobal[1]"
            :key="product.id"
            class="my-card col-xs-12 col-sm-6 col-md-3"
            >
                <q-img
                @click="showProductDetails(product._id)"
                v-ripple
                class="cursor-pointer q-hoverable"
                :src= "product.image"
                style="height: 200px"
                >
                    <div class="absolute-bottom">
                    <div class="text-caption text-weight-bold">{{ product.title }}</div>
                    </div>
                </q-img>

                <q-card-actions>
                    <q-btn
                      flat
                      round
                      :disable="toggleFav(product)"
                      :color="toggleFav(product) ? 'red' : 'none'"
                      icon="favorite"
                      @click="addToShortlist(product)" />
                    <q-btn
                        flat
                        round
                        icon="shopping_cart"
                        :disable="toggleCart(product)"
                        @click="updateCartHome(product)"
                    />
                </q-card-actions>
        </q-card>
    </div>
    <div
        v-else-if="products.length > 0"
        class="row q-pa-md q-gutter-md justify-evenly"
    >
        <q-card
            v-for="product in products"
            v-show="product.price >= priceRangeGlobal[0] && product.price <= priceRangeGlobal[1]"
            :key="product.id"
            class="col-xs-12 col-sm-6 col-md-3"
            >
                <q-img
                @click="showProductDetails(product._id)"
                v-ripple
                class="cursor-pointer q-hoverable"
                :src= "product.image"
                style="height: 200px"
                >
                    <div class="absolute-bottom">
                    <div class="text-caption text-weight-bold">{{ product.title }}</div>
                    </div>
                </q-img>

                <q-card-actions>
                    <q-btn
                      flat
                      round
                      :disable="toggleFav(product)"
                      :color="toggleFav(product) ? 'red' : 'none'"
                      icon="favorite"
                      @click="addToShortlist(product)" />
                    <q-btn
                        flat
                        round
                        icon="shopping_cart"
                        :disable="toggleCart(product)"
                        @click="updateCartHome(product)"
                    />
                </q-card-actions>
        </q-card>
    </div>
    <Spinner v-else/>
</template>

<script>
/* eslint-disable prefer-const */
import { mapActions, mapGetters, mapState } from 'vuex'
import Spinner from './Spinner.vue'
export default {
  components: { Spinner },
  computed: {
    ...mapGetters('myStore', ['shortlistGetter', 'cartItemGetter', 'getUser']),
    ...mapState('myStore', ['catProd', 'products', 'loggedIn', 'priceRangeGlobal'])
  },
  props: ['showCatItems', 'catTitle'],
  methods: {
    ...mapActions('myStore', ['shortlistProdAction', 'updateCart']),
    showProductDetails (id) {
      this.$router.push(`/product-detail/${id}`)
    },
    updateCartHome (product) {
      let check = []
      check.push(product)
      if (!this.cartItemGetter.some(item => item.id === product.id)) {
        if (this.loggedIn) {
          this.updateCart({ check, forCart: true, user: this.getUser })
        } else {
          this.updateCart({ check, forCart: true })
        }
      }
    },
    toggleFav (product) {
      if (this.shortlistGetter.some(item => item.id === product.id)) {
        return true
      } else {
        return false
      }
    },
    toggleCart (product) {
      if (this.cartItemGetter.some(item => item.id === product.id)) {
        return true
      } else if (product.rating.count === 0) {
        return true
      } else {
        return false
      }
    },
    addToShortlist (product) {
      if (!this.shortlistGetter.some(item => item.id === product.id)) {
        if (this.loggedIn) {
          this.toggleFav(product)
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
  }
}
</script>
