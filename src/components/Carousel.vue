<template>
    <div class="q-pa-md col-xs-12">
    <q-carousel
        v-model="slide"
        animated
        transition-next="slide-left"
        transition-prev="slide-right"
        swipeable
        control-color="blue"
        padding
        arrows
        height="300px"
        v-if="products.length > 0"
        class="bg-primary text-white shadow-1 rounded-borders col"
    >
        <q-carousel-slide
            v-for="product in products"
            class="column no-wrap flex-center"
            :name="product.id"
            :key="product.id"
            :img-src="product.image"
        >
            <div @click="showProductDetails(product._id)" class="custom-caption q-mt-md text-center">
                {{product.title}}
            </div>
        </q-carousel-slide>
    </q-carousel>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      slide: 1
    }
  },
  computed: {
    ...mapState('myStore', ['products'])
  },
  methods: {
    showProductDetails (id) {
      this.$router.push(`/product-detail/${id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
    .custom-caption
        width: fit-content
        padding: 10px
        background-color: rgba(0, 0, 0, 0.85)
        border-radius: 20px
    .custom-caption:hover
        cursor: pointer
</style>
