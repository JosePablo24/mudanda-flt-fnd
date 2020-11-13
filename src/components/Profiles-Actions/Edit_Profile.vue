v<template>
  <div>
    <header>
      <Navbar />
    </header>
    <br><br>
    <body >
        <v-card class="mx-auto" max-width="600" >
            <v-card-text>
            <div class="text-center">
                <v-avatar   size="120">
                    <img        src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
            </div>
            
            <br>
            <v-divider ></v-divider>
            <br>
            
            <v-text-field ref="name" label="Name" prepend-icon="mdi-account-edit" ></v-text-field>

            <v-text-field ref="last_name" label="Last Name" prepend-icon="mdi-account-edit"></v-text-field>

            <v-text-field ref="second_name" label="Second Name" prepend-icon="mdi-account-edit"></v-text-field>

            <v-menu  ref="data_menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px" >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly  v-bind="attrs" v-on="on" ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false" >Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)" > OK </v-btn>
                </v-date-picker>
            </v-menu>
            
            <v-row>
                <v-col> 
                    <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="State"
                    persistent-hint
                    return-object
                    single-line
                    ></v-select>
                </v-col>
                <v-col> 
                    <v-select
                    v-model="select"
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Town"
                    persistent-hint
                    return-object
                    single-line
                    ></v-select>
                </v-col>
            </v-row>          

            <v-text-field ref="phone" label="Phone number" prepend-icon="mdi-phone"></v-text-field>      

            <v-text-field ref="address" label="address" prepend-icon="mdi-map-marker"></v-text-field>

            <v-text-field ref="postal-code" label="Cp" prepend-icon="mdi-pound"></v-text-field>      

            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="red"
                    href="/profile"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                >
                    Update
                </v-btn>
            </v-card-actions>
        </v-card>        
    </body>
    
    <br><br>    
    
    <footer>        
    </footer>
  </div>
</template>



<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '../../views/share-nav/Navbar'

export default {
  name: 'Edit_Profile',
  components: {    
    Navbar,    
  },
  data () {
      return {
        select: { state: 'State', abbr: 'St' },
        items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
        
      }
    },
}
</script>