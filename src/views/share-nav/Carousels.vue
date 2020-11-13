<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>


<script>    

  export default {
    name: 'Carousels',
    data () {
      return {
        items: [
          {
            src: 'https://mirafra.com/wp-content/uploads/2016/10/2214585-google-maps-wallpaper.jpg'
          },
          {
            src: 'https://picsum.photos/1366/474?'
          },
          {
            src: 'https://www.designedbyross.com/wp-content/uploads/2019/03/new-google-maps-cycle-routes.jpg',
          },
          {
            src: 'https://picsum.photos/id/1026/1366/474',
          },
          {
            src: 'https://images.hgmsites.net/hug/google-maps-traffic--new-york-area_100227374_h.jpg'
          },
        ],
      }
    },
  }
</script>