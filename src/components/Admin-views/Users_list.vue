<template>
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <div>
               
               <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                sort-by="Name"
                class="elevation-1"                
                
            >
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>User's</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-toolbar>
                </template>

                <template v-slot:[`item.Type_user`]="{ item }" >
                    <v-chip
                        :color="getcoloruser(item.Type_user)"
                        dark
                    >
                        {{ item.Type_user }}
                    </v-chip>
                </template>

                <template v-slot:[`item.Status_User`]="{ item }" >
                    <v-chip
                        :color="getColor(item.Status_User)"
                        dark
                    >
                        {{ item.Status_User }}
                    </v-chip>
                </template>

                <template v-slot:[`item.actions`]="{ item }" >
                    <v-btn
                        text
                        color="deep-purple accent-4"
                        class="mr-2"
                        @click="view_client(item.User_id)"
                        :disabled ="get_user(item.id)"
                    >
                        Ver mas
                    </v-btn>                    
                </template>                
            </v-data-table>

            </div>
        </body>  
    </div>
</template>

<script>
import Navbar from '@/views/share-nav/Navbar'
import { API } from '@/services/axios.js'
import firebase from 'firebase'
  export default {
    name: 'Users_list',
    components: {
        Navbar,
    },
    data () {
      return {
        search: '',
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'Name',
            }, 
            { text: 'Last Name', value: 'Last_Name' },
            { text: 'Second Name', value: 'Mother_Last_Name' },
            { text: 'Phone', value: 'Phone' },
            { text: 'State ', value: 'State' },
            { text: 'Town', value: 'Town' },
            { text: 'Type User', value: 'Type_user' },
            { text: 'Status', value: 'Status_User' },
            { text: '', value: 'actions', sortable: false },
        ],
        desserts: [],
        element: [],
        enabled: false,
        dime : '',
      }
    },

    mounted: async function(){        
        
        this.currentuser = firebase.auth().currentUser;      
        await API.get('client_user/'+ this.currentuser.uid).then(response =>{            
            this.element = response.data[0]
            console.log(this.element);
        }),

        await this.getUers();
            
    },          

    methods: {
        getUers: async function(){
            await API.get('client_user/')
            .then(response => {
                console.log(response);
                this.desserts = response.data
            }).catch(error =>{
                console.error(error);
            });
        },
      view_client(item){
           this.$router.push({name: 'Client_profile', params: { id: item}}).catch(error => {
            console.info(error.message)
            })
      },
      getColor (Status_User) {
        if (Status_User == 'Inactive') return 'red'
        else if (Status_User == 'Block') return 'grey'
        else return 'green'
      },
      getcoloruser(Type_user){
        if (Type_user == 'Administrador') return 'red'
        else if (Type_user == 'Trabajador') return 'orange lighten-1'
        else if (Type_user == 'Cliente') return 'green accent-2'
        else return 'blue-grey lighten-2'

      },
      get_user(id){        
        if( id != this.element.id){
            return false
        }else{
            return true
        }        
      }
    },
  }
</script>