<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

            <q-toolbar-title>
                <q-btn no-caps align="center" size="20px" :ripple="false" dense flat to="/">E-comm Ninja</q-btn>
            </q-toolbar-title>

        <q-btn dense flat round icon="favorite" to="/shortlist"/>
        <q-btn dense flat round icon="shopping_cart" to="/checkout"/>
        <q-btn-dropdown dense flat round dropdown-icon="more_vert">
            <q-list v-if="loggedIn" bordered>
                <q-item @click="logout" clickable v-ripple>
                    <q-item-label>Logout</q-item-label>
                </q-item>
            </q-list>
            <q-list v-else bordered>
                <q-item @click="showSignup" clickable v-ripple>
                    <q-item-label>Signup</q-item-label>
                </q-item>
                <q-item @click="showLogin" clickable v-ripple>
                    <q-item-label>Login</q-item-label>
                </q-item>
            </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
        <q-list v-for="(category) in categories" :key="category" bordered>
            <q-item @click="showCategory(category)" clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar color="teal" text-color="white">
                        {{ category.charAt(0) }}
                    </q-avatar>
                </q-item-section>

                <q-item-section>{{ category }}</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path"/>
    </q-page-container>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from '../axios-auth'
import toUpper from '../utils/toUpperString'
import toLower from '../utils/toLowerString'
export default {
  data () {
    return {
      left: false,
      categories: []
    }
  },
  computed: {
    ...mapState('myStore', ['loggedIn'])
  },
  methods: {
    showCategory (categoryName) {
      const propName = toLower(categoryName)
      this.$router.push(`/category/${propName}`)
    },
    ...mapActions('myStore', ['loadData', 'checkLogin']),
    logout () {
      localStorage.clear()
      this.checkLogin({ user: {}, loggedIn: false })
      this.$router.push('/login')
    },
    showSignup () {
      this.$router.push('/signup')
    },
    showLogin () {
      this.$router.push('/login')
    }
  },
  created () {
    axios.get('/products/categories')
      .then(res => {
        // eslint-disable-next-line prefer-const
        for (let myData in res.data) {
          this.categories.push(toUpper(res.data[myData].name))
        }
      })
      .catch(error => console.log(error))

    axios.get('/products')
      .then(res => {
        this.loadData(res.data)
      })
      .catch(error => console.log(error))

    // if (localStorage.getItem('token')) {
    //   axios.get('/login/user', { headers: { token: localStorage.getItem('token') } })
    //     .then(res => {
    //       this.checkLogin({ user: res.data, loggedIn: true })
    //     })
    //     .catch(err => console.log(err))
    // }
  }
}
</script>
