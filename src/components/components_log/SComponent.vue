v<template>
  <div>
    <header>
      <Navbar />
    </header>
    
    <body class="text-center">
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
                  mdi-account-circle-outline
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

                <v-text-field
                  v-model="password1"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules2.required, rules2.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="show2 = !show2"
                ></v-text-field>
                
                <v-btn
                class="ma-2"
                  depressed
                  color="primary"
                  block
                  @click="signup"
                >
                  Sign Up with Email
                </v-btn>                
              </v-card-text>
              
              <v-divider class="mt-12"> </v-divider>
              <v-card-text>
                <v-btn
                class="ma-2"
                  depressed
                  color="primary"
                  block
                  @click="facebook_signup"
                >
                <v-icon left>
                  mdi-facebook
                </v-icon>
                  Sigin Up with Facebook
                </v-btn>     
                <v-btn
                class="ma-2"
                  depressed
                  color="error"
                  block
                  @click="google_signup"
                >
                <v-icon left>
                  mdi-google
                </v-icon>
                  Sigin Up with Google
                </v-btn>     
                
                <v-btn
                class="ma-2"
                  depressed
                  color="info"
                  block
                  @click="twitter_signup"
                >
                <v-icon left>
                  mdi-twitter
                </v-icon>
                  Sigin Up with Twiter
                </v-btn>     
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    </body>
    
    <footer>        
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../../views/share-nav/Navbar'
import Footer from '../../views/share-nav/Footer'
import firebase from 'firebase'
import { API } from '@/services/axios.js'
export default {
  name: 'SComponent',
components: {    
    Navbar,    
  },
  data: () => ({                        
      show1: false,      
      show2: false,      
      email: '',
      password: '',
      password1: '',
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
      rules2: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },        
    }),

    computed: {
      form () {
        return {
          email: this.email,
          password : this.password,
          password1 : this.password1
        }
      },
    },    

    methods: {           
      signup () {
        if(this.password == this.password1){
          var user
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            (response) => (      
              console.log(response),
              user = response.user,              
              this.create_User(user),              

              user.sendEmailVerification(),
              this.$router.push({ name: 'Home' })
            )
          ).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }else{
          alert('no lo son')
        }
      },

      create_User(user){        
        var numero = ''
        var nu = 0
        for (let i = 0; i < 8; i++) {
          nu = Math.floor(Math.random() * 10);
          numero += nu
        }
        numero = parseInt(numero)
                
        API.post('client_user/',{
          User_id : user.uid,
          No_user : parseInt(numero),
          Type_user :'Cliente',
          }).then((response) => {            
            console.log(response);
            
            API.post('notification',{
              Client_user_id : response.data.id,
              Subject : 'Bienvenida',
              From : 'Administracion',
              Message : 'Muchas Gracias por escoger esta plataforma para que hagas tus traslados o trabajes como transportador de bienes personales, esperamos ser una plataforma que ayude a que tus objetivos sean mas faciles para tu uso',
            }).then((response1)=>{
              console.log(response1);
            }).catch(error1 =>{
              console.error(error1);
            })
          }).catch(error => {
            console.log(error.message);
          })
      },

      facebook_signup(){
        var provider = new firebase.auth.FacebookAuthProvider();
        var token
        var user

        firebase.auth().signInWithPopup(provider).then((result) => (
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user,
          this.create_User(user),
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

      },

      twitter_signup (){

      },

      google_signup (){
        var provider = new firebase.auth.GoogleAuthProvider();
        var token
        var user
        firebase.auth().signInWithPopup(provider).then((result) => (
          // This gives you a Google Access Token. You can use it to access the Google API.
          token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user,
          this.create_User(user),
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
      },
      
      
      
    },
    created: function () {      
  },
}
</script>