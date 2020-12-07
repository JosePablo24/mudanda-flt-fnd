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
                    <img        :src=picture alt="John">
                </v-avatar>
                <div> #{{element.No_user}}</div>
            </div>
            
            <br>
            <v-divider ></v-divider>
            <br>
            
            <v-row>
                <v-col>
                    <div>Name</div>
                    <p class=" text--primary">
                        {{element.Name}} {{element.Last_Name}} {{element.Mother_Last_Name}}
                    </p>
                </v-col>

                <v-col>
                    <div>Tipe User</div>
                    <p class=" text--primary">
                        {{element.Type_user}}
                    </p>
                </v-col>
            </v-row>            

            <div>E-mail</div>
            <p class=" text--primary">
                {{e_mail}}
            </p>

            <div>Birthday</div>
            <p class="text--primary" v-if="element.Day != null">
                {{element.Day}} / {{element.Month}} / {{element.Year}}
            </p>
            <v-row>
                <v-col>
                    <div>State</div>
                    <p class="text--primary">
                        {{element.State}}
                    </p>
                </v-col>
                <v-col>
                    <div>Town</div>
                    <p class="text--primary">
                        {{element.Town}}
                    </p>
                </v-col>
                <v-col>
                    <div>Addres</div>
                    <p class="text--primary">
                        {{element.Address}}
                    </p>
                </v-col>
                <v-col>
                    <div>Cp</div>
                    <p class="text--primary">
                        {{element.Cp}}
                    </p>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col>
                    <div>Cellphone</div>
                    <p class="text--primary">
                        {{element.Phone}}
                    </p>        
                </v-col>

                <v-col>
                    <div>Gender</div>
                    <p class="text--primary">
                        {{element.Gender}}
                    </p>        
                </v-col>
            </v-row>                    

            </v-card-text>
            <v-card-actions>
            <v-btn
                text
                color="deep-purple accent-4"
                @click="edith_prof(element.id)" 
            >
                Edit Profile
            </v-btn>

            <v-dialog
                v-model="dialog"
                persistent
                max-width="350"
                v-if="element.Type_user == 'Cliente'"
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
                        @click="set_work()"
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
import { API } from '@/services/axios.js'
import firebase from 'firebase'

export default {
    name: 'Profile',
    components: {    
        Navbar,    
    },
    data () {
      return {
        dialog: false,
        enabled: false,
        currentuser: '',        
        e_mail:'',
        picture: '',        
        element : []
      }
    },
    mounted(){
        this.currentuser = firebase.auth().currentUser;  
        this.e_mail = this.currentuser.email
        this.picture = this.currentuser.photoURL
        API.get('client_user/'+ this.currentuser.uid).then(response =>{            
            this.element = response.data[0]
            console.log(this.element);
        })
    },
    methods: {
        edith_prof(id){
            this.$router.push({name: 'Edit_Profile', params: { id: this.currentuser.uid}}).catch(error => {
            console.info(error.message)
            })
        },
        set_work(){
            this.$router.push({name: 'Worker_Request', params: { id: this.currentuser.uid}}).catch(error => {
            console.info(error.message)
            })
        }
    }
}
</script>