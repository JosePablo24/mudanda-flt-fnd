<template>
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <template>
                <v-container fluid>
                    <v-data-iterator
                    :items="items"
                    :items-per-page.sync="itemsPerPage"
                    :page="page"
                    :search="search"
                    :sort-by="sortBy.toLowerCase()"
                    :sort-desc="sortDesc"
                    hide-default-footer
                    >
                    <template v-slot:header>
                        <v-toolbar
                        dark
                        color="blue darken-3"
                        class="mb-1"
                        >
                        <v-text-field
                            v-model="search"
                            clearable
                            flat
                            solo-inverted
                            hide-details
                            prepend-inner-icon="mdi-magnify"
                            label="Search"
                        ></v-text-field>
                        <template v-if="$vuetify.breakpoint.mdAndUp">
                            <v-spacer></v-spacer>
                            <v-select
                            v-model="sortBy"
                            flat
                            solo-inverted
                            hide-details
                            :items="keys"
                            prepend-inner-icon="mdi-magnify"
                            label="Sort by"
                            ></v-select>
                            <v-spacer></v-spacer>
                            <v-btn-toggle
                            v-model="sortDesc"
                            mandatory
                            >
                            <v-btn
                                large
                                depressed
                                color="blue"
                                :value="false"
                            >
                                <v-icon>mdi-arrow-up</v-icon>
                            </v-btn>
                            <v-btn
                                large
                                depressed
                                color="blue"
                                :value="true"
                            >
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                            </v-btn-toggle>
                        </template>
                        </v-toolbar>
                    </template>

                    <template v-slot:default="props">
                        <v-row>
                        <v-col
                            v-for="item in props.items"
                            :key="item.Name"
                            cols="12"
                            sm="7"
                            md="5"
                            lg="4"                            
                        >
                            <v-card
                                class="mx-auto elevation-20"
                                color="purple"
                                dark
                                style="max-width: 400px;"
                            >
                                <v-row justify="space-between">
                                <v-col cols="8">
                                    <v-card-title>
                                    <div>
                                        <div class="headline">
                                        {{item.Name}} {{item.Last_Name}} {{item.Mother_Last_Name}}
                                        </div>
                                        <div> {{item.State}}, {{item.Town}} </div>
                                        
                                    </div>
                                    </v-card-title>
                                </v-col>
                                <v-img
                                    class="shrink ma-2"
                                    contain
                                    height="125px"
                                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                                    style="flex-basis: 125px"
                                ></v-img>
                                </v-row>
                                <v-divider dark></v-divider>
                                <v-card-actions class="pa-4">
                                <v-btn
                                    text
                                    @click="generateRequest()"
                                >
                                    Solicitar Servicio
                                </v-btn>
                                <v-spacer></v-spacer>
                                <span class="grey--text text--lighten-2 caption mr-2">
                                    ({{ rating }})
                                </span>
                                <v-rating
                                    v-model="rating"
                                    background-color="white"
                                    color="yellow accent-4"
                                    dense
                                    readonly
                                    half-increments
                                    hover
                                    size="18"
                                ></v-rating>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                        </v-row>
                    </template>

                    <template v-slot:footer>
                        <v-row
                        class="mt-2 ma-1"
                        align="center"
                        justify="center"
                        >
                        <span class="grey--text">Items per page</span>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                text
                                color="primary"
                                class="ml-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                {{ itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item
                                v-for="(number, index) in itemsPerPageArray"
                                :key="index"
                                @click="updateItemsPerPage(number)"
                            >
                                <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <span
                            class="mr-4
                            grey--text"
                        >
                            Page {{ page }} of {{ numberOfPages }}
                        </span>
                        <v-btn
                            fab
                            dark
                            color="blue darken-3"
                            class="mr-1"
                            @click="formerPage"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            fab
                            dark
                            color="blue darken-3"
                            class="ml-1"
                            @click="nextPage"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                        </v-row>
                    </template>
                    </v-data-iterator>
                </v-container>
                </template>
        </body>
    </div>
  
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
import { API } from '@/services/axios.js'
export default {
    name:'Freight_list',
    components:{
        Navbar
    },
    data: () => ({ 
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        keys: [
          'Name',
          'State',
          'Town',
          'Rate'
        ],
        items: [],
        rating: 4.3,
    }),
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    mounted(){
        // API.get('client_user/'+ this.currentuser.uid).then(response =>{
        //     console.log(response);
        // }).catch(error => {
        //     console.error(error);
        // }),

        API.get('worker_profile/').then(response => {
            this.items = response.data            
        }).catch(error => {
            console.error(error);
            console.log('hay un error');
        })

    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      generateRequest(){
        const TokenGenerator = require('uuid-token-generator');

        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);        
        this.$router.push({name: 'Transport_Request', params: { id: tokgen2.generate()}}).catch(error => {
            console.info(error.message)
            })
      }
    },
}
</script>

<style>

</style>