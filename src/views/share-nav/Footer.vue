<template>
  <v-footer
    dark
    padless
  >        
    <v-card
    width="100%"
      flat
      tile
      class="blue-grey lighten-1 white--text text-center"
    >
        <v-container >
        <v-row no-gutters>
          <v-col order="first">
            
            <v-row> About us</v-row>              
            <v-row> Team </v-row>              
            <v-row> Services</v-row>              
          </v-col>
                          
          <v-col>              
            <v-row> Blog </v-row>              
            <v-row> Contact us </v-row>              
            <v-row> Term and Conditions</v-row>
          </v-col> 

          <v-col order="last">            
          </v-col>                                        

        </v-row>
      </v-container>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          v-bind:key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>      

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Flt-Mdz</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>