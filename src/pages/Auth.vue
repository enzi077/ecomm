<template>
  <q-page class="row justify-center">
        <Login v-if="displayLogin" @showSignup="setSignup($event)"/>
        <Signup v-else @showLogin="setLogin($event)"/>
  </q-page>
</template>

<script>
/* eslint-disable prefer-const */
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

export default {
  name: 'Auth',
  components: {
    Signup,
    Login
  },
  data () {
    return {
      displayLogin: false
    }
  },
  methods: {
    setLogin (val) {
      this.displayLogin = val
    },
    setSignup (val) {
      this.displayLogin = !val
    }
  }
}
</script>
