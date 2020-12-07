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
                        <v-toolbar-title>Request Group Work</v-toolbar-title>
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
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="view_client(item.id)"
                    >
                        mdi-pencil
                    </v-icon>               
                </template>                
            </v-data-table>

            </div>
        </body>  
    </div>
</template>

<script>
import Navbar from '@/views/share-nav/Navbar'
import { API } from '@/services/axios.js'
  export default {
    name: 'Group_work_request',
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
          { text: '', value: 'actions', sortable: false },
        ],
        desserts: [          
        ],
      }
    },
    mounted(){
        API.get('worker_request/')
        .then(response => {
            console.log(response);
            this.desserts = response.data
        }).catch(error =>{
            console.error(error);
        });
    },
    methods: {
      view_client(item){
          alert('es →→→'  + item)
      }
      
    },
  }
</script>