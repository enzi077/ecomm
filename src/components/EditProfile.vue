<template>
    <q-page class="row justify-start">
            <q-form
            @submit.stop="onSubmit"
            @reset="onReset"
            class="q-gutter-md col-xs-12 col-sm-6"
            >
        <q-input
            v-model="username"
            label="Your name/ username"
        />
        <q-input
            v-model="$v.email.$model"
            type="email"
            label="Your email"
            :error="$v.email.$error"
            error-message="Invalid entry. Please try again"
        />

        <q-input
            v-model="address"
            label="Your address"
        />
        <q-input
            v-model="contact"
            label="Your contact"
        />

        <div>
            <q-btn label="Edit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="positive" flat class="q-ml-sm" />
            <q-btn label="Cancel" @click="$emit('editDisp')" color="positive" flat class="q-ml-sm" />
        </div>
            </q-form>
    </q-page>
</template>

<script>
import { email } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditProfile',
  data () {
    return {
      username: '',
      email: '',
      address: '',
      contact: ''
    }
  },
  computed: {
    ...mapGetters('myStore', ['getUser'])
  },
  methods: {
    ...mapActions('myStore', ['editProfile']),
    onReset () {
      this.username = ''
      this.email = ''
      this.address = ''
      this.contact = ''
    },
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.$q.notify({
          color: 'red',
          textColor: 'white',
          icon: 'warning',
          message: 'Email not valid'
        })
      } else {
        const updUser = {
          username: this.username ? this.username : this.getUser.username,
          email: this.email ? this.email : this.getUser.email,
          address: this.address ? this.address : this.getUser.address,
          contact: this.contact ? this.contact : this.getUser.contact,
          id: this.getUser._id
        }
        this.editProfile(updUser)
        this.$q.notify({
          color: 'green',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Profile updated'
        })
      }
    }
  },
  validations: {
    email: { email }
  }
}
</script>
