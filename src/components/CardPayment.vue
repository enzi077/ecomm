<template>
    <div class="row items-start">
        <q-form
            @submit="onSubmit"
            @reset="onReset"
          autofocus
          class="col-xs-12 col-sm-8 col-md-6 q-gutter-lg">
            <q-input
                v-model="name"
                label="Name"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="cardNumber"
                label="Card Number"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="date"
                label="Date"
                type="date"
                :dense="dense"
                stack-label
            />
            <q-input
                v-model="cvv"
                label="CVV"
                type="password"
                :dense="dense"
                stack-label
            />
            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      cvv: '',
      cardNumber: '',
      date: '',
      dense: true
    }
  },
  methods: {
    onSubmit () {
      console.log('submitted')
    },
    onReset () {
      console.log('reset')
    }
  }
}
</script>
