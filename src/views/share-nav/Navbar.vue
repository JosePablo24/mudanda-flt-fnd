<template>
  <div>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#43a047"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-5"
          scroll-threshold="500"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

        
                   
            <!-- <v-img
            lazy-src = '../../img/icons-flt-mdz/favicon.png'
            max-height="60"
            max-width="60"        
            src= '../../img/icons-flt-mdz/favicon.png'
            ></v-img>         -->

            <v-toolbar-title>
              <h2>Flt-Mdz</h2>
            </v-toolbar-title>

          <v-spacer></v-spacer>

            <v-btn
            class="ma-2"
            text
            color="white"
            href="log_in"
              v-if="currentuser == null"
            >
            Log in
            </v-btn>

          <v-btn
            class="ma-2"
            outlined
            color="white"
            href="/sign_up"
            v-if="currentuser == null"
            >
            Sign_Up
          </v-btn>

          <div class="ma-1" v-if="currentuser != null">
            <v-menu bottom transition="slide-y-transition" offset-y >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="blue-dark" fab  v-bind="attrs" v-on="on" @click="charge()">
                  <v-badge>
                    <v-icon>mdi-bell</v-icon>
                  </v-badge>
                </v-btn>  
              </template>
              
              <v-list two-line  >
                <div class="ma-3">Today</div>
                <template v-for="(item, index) in items" >
                  <!-- <v-subheader
                    v-if="item.Subject"
                    :key="item.Subject"
                  >
                    Today
                  </v-subheader> -->
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
                </template>
                <div class="text-center">
                  <v-list-item class="text-center" @click="ver_todo()">
                     Ver todo ...                    
                  </v-list-item>
                </div>   
              </v-list>
            </v-menu>  
          </div>                    
                
          <div class="ma-1" v-if="currentuser != null">
            <v-menu bottom offset-y  >
              <template v-slot:activator="{ on, attrs }">
                <v-btn  fab  v-bind="attrs" v-on="on">
                  <v-avatar>
                    <img :src=Picture alt="John" >
                  </v-avatar>
                </v-btn>  
              </template>
              <v-list>
              
              <v-list-item  two-line>
                <v-list-item-content>
                  <v-list-item-title class="title" v-if=" Name != ''">
                    {{Name}}
                  </v-list-item-title>
                  
                  
                  <v-list-item-subtitle>{{Email}}</v-list-item-subtitle>
                </v-list-item-content> 
              </v-list-item>
              
              <v-divider></v-divider>

              <v-list-item-group> 
                <v-list-item link @click="change()">
                    <v-icon left>                
                        mdi-account
                      </v-icon>
                      Profile              
                </v-list-item>

                <v-list-item link v-if="type_user == 'Administrador'" href="/admin_activities">              
                    <v-icon left>                
                        mdi-account-tie
                      </v-icon>
                      Admin Activities             
                </v-list-item>

                <v-list-item link v-if="type_user == 'Trabajador'" href="/worker_profile">
                    <v-icon left>                
                        mdi-account-network
                      </v-icon>
                      Worker Profile              
                </v-list-item>                
                
                <v-list-item @click="logout">
                    <v-icon left>                
                        mdi-logout
                      </v-icon>
                      Log out                                 
                </v-list-item>
              </v-list-item-group>
                
            </v-list>
            </v-menu>  
          </div>          
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-5"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 127px;"></v-container>
        </v-sheet>
      </v-card>
      
      <v-card class="ma-2 " v-if="currentuser != null">
            <v-bottom-navigation
              :value="value"
              color="teal"
              grow
            >
              <v-btn v-if="type_user == 'Administrador'" href="/users_list">
                <span> User's </span>
                <v-icon> mdi-account-settings-outline </v-icon>
              </v-btn>

              <v-btn v-if="type_user == 'Administrador'" href="/request_work_list">
                <span> Work Request</span>
                <v-icon> mdi-account-cog</v-icon>
              </v-btn>

              <v-btn v-if="type_user == 'Trabajador'" >
                <span>Works</span>
                <v-icon> mdi-account-multiple-plus </v-icon>
              </v-btn>

              <v-btn href="/freight_list" v-if="type_user == 'Cliente'" >
                <span>Freight's List Group's</span>

                <v-icon>mdi-account-group</v-icon>
              </v-btn>

              <v-btn href="/home">
                <span>Home</span>

                <v-icon>mdi-home</v-icon>
              </v-btn>

              <v-btn href="/nearby_places" v-if="type_user == 'Cliente'" >
                <span>Nearby Places</span>

                <v-icon>mdi-map-marker</v-icon>
              </v-btn>

              <v-btn v-if="type_user == 'Trabajador'" >
                <span> Task Clompleted</span>
                <v-icon></v-icon>
              </v-btn>

              <v-btn v-if="type_user == 'Administrador'" href="/request_group_list">
                <span> Group Work Request</span>
                <v-icon> mdi-account-group</v-icon>
              </v-btn>
              
              <v-btn  v-if="type_user == 'Administrador'">
                <span> Chat</span>
                <v-icon> mdi-chat-processing-outline</v-icon>
              </v-btn>

            </v-bottom-navigation>
            
          </v-card>
  </div>
</template>


<script>
import Vue from 'vue';
import firebase from 'firebase'
import { API } from '@/services/axios.js'

export default {
  name: 'Navbar',
  components: {        
  },
  data: () => ({
    currentuser: '',
    Email : '',
    Name : '',
    Picture : '',
    type_user: '',
    element: [],
    id: '',
    items: []
  }),  
  methods: {            
      logout () {        
        firebase.auth().signOut().then(() => (
          // Sign-out successful.
          this.$router.push({name: 'LComponent'}).catch(error => {
            console.info(error.message)
            })
        )).catch(function(error) {
          // An error happened.
        });
      },
      change(){
        this.$router.push('profile/'+ this.currentuser.uid)
      },
      check(id){
        alert('este es →→ ' + id)
      },
      ver_todo(){
        this.$router.push({name : 'Notifications', params:{ id: this.id }}).catch(error =>{
          console.error(error);
        })
      },
      charge(){
        API.get('notification/'+ this.id ).then(response =>{
          console.log(response);
          this.items = response.data
        }).catch(error=>{
          console.error(error);
        })

      }
  },
  mounted(){
      this.currentuser = firebase.auth().currentUser;      
      this.Email = this.currentuser.email
      this.Name = this.currentuser.displayName
      this.Picture = this.currentuser.photoURL
      API.get('client_user/'+ this.currentuser.uid).then(response =>{
        this.element = response.data
        this.type_user = this.element[0].Type_user
        this.id = this.element[0].id
        //console.log(this.element[0], this.id);
        console.log(response);
      }).catch(error =>{
        console.error(error);
      })
            
  }
}
</script>