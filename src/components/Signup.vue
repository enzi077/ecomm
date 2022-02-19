<template>
            <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-xs-12 col-sm-6 self-center"
            >
            <p class="text-h5">Sign Up</p>
        <q-input
            v-model="username"
            label="Your name/ username *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
            v-model="email"
            type="email"
            label="Your email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
            type="password"
            v-model="password"
            label="Your password *"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type a valid password',
            val => val.length > 6 || 'Please type a valid password'
            ]"
        />

        <div>
            <q-btn label="Signup" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <q-btn label="Already registered? Login here" @click="$emit('showLogin', true)" color="primary" flat class="q-ml-sm" />
            </q-form>
</template>

<script>
import axios from '../axios-auth'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onReset () {
      this.username = ''
      this.email = ''
      this.password = ''
    },
    onSubmit () {
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      axios.post('/signup', newUser)
    }
  }
}
</script>
