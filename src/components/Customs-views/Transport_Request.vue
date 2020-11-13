<template>
    <div>
        <header>
            <Navbar/>
        </header>

        <body>
            <v-row>
                <v-col>
                    <Maps />
                </v-col>
                <v-col>
                    <v-card>
                        ostias
                    </v-card>
                </v-col>
            </v-row>
        </body>
    </div>
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
import Maps from '../../views/share-nav/Maps'
export default {
    name: 'Transport_Request',
    components:{
        Navbar,
        Maps
    }

}
</script>

<style>

</style>