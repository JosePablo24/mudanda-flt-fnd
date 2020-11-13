<template>
    <div>
        <header>
            <Navbar />
        </header>
        <br><br>
        <body>
             <v-card
                class="mx-auto"
                max-width="85%"
                tile
            >
                <v-img
                height="100%"
                src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                >
                <v-row
                    align="end"
                    class="fill-height"
                >
                    <v-col
                    align-self="start"
                    class="pa-0"
                    cols="12"
                    >
                    <v-avatar
                        class="profile"
                        color="grey"
                        size="164"
                        tile
                    >
                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                    </v-avatar>
                    </v-col>
                    <v-col class="py-0">
                    <v-list-item
                        color="rgba(0, 0, 0, .4)"
                        dark
                    >
                        <v-list-item-content>
                        <v-list-item-title class="title">
                            Marcianitos Verdes  
                        </v-list-item-title>
                        <v-list-item-subtitle>5a sur poniente #530</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-col>
                </v-row>
                </v-img>
                <v-divider></v-divider>
                <v-card-body>                                                       
                    <div>
                        <v-card class="mx-auto" max-width="100%" min-height="500">
                            <div class="ma-2 text--secondary display-1">Members</div>
                            <v-card
                                class="ma-2"
                                max-width="35%"
                                outlined
                            >
                                <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">
                                    OVERLINE
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
                                >
                                    Button
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>                        
                    </div>                    
                </v-card-body>
            </v-card>
            <br><br>
        </body>
    </div>
  
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
export default {
    name: 'Group_list_workers',
    components:{
        Navbar
    }
}
</script>

<style>

</style>