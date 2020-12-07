<template>
    <div>
        <header>
            <Navbar />
        </header>
        <body>
             <v-card 
                class="ma-2" 
                height="500"
            >
                <div class="texto-who-1 ma-2" >                
                    <v-responsive
                        class="overflow-y-auto"
                        max-height="400"
                    >
                        <v-responsive
                        height="200vh"
                        class="text-center pa-2"
                        >
                        <v-responsive min-height="50vh"></v-responsive>
                        <template v-for="(item, index) in items" >           
                            <v-lazy
                                v-model="isActive"
                                :options="{
                                threshold: .5
                                }"
                                min-height="200"
                                transition="fade-transition"
                                :key="index"

                            >
                                                 
                                <v-divider                    
                                    :key="index"
                                    inset                    
                                ></v-divider>
                                <v-list-item                    
                                    :key="item.Subject"
                                    @click="check(item.id)"
                                >
                                    <v-list-item-avatar size="40">
                                    <v-icon size="40">mdi-account-circle-outline</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                    <v-list-item-title > {{item.Subject}} &mdash; <span class="font-weight-bold"> {{item.From}} </span> </v-list-item-title>
                                    <v-list-item-subtitle v-html="item.Message" > </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                
                            </v-lazy>
                        </template>
                        </v-responsive>
                    </v-responsive>       
                </div>
                <div class="text0-who-2">
                <v-parallax
                    height="350"
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    class="fill-height repeating-gradient"
                ></v-parallax>
                </div> 
            </v-card>
        </body>
    </div>  
</template>

<script>
import firebase from 'firebase'
import { API } from '@/services/axios.js'
import Navbar from '../../views/share-nav/Navbar'

export default {
    name: 'Notifications',
    components: {
        Navbar
    },
    data: () => ({
        items: []
    }),
    mounted(){
        API.get('notification/'+ this.$route.params.id).then(response =>{
          console.log(response);
          this.items = response.data
        }).catch(error=>{
          console.error(error);
        })
    }
}
</script>

<style>

</style>