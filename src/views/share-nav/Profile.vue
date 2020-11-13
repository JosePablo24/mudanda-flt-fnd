v<template>
  <div>
    <header>
      <Navbar />
    </header>
    <br><br>
    <body >
        <v-card class="mx-auto" max-width="600" >   
            <v-card-text>
            <div class="text-center">
                <v-avatar   size="120">
                    <img        src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
                <div> #4309234</div>
            </div>
            
            <br>
            <v-divider ></v-divider>
            <br>
            
            <v-row>
                <v-col>
                    <div>Name</div>
                    <p class=" text--primary">
                        José Pablo Sandoval de la Cruz
                    </p>
                </v-col>

                <v-col>
                    <div>Tipe User</div>
                    <p class=" text--primary">
                        Custom
                    </p>
                </v-col>
            </v-row>            

            <div>E-mail</div>
            <p class=" text--primary">
                joxesandoval.24@gmail.com
            </p>

            <div>Birthday</div>
            <p class="text--primary">
                24/08/2020
            </p>
            <v-row>
                <v-col>
                    <div>State</div>
                    <p class="text--primary">
                        Chiapas
                    </p>
                </v-col>
                <v-col>
                    <div>Town</div>
                    <p class="text--primary">
                        Tuxtla Gutierrez
                    </p>
                </v-col>
                <v-col>
                    <div>Addres</div>
                    <p class="text--primary">
                        9a sur poniente
                    </p>
                </v-col>
                <v-col>
                    <div>Cp</div>
                    <p class="text--primary">
                        630
                    </p>
                </v-col>
            </v-row>
            
            <div>Cellphone</div>
            <p class="text--primary">
                9612594528
            </p>                

            </v-card-text>
            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
                href="/edit_profile"
            >
                Edit Profile
            </v-btn>

            <v-dialog
                v-model="dialog"
                persistent
                max-width="350"
                >
                <template v-slot:activator="{ on, attrs }">                    
                    <v-btn
                    color="deep-purple accent-4"
                    dark
                    text
                    v-bind="attrs"
                    v-on="on"
                    >
                    Set as Worker
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">
                    Set your user as worker?
                    </v-card-title>
                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        <v-checkbox
                            v-model="enabled"                            
                            label="I Accept the terms and conditions to work as "
                        ></v-checkbox>                        
                    </v-card-text>
                    <v-card-actions>                    
                    <v-spacer></v-spacer>                    
                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Disagree
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        href="/worker_request"
                        :disabled = "!enabled"
                    >
                        Agree
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>            
            </v-card-actions>
        </v-card>        
    </body>
    
    <br><br>    
    
    <footer>        
    </footer>
  </div>
</template>



<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../../views/share-nav/Navbar'

export default {
    name: 'Profile',
    components: {    
        Navbar,    
    },
    data () {
      return {
        dialog: false,
        enabled: false,
      }
    },
}
</script>