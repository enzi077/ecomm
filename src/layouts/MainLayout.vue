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
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
        <q-list bordered>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar color="teal" text-color="white" icon="bluetooth" />
                </q-item-section>

                <q-item-section>Brand name</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar color="teal" text-color="white" icon="bluetooth" />
                </q-item-section>

                <q-item-section>Brand name</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section avatar>
                <q-avatar color="teal" text-color="white" icon="bluetooth" />
                </q-item-section>

                <q-item-section>Brand name</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
