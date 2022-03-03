<template>
  <div>
    <Address/>
    <q-btn color="positive" @click="showEditProfile">Edit</q-btn>
    <EditProfile v-if="showEdit" @editDisp="showEditProfile"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Address from '../components/Address.vue'
import EditProfile from '../components/EditProfile.vue'
export default {
  name: 'UserProfile',
  components: {
    Address,
    EditProfile
  },
  data () {
    return {
      showEdit: false
    }
  },
  methods: {
    ...mapActions('myStore', ['getLoggedUser']),
    showEditProfile () {
      this.showEdit = !this.showEdit
    }
  }
}
</script>
