<template>
  <q-page flex>
        <Carousel :products="products"/>
        <Card :products="products" />
  </q-page>
</template>

<script>
import axios from '../axios-auth'
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  data () {
    return {
      products: []
    }
  },
  beforeMount () {
    axios.get('/products')
      .then(res => {
        this.products = res.data
        console.log(this.products)
      })
      .catch(error => console.log(error))
  }
}
</script>
