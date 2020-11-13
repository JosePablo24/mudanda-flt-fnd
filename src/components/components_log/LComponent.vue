v<template>
  <div>
    <header>
      <Navbar />
    </header>
    
    <body>
      <v-card class="text-center">
        
        <v-row justify="center">
          <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
          >
            <v-card ref="form">              
              <v-card-text>                  
                <div >
                <v-avatar
                  
                  size="170"
                >
                <v-icon size="170">
                  mdi-account-circle
                </v-icon>
                </v-avatar>
              </div>
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  label="E-mail"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules1.required, rules1.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
                
                <v-btn
                class="ma-2"
                  depressed
                  color="primary"
                  block
                  @click="Login"
                >
                  Log In
                </v-btn>                
              </v-card-text>
              <v-divider class="mt-12"> or </v-divider>
              <v-card-text>
                <v-btn
                class="ma-2"
                  depressed
                  color="primary"
                  block
                  @click="facebook_submit"
                >
                <v-icon left>
                  mdi-facebook
                </v-icon>
                  Log in with Faceboock
                </v-btn>     
                <v-btn
                class="ma-2"
                  depressed
                  color="error"
                  block
                  @click="google_submit"
                >
                <v-icon left>
                  mdi-google
                </v-icon>
                  Log in with Google
                </v-btn>     
                
                <v-btn
                class="ma-2"
                  depressed
                  color="info"
                  block
                  @click="submit"
                >
                <v-icon left>
                  mdi-twitter
                </v-icon>
                  Log in with Twiter
                </v-btn>     
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </body>
    
    <footer>  

    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars
import Navbar from '../../views/share-nav/Navbar'
import firebase from 'firebase'


export default {
  name: 'LComponent',
  components: {    
    Navbar    
  },
  data: () => ({                        
      show1: false,      
      email: '',
      password: '',      
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
      },
      rules1: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },                
    }),

    computed: {
      form () {
        return {
          email: this.email,
          password : this.password
        }
      },
    },    

    methods: {      
      
      Login () {        
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then( (user) =>  this.$router.push({ name: 'Home' }), (error) => console.error(error));
      },
      
      

      facebook_submit(){
        var provider = new firebase.auth.FacebookAuthProvider();
        var token
        var user 

        firebase.auth().signInWithPopup(provider).then((result) => (
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user,
          // ...
          console.log(user,'mas'),
          this.$router.push({ name: 'Home' })
        )).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
        

      },

      twitter_submit (){

      },
      
      google_submit (){
        var provider = new firebase.auth.GoogleAuthProvider();
        var token
        var user = ''
        firebase.auth().signInWithPopup(provider).then((result)  => (
          // This gives you a Google Access Token. You can use it to access the Google API.
          token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user,
          console.log(user,'mas'),
          this.$router.push({ name: 'Home' })
          // ...
        )).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
    }
}
</script>