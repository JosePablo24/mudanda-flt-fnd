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
            <v-menu bottom offset-y >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="blue-dark" fab  v-bind="attrs" v-on="on">
                  <v-badge>
                    <v-icon>mdi-bell</v-icon>
                  </v-badge>
                </v-btn>  
              </template>
              <v-list>                            

              <v-list-item-group>

              </v-list-item-group>
                
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
                  <v-list-item-title class="title">
                    {{Name}}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{Email}}</v-list-item-subtitle>
                </v-list-item-content> 
              </v-list-item>
              
              <v-divider></v-divider>

              <v-list-item-group> 
                <v-list-item link href="/profile">              
                    <v-icon left>                
                        mdi-account
                      </v-icon>
                      Profile              
                </v-list-item>

                <v-list-item link href="/admin_activities">              
                    <v-icon left>                
                        mdi-account-tie
                      </v-icon>
                      Admin Activities             
                </v-list-item>

                <v-list-item link href="/worker_profile">
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
              <v-btn href="/freight_list">
                <span>Freight's List Group's</span>

                <v-icon>mdi-account-group</v-icon>
              </v-btn>

              <v-btn href="/home">
                <span>Home</span>

                <v-icon>mdi-home</v-icon>
              </v-btn>

              <v-btn href="/nearby_places">
                <span>Nearby Places</span>

                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
            </v-bottom-navigation>
            
          </v-card>
  </div>
</template>


<script>
import Vue from 'vue';
import firebase from 'firebase'

export default {
  name: 'Navbar',
  components: {        
  },
  data: () => ({
    currentuser: '',
    Email : '',
    Name : '',
    Picture : ''

  }),  
  methods: {            
      logout () {        
        firebase.auth().signOut().then(() => (
          // Sign-out successful.
          this.$router.replace('log_in')
        )).catch(function(error) {
          // An error happened.
        });
    }
  },
  mounted(){
      this.currentuser = firebase.auth().currentUser;
      this.Email = this.currentuser.email
      this.Name = this.currentuser.displayName
      this.Picture = this.currentuser.photoURL
  }
}
</script>