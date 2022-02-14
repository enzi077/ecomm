<template>
  <q-page flex>
        <Carousel :products="products"/>
        <Card :products="products" />
  </q-page>
</template>

<script>
/* eslint-disable prefer-const */
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  props: ['products']
}
</script>
