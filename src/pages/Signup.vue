<template>
    <q-page class="row justify-center">
            <q-form
            @submit.stop="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-xs-12 col-sm-6 self-center"
            >
            <p class="text-h5">Sign Up</p>
        <q-input
            v-model="$v.username.$model"
            label="Your name/ username *"
            lazy-rules
            :error="$v.username.$error"
            error-message="Invalid entry. Please try again."
            :rules="[val => val.length > 0]"
        />
        <q-input
            v-model="$v.email.$model"
            type="email"
            label="Your email *"
            lazy-rules
            :error="$v.email.$error"
            error-message="Invalid entry. PLease try again"
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
            type="password"
            v-model="$v.password.$model"
            label="Your password *"
            lazy-rules
            :error="$v.password.$error"
            error-message="Invalid entry. Please try again"
            :rules="[
            val => val.length > 6 || 'Min characters required 6'
            ]"
        />

        <div>
            <q-btn label="Signup" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        <q-btn label="Already registered? Login here" @click="$router.push('/login')" color="primary" flat class="q-ml-sm" />
            </q-form>
    </q-page>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import axios from '../axios-auth'
export default {
  name: 'Signup',
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
        .then(res => {
          if (res.status === 200) {
            this.$emit('showLogin', true)
          }
        })
      if (this.$v.$anyError) {
        this.$q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Form not valid'
        })
      } else {
        this.$q.notify({
          color: 'green',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Form submitted'
        })
      }
    }
  },
  validations () {
    return {
      username: { required },
      email: { required, email },
      password: { required }
    }
  }
}
</script>
