<template>
  <div>
      <header>

    </header>    

    <body>
        <div class="mx-auto ma-2"> 
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="85%"
            >
                <v-toolbar
                    color="#F2A539"
                    light
                    extended
                    height="200"
                    >
                    
                    <template v-slot:extension max-width="500">
                        <!-- <v-btn
                        fab
                        color="cyan accent-2"
                        bottom
                        left
                        absolute
                        @click="dialog = !dialog"
                        >
                        <v-icon>mdi-plus</v-icon>
                        </v-btn> -->
                        <v-card
                            class="mx-auto"                            
                            absolute
                            hover ="true"
                        >
                            <v-card-text>                            
                                <h1 class="display-1 text--primary text-center ma-2"> Welcome </h1>

                                <div class="text-center">
                                    <img src="https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120">
                                </div>                                
                                <br>
                            <p display="false">We're excited to have you get started. First, you need to confirm your account. </p> <p> Press the button below to send you a email verificator.</p>
                            <div class="text--primary text-center">
                                <v-btn
                                    color="#F2A539"
                                    dark
                                    large
                                    @click="send_confirm()"
                                >
                                    Click to send
                                </v-btn>
                            </div>
                            <div>
                                Administrador,<br>
                                Ftl-Mdz Team
                            </div>
                            
                            </v-card-text>
                           
                        </v-card>
                    </template>
                    </v-toolbar>

                
            </v-card>           
        </div>
    </body>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Confirm',
    data: () => ({
        currentuser: '',
    }),
    mounted(){        
    },
    methods: {   
        send_confirm(){
            var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
            console.log('Send verification');            
        }).catch(function(error) {
            console.error(error);
        });
        }
    }
}
</script>

<style>

</style>