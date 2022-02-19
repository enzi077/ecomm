<template>
  <q-page class="row justify-center">
        <p class="text-left text-weight-bold text-h6" v-if="username">Hi {{username}}</p>
        <Carousel/>
        <Card/>
  </q-page>
</template>

<script>
/* eslint-disable prefer-const */
import axios from '../axios-auth'
import { mapState, mapActions } from 'vuex'
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  data () {
    return {
      username: ''
    }
  },
  computed: {
    ...mapState('myStore', ['loggedIn'])
  },
  methods: {
    ...mapActions('myStore', ['checkLogin'])
  },
  components: {
    Carousel,
    Card
  },
  created () {
    if (localStorage.getItem('token')) {
      axios.get('/login/user', { headers: { token: localStorage.getItem('token') } })
        .then(res => {
          this.checkLogin({ user: res.data, loggedIn: true })
          this.username = res.data.username
        })
        .catch(err => console.log(err))
    } else if (!this.loggedIn) {
      this.username = ''
    } else {
      this.username = ''
    }
  }
}
</script>
