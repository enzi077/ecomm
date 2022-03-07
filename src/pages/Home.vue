<template>
  <q-page class="justify-center">
        <p class="text-left text-weight-bold text-h6" v-if="getUser.username">Hi {{getUser.username}}</p>
        <Carousel/>
        <Card/>
  </q-page>
</template>

<script>
/* eslint-disable prefer-const */
// import axios from '../axios-auth'
import { mapGetters, mapActions, mapState } from 'vuex'
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  computed: {
    ...mapGetters('myStore', ['getUser']),
    ...mapState('myStore', ['products'])
  },
  methods: {
    ...mapActions('myStore', ['getLoggedUser'])
  },
  components: {
    Carousel,
    Card
  },
  created () {
    if (localStorage.getItem('token')) {
      this.getLoggedUser()
    }
  }
}
</script>
