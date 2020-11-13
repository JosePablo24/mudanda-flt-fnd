<template>
  <div>
      <header>

    </header>
    <body>
        <div class="mx-auto ma-2"> 
            <v-card
                class="mx-auto justify-center"
                max-width="40%"
            >                
                <v-card-subtitle class="pb-0">
                Number 10
                </v-card-subtitle>

                <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                    Share
                </v-btn>

                <v-btn
                    color="orange"
                    text
                >
                    Explore
                </v-btn>
                </v-card-actions>
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
        this.currentuser = firebase.auth().currentUser
    }
}
</script>

<style>

</style>