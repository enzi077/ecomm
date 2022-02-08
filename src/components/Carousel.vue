<template>
    <div class="q-pa-md">
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
</template>

<script>
export default {
  data () {
    return {
      slide: 'style'
    }
  }
}
</script>
