<template>
  <q-page flex>
        <Carousel/>
        <Card/>
  </q-page>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card
  }
}

</script>
