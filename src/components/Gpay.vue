<template>
    <div class="row items-start">
        <Address class="col-12"/>
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            autofocus
            class="col-xs-12 col-sm-8 col-md-6 q-gutter-lg">
            <q-input
                v-model="$v.upi.$model"
                label="UPI ID"
                :dense="dense"
                stack-label
                :error="$v.upi.$error"
                error-message="Invalid entry"
            />
            <div>
                <q-btn label="Pay" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
        <q-dialog v-model="showPaymentSuccess">
            <q-card>
                <q-card-section>
                    Your payment is successful!
                </q-card-section>
                <q-card-actions>
                    <q-btn flat align="center" label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import upiValidator from '../utils/upiValidator'
import { required } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
import Address from './Address.vue'
export default {
  components: {
    Address
  },
  data () {
    return {
      upi: '',
      dense: true,
      showPaymentSuccess: false
    }
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
      this.upi = ''
    }
  },
  validations: {
    upi: { required, upiValidator }
  }
}
</script>
