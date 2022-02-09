<template>
    <div class="q-pa-md">
    <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                arrows
                height="300px"
                v-if="products.length > 0"
                class="bg-primary text-white shadow-1 rounded-borders col"
            >
            <q-carousel-slide
              name="style"
              class="column no-wrap flex-center"
              v-for="product in products"
              :key="product"
              :img-src="product.image"
            >
                <div class="q-mt-md text-center">
                    {{product.title}}
                </div>
            </q-carousel-slide>
    </q-carousel>
    </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style'
    }
  },
  props: ['products']
}
</script>
