<template>
    <Card :showCatItems="true" :catTitle="catTitle"/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import toUpper from '../utils/toUpperString'
import Card from '../components/Card.vue'
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
    Card
  },
  mounted () {
    this.loadCategoryData(this.$route.params.categoryName)
    this.catTitle = toUpper(this.$route.params.categoryName)
  }
}
</script>
