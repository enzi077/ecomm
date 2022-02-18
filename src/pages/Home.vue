<template>
  <q-page class="row justify-center">
        <Login/>
        <Carousel/>
        <Card/>
  </q-page>
</template>

<script>
/* eslint-disable prefer-const */
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'
import Login from '../components/Login.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Card,
    Login
  }
}
</script>
