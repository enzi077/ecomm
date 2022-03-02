<template>
    <Card v-if="catTitle" :showCatItems="true" :catTitle="catTitle"/>
    <Spinner v-else/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import toUpper from '../utils/toUpperString'
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
export default {
  data () {
    return {
      catTitle: ''
    }
  },
  computed: {
    ...mapState('myStore', ['catProd'])
  },
  methods: {
    ...mapActions('myStore', ['loadCategoryData'])
  },
  components: {
    Card,
    Spinner
  },
  created () {
    this.loadCategoryData(this.$route.params.categoryName)
    this.catTitle = toUpper(this.$route.params.categoryName)
  }
}
</script>
