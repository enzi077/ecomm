<template>
    <div v-if="myProduct" class="row q-ma-md">
        <div class="col-12 col-sm-8 col-md-6">
            <q-card class="my-card">
                <q-img
                    basic
                    style="max-height: 300px"
                    :src="myProduct.image"
                />
            </q-card>
        </div>
        <div class="col-12 q-my-md justify-center">
            <q-list>
                <q-item>
                <q-item-section>
                    <q-item-label>Name:</q-item-label>
                    <q-item-label>Price:</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{myProduct.title}}</q-item-label>
                    <q-item-label>{{myProduct.price}}</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
            <!-- <q-btn-toggle
                flat
                toggle-color="primary"
                :options="[
                    {label: 'One', value: 'one'},
                    {label: 'Two', value: 'two'},
                    {label: 'Three', value: 'three'}
                ]"
            /> -->
        </div>
    </div>
    <Spinner v-else/>
</template>

<script>
import Spinner from 'src/components/Spinner.vue'
import axios from '../axios-auth'
export default {
  components: { Spinner },
  data () {
    return {
      myProduct: {}
    }
  },
  created () {
    axios.get(`/products/${this.$route.params.id}`)
      .then(res => {
        console.log(res)
        this.myProduct = res.data
      })
      .catch(error => console.log(error))
  }
}
</script>
