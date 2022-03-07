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
                <q-item @click="$router.push('/profile')" clickable v-ripple>
                    <q-item-label>User Profile</q-item-label>
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
        <q-list v-for="(category) in categories" :key="category._id" bordered>
            <q-item @click="showCategory(category.name)" clickable v-ripple>
                <q-item-section avatar>
                    <q-avatar class="avatar">
                        <q-icon :class="category.icon" />
                    </q-avatar>
                </q-item-section>

                <q-item-section>{{ toUpper(category.name) }}</q-item-section>
            </q-item>
        </q-list>
        <div class="q-ma-md row">
            <p class="text-subtitle2 col-12">Filter by price:</p>
            <q-radio
                val="1-2000"
                v-model="priceRange"
                label="None"
                class="col-12"
            />
            <q-radio
                val="1-100"
                v-model="priceRange"
                label="$1-$100"
                class="col-12"
            />
            <q-radio
                val="101-500"
                v-model="priceRange"
                label="$101-$500"
                class="col-12"
            />
            <q-radio
                val="501-900"
                v-model="priceRange"
                label="$501-$900"
                class="col-12"
            />
            <q-radio
                val="901-2000"
                v-model="priceRange"
                label="$901-$2000"
                class="col-12"
            />
        </div>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path"/>
    </q-page-container>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" text-color="white"/>
    </q-page-scroller>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import filterProducts from '../utils/filterProducts'
import axios from '../axios-auth'
import toLower from '../utils/toLowerString'
export default {
  data () {
    return {
      left: false,
      categories: [],
      priceRange: '1-2000'
    }
  },
  watch: {
    priceRange (val) {
      this.setPriceRangeGlobal(filterProducts(val))
    }
  },
  computed: {
    ...mapState('myStore', ['loggedIn'])
  },
  methods: {
    ...mapActions('myStore', ['setPriceRangeGlobal']),
    showCategory (categoryName) {
      const propName = toLower(categoryName)
      this.$router.push(`/category/${propName}`)
    },
    toUpper (str) {
      if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    ...mapActions('myStore', ['loadData', 'userLogout']),
    logout () {
      localStorage.clear()
      this.userLogout({ user: {}, loggedIn: false })
      this.$router.push('/login')
    },
    showSignup () {
      this.$router.push('/signup')
    },
    showLogin () {
      this.$router.push('/login')
    }
  },
  filterProducts () {
    console.log(this.options.value)
  },
  created () {
    axios.get('/products/categories')
      .then(res => {
        // eslint-disable-next-line prefer-const
        for (let myData in res.data) {
          this.categories.push(res.data[myData])
        }
      })
      .catch(error => console.log(error))

    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
.avatar {
    background-color: $accent;
    color: #fff
}
</style>
