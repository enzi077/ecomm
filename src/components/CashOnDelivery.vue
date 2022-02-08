<template>
    <div>
        <q-input v-model="text" label="Label" :dense="dense" />
    </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      dense: true
    }
  }
}
</script>
