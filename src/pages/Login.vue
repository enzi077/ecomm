<template>
    <q-page class="row justify-center">
        <q-form
            @submit.stop="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-xs-12 col-sm-6 self-center"
        >
        <p class="text-h5">Login</p>
      <q-input
        v-model="$v.username.$model"
        label="Your name/ username *"
        lazy-rules
        :error="$v.username.$error"
        error-message="Please enter a valid username"
        :rules="[ val => val && val.length > 0]"
      />

      <q-input
        type="password"
        v-model="$v.password.$model"
        label="Your password *"
        lazy-rules
        :error="$v.password.$error"
        error-message="Please enter a valid password"
        :rules="[ val => val.length > 6 ]"
      />

      <div>
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
      <q-btn label="Not yet registered? Sign up now" @click="$router.push('/signup')" color="primary" flat class="q-ml-sm" />
        </q-form>
    </q-page>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import axios from '../axios-auth'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  // :rules="[ val => val && val.length > 0 || 'Please type something']"
  /*: rules="[
          val => val !== null && val !== '' || 'Please type a valid password',
          val => val.length > 6 || 'Please type a valid password'
        ]" */
  methods: {
    ...mapActions('myStore', ['checkLogin']),
    onReset () {
      this.username = ''
      this.password = ''
    },
    onSubmit () {
      this.$v.$touch()
      if (this.$v.invalid) {
        this.$q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Form not valid'
        })
      } else {
        const user = {
          username: this.username,
          password: this.password
        }
        axios.post('/login', user)
          .then(res => {
            if (res.status === 200) {
              localStorage.setItem('token', res.data.token)
              this.$q.notify({
                color: 'green',
                textColor: 'white',
                icon: 'cloud_done',
                message: 'Logged in'
              })
              this.$router.push('/')
            }
          })
          .catch(() => {
            this.$q.notify({
              color: 'red',
              textColor: 'white',
              icon: 'warning',
              message: 'Invalid User'
            })
          })
      }
    }
  },
  validations () {
    return {
      username: { required },
      password: { required }
    }
  }
}
</script>
