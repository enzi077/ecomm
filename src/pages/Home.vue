<template>
  <q-page flex>
        <div class="row q-pa-xl">
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                arrows
                height="300px"
                class="bg-primary text-white shadow-1 rounded-borders col"
            >
                    <q-carousel-slide name="style" class="column no-wrap flex-center">
                    <div class="q-mt-md text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, expedita.
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-wrap flex-center">
                    <div class="q-mt-md text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, at.
                    </div>
                    </q-carousel-slide>
            </q-carousel>
        </div>

    <div class="row q-pa-xl q-gutter-lg justify-evenly">
        <q-card
          v-for="n in 13"
          :key="n"
          v-ripple
          class="my-card cursor-pointer q-hoverable col-2"
          @click="basic=true"
        >
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
                </div>
            </q-img>

            <q-card-actions>
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round icon="shopping_cart" />
            </q-card-actions>
        </q-card>
    </div>
    <q-dialog v-model="basic">
      <q-card>
        <q-card-section>
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"/>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, sequi.</p>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      slide: 'style',
      basic: false
    }
  }
}
</script>
