<template>
    <Card :products="catProd" />
</template>

<script>
import axios from '../axios-auth'
import Card from '../components/Card.vue'
export default {
  data () {
    return {
      catProd: []
    }
  },
  components: {
    Card
  },
  created () {
    axios.get(`/products/category/${this.$route.params.categoryName}`)
      .then(res => {
        this.catProd = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>
