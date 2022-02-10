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
                    <q-btn flat round color="red" icon="favorite" @click="addToShortlist(product)"/>
                    <q-btn flat round icon="shopping_cart"/>
                </q-card-actions>
        </q-card>
    </div>
    <div v-else class="row">
        <q-spinner class="col justify-center" color="primary" size="3em"/>
    </div>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    showProductDetails (id) {
      this.$router.push(`/product-detail/${id}`)
    },
    addToShortlist (product) {
      this.$router.push(`/shortlist/${product.id}`)
    }
  }
}
</script>
