<template>
    <div class="row">
        <q-card v-if="getUser.username" flat bordered class="q-my-md col-xs-12 col-md-6 justify-center">
            <q-card-section>
                <div class="text-h6">Delivery Address</div>
                <div class="text-subtitle2">{{getUser.username}}</div>
            </q-card-section>
            <q-card-section>
                <div class="text-subtitle1">Name: <span class="text-subtitle2">{{getUser.username}}</span></div>
            </q-card-section>
            <q-separator inset/>
            <q-card-section>
                <div class="text-subtitle1">Address: <span class="text-subtitle2">{{getUser.address}}</span></div>
            </q-card-section>
            <q-separator inset/>
            <q-card-section>
                <div class="text-subtitle1">Contact: <span class="text-subtitle2">{{getUser.contact}}</span></div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Address',
  computed: {
    ...mapGetters('myStore', ['getUser'])
  },
  methods: {
    ...mapActions('myStore', ['getLoggedUser'])
  }
}
</script>
