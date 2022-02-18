<template>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-xs-12 col-sm-6 self-center"
        >
        <p class="text-h5">Login</p>
      <q-input
        v-model="username"
        label="Your name/ username *"
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
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
        </q-form>
</template>

<script>
import axios from '../axios-auth'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onReset () {
      this.username = ''
      this.password = ''
    },
    onSubmit () {
      const user = {
        username: this.username,
        password: this.password
      }
      axios.post('/login', user)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            this.$router.push('/shortlist')
          }
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
