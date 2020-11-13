<template>
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <div class="ma-2 display-1 ">   
                Freight List
                <v-divider ></v-divider>
            </div>
            
            <v-flex v-for="item in value_test"
                    :key="item"    >
                <v-card
                    class="ma-2"
                    max-width="30%"
                    outlined
                >
                    <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                        {{item}}
                        </div>
                        <v-list-item-title class="headline mb-1">
                        Headline 5
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    ></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                    <v-btn
                        outlined
                        rounded
                        text
                        href="/workers_group"
                    >
                        Button
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex >                            

        </body>
    </div>
  
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
export default {
    name:'Freight_list',
    components:{
        Navbar
    },
    data: () => ({ 
        value_test: ['marcus','juan', 'pedro']
        
    }),
}
</script>

<style>

</style>