<template>
    <div class="row items-start">
        <Address class="col-12"/>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            autofocus
            class="col-xs-12 col-sm-8 col-md-6 q-gutter-lg">
            <q-input
                v-model="$v.name.$model"
                label="Name *"
                :dense="dense"
                stack-label
                :error="$v.name.$error"
                error-message="Invalid entry"
            />
            <q-input
                v-model="$v.cardNumber.$model"
                label="Card Number *"
                :dense="dense"
                stack-label
                :error="$v.cardNumber.$error"
                error-message="Invalid entry"
            />
            <q-input
                v-model="$v.date.$model"
                label="Date *"
                type="date"
                :dense="dense"
                stack-label
                :error="$v.date.$error"
                error-message="Invalid entry"
            />
            <q-input
                v-model="$v.cvv.$model"
                label="CVV *"
                type="password"
                :dense="dense"
                stack-label
                :error="$v.cvv.$error"
                error-message="Invalid entry"
                :rules="[val => val.length === 3]"
            />
            <div>
                <q-btn no-caps label="Pay" type="submit" color="primary"/>
                <q-btn no-caps label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
        <q-dialog v-model="showPaymentSuccess">
            <q-card>
                <q-card-section>
                    Your payment is successful
                </q-card-section>
                <q-card-actions>
                    <q-btn no-caps flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>
<script>
import { required, numeric } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import Address from './Address.vue'
export default {
  data () {
    return {
      name: '',
      cvv: '',
      cardNumber: '',
      date: '',
      dense: true,
      showPaymentSuccess: false
    }
  },
  components: {
    Address
  },
  props: ['toRem'],
  computed: {
    ...mapGetters('myStore', ['getFinalPaymentArr', 'getUser'])
  },
  methods: {
    ...mapActions('myStore', ['updateProductCount', 'removeFromCart']),
    onSubmit () {
      if (this.getUser.address && this.getUser.contact) {
        this.$v.$touch()
        if (this.$v.invalid) {
          this.$q.notify({
            color: 'red',
            textColor: 'white',
            icon: 'warning',
            message: 'Form not valid'
          })
        } else {
          this.updateProductCount(this.getFinalPaymentArr)
          this.removeFromCart({ check: this.toRem, forCart: true, user: this.getUser })
          this.showPaymentSuccess = !this.showPaymentSuccess
        }
      } else {
        this.$router.push('/profile')
      }
    },
    onReset () {
      this.name = ''
      this.cvv = ''
      this.cardNumber = ''
      this.date = ''
    }
  },
  validations: {
    name: { required },
    cardNumber: { required, numeric },
    cvv: { required, numeric },
    date: { required }
  }
}
</script>
