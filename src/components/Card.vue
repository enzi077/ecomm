<template>
    <div
        v-if="products.length > 0"
        class="row q-pa-md q-gutter-md justify-evenly"
    >
        <q-card
            v-for="product in products"
            :key="product.id"
            class="my-card col-xs-12 col-sm-6 col-md-3"
            >
                <q-img
                @click="showProductDetails(product.id)"
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
                      color="none"
                      icon="favorite"
                      @click="addToShortlist(product)" />
                    <q-btn flat round icon="shopping_cart"/>
                </q-card-actions>
        </q-card>
    </div>
    <Spinner v-else/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Spinner from './Spinner.vue'
export default {
  components: { Spinner },
  props: ['products'],
  computed: {
    ...mapGetters('myStore', ['shortlistGetter'])
  },
  methods: {
    ...mapActions('myStore', ['shortlistProdAction']),
    showProductDetails (id) {
      this.$router.push(`/product-detail/${id}`)
    },
    addToShortlist (product) {
      if (product) {
        this.shortlistProdAction(product)
        this.$q.notify({
          message: 'Added to Shortlist',
          color: '#c1c1c1'
        })
      }
    }
  }
}
</script>
