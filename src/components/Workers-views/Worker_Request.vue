v<template>
  <div>
    <header>
      <Navbar />
    </header>
    <br><br>
    <body >
        <v-card class="mx-auto" max-width="800" >
            
            <v-card-text>
            <div class="text-left">
                <p class="display-1 text--primary">
                    Form Worker Request
                </p>
            </div>
                        
            <v-divider ></v-divider>
            <br>
            <v-stepper
                v-model="e6"
                vertical
            >
            <!-- first ste -->
                <v-stepper-step
                :complete="e6 > 1"
                step="1"
                >
                Instructions
                <small>Direcctions that you need know to be a Worker</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                ></v-card>
                
                <v-btn class="ma-2">
                    Cancel
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="primary"
                    @click="e6 = 2"
                >              
                    Next
                    <v-icon right>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>                
                </v-stepper-content>
            
            <!-- second step -->
                <v-stepper-step
                :complete="e6 > 2"
                step="2"
                >
                Documents
                <small>Documents that need download</small>
                </v-stepper-step>

                <v-stepper-content step="2">
                <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                ></v-card>
                <v-btn class="ma-2" @click="e6 = 1">
                    <v-icon left>
                    mdi-arrow-left
                    </v-icon>
                    Previews
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="primary"
                    @click="e6 = 3"
                >                    
                    Next
                    <v-icon right>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>                
                </v-stepper-content>
            <!-- thirty step -->
                <v-stepper-step
                :complete="e6 > 3"
                step="3"
                >
                Upload Documents
                </v-stepper-step>

                <v-stepper-content step="3">
                    <div>
                        <div class="text--primary">Personal Information
                            <v-divider ></v-divider>
                        </div>
                        <v-row>
                            <v-col>
                                <v-text-field ref="name" label="Name" prepend-icon="mdi-account-edit" ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field ref="last_name" label="Last Name" prepend-icon="mdi-account-edit"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field ref="second_name" label="Mother's Last Name" prepend-icon="mdi-account-edit"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field ref="phone" label="Phone number" prepend-icon="mdi-phone"></v-text-field>      
                            </v-col>
                            <v-col>
                                <v-text-field ref="rfc" label="RFC" prepend-icon="mdi-pickaxe"></v-text-field>      
                            </v-col>
                        </v-row>
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
                        <v-row>
                            <v-col>
                                <v-text-field ref="address" label="address" prepend-icon="mdi-map-marker"></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field ref="postal-code" label="Cp" prepend-icon="mdi-pound"></v-text-field>      
                            </v-col>
                        </v-row>
                        <v-row>                        
                            <v-col>
                                <v-file-input
                                    show-size
                                    counter
                                    label="Proof of Address"
                                    
                                ></v-file-input>
                            </v-col>
                            
                            <v-col>
                                <v-file-input
                                    show-size
                                    counter                        
                                    label="INE or IFE"
                                ></v-file-input>
                            </v-col>
                        </v-row>       
                    </div>
                    
                    <br>
                    
                    <div>
                        <div class="text--primary" >Oficial Documentation
                            <v-divider ></v-divider>
                        </div>
                        <v-row>
                            <v-col>
                                <v-file-input
                                    show-size
                                    counter
                                    label="Contract"
                                ></v-file-input>
                            </v-col>
                            <v-col>
                                <v-file-input
                                    show-size
                                    counter
                                    label=""
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        <v-row></v-row>
                    </div>                                                            
                    
                    <br>

                    <div>
                        <div class="text--primary">Transport Information                            
                            <v-divider ></v-divider>
                        </div>
                        <v-row>
                            <v-col>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"                                    
                                    prepend-icon="mdi-camera"
                                    show-size
                                    counter
                                    label="Plate"
                                ></v-file-input>
                            </v-col>
                            <v-col>
                                <v-file-input
                                    show-size
                                    counter
                                    label="driver's licence"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"                                    
                                    prepend-icon="mdi-camera"
                                    show-size
                                    counter
                                    label="Car picture front"                                    
                                ></v-file-input>
                            </v-col>
                            
                            <v-col>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"                                    
                                    prepend-icon="mdi-camera"
                                    show-size
                                    counter
                                    label="Car picture back"
                                ></v-file-input>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"                                    
                                    prepend-icon="mdi-camera"
                                    show-size
                                    counter
                                    label="Car picture right side"
                                ></v-file-input>
                            </v-col>
                            
                            <v-col>
                                <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"                                    
                                    prepend-icon="mdi-camera"
                                    show-size
                                    counter
                                    label="Car picture left side"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                    </div>
                    
                    <div>
                        <v-checkbox
                            v-model="enabled"                            
                            label="I Accept the terms and conditions to work as "
                            class="md-2"
                        ></v-checkbox>   
                    </div>

                <v-btn class="ma-2" @click="e6 = 2">
                    <v-icon left>  mdi-arrow-left</v-icon>
                    Previews
                </v-btn>

                <v-btn
                    class="ma-2"
                    color="primary"
                    href="/profile"
                    :disabled = "!enabled"
                >
                    Finish                    
                </v-btn>                
                </v-stepper-content>

                
            </v-stepper>
            </v-card-text>            
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
    name: 'Worker_Request',
    components: {    
    Navbar,    
  },
   data () {
      return {
        e6: 1,
        select: { state: 'State', abbr: 'St' },
        items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
        enabled: false,
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
      }
    },
}
</script>