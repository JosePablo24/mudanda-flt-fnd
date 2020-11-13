<template>
  <div>
    <header>
      <Navbar />
    </header>
    
    <body>
      <v-separator></v-separator>
      <Carousels />            
      <v-card 
        class="ma-2"             
      >
        <div class="texto-who-1 ma-2" >
          <div class="display-1 text-primary text-center">
            Who are We?
          </div>
          <v-divider            
          ></v-divider>
          <div class="display-0 text-secondar text-justify mx-auto" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div class="text0-who-2">
          <v-parallax
              height="350"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              class="fill-height repeating-gradient"
          ></v-parallax>
        </div> 
      </v-card>
              
      <br><br>

      <v-card 
        class="ma-2"        
      >
        <div class="texto-what-1 ma-2" >
          <div class="display-1 text-primary text-center">
            Who are We?
          </div>
          <v-divider            
          ></v-divider>
          <div class="display-0 text-secondar text-justify mx-auto" >
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div class="text0-what-2">
          <v-parallax
              height="350"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          ></v-parallax>
        </div> 
      </v-card>

      <br><br>
      <div >
        <v-parallax
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              class="text-center"
              cols="12"
            >
              <h1 class="display-1 font-weight-thin mb-4">
                Flt-Mdz
              </h1> 
              <h4 class="subheading">
                Wish you a great travel and a great destiny for your stuff and your new life 
              </h4>
            </v-col>
          </v-row>
        </v-parallax>      
      </div>

    </body> 
    <br><br>
    <footer>  
      <Footer  /> 
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../views/share-nav/Navbar'
import Footer from '../views/share-nav/Footer'
import Carousels from './share-nav/Carousels'

export default {
  name: 'Home',
  components: {    
    Navbar,
    Footer,
    Carousels
  },
  data: () => ({ value: 1 }),
}
</script>
<style>
.texto-who-1{
  float:left;
  width: 30%;
}

.texto-who-2{
  float:left;
  width: 60%;
}

.texto-what-1{
  float:left;
  width: 45%;
}

.texto-what-2{
  float:left;
  width: 45;
}

</style>