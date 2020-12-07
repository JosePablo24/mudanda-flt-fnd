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
                    <img        :src="picture" alt="John">
                </v-avatar>
            </div>
            
            <br>
            <v-divider ></v-divider>
            <br>
            
            <v-text-field v-model="name" ref="name" label="Name" prepend-icon="mdi-account-edit" 
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            required ></v-text-field>

            <v-text-field v-model="last_name" ref="last_name" label="Last Name" prepend-icon="mdi-account-edit"
              :rules="[() => !!last_name || 'This field is required']"
              :error-messages="errorMessages"
              required></v-text-field>

            <v-text-field v-model="second_name" ref="second_name" label="Second Name" prepend-icon="mdi-account-edit" 
              :rules="[() => !!second_name || 'This field is required']"
              :error-messages="errorMessages"
              required></v-text-field>

              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"                     
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="[() => !!name || 'This field is required']"                    
                    required
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu> 
            
            <v-row>
                <v-col>
                    <v-autocomplete
                      ref="state"                    
                      v-model="state"
                      :rules="[() => !!state || 'This field is required']"                                                                  
                      :items="items"
                      label="States"
                      placeholder="Select..."
                      persistent-hint
                      return-object
                      single-line
                      required
                    ></v-autocomplete>

                    <!-- <v-select                    
                    :hint="`${select.state}, ${select.abbr}`"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="State"
                    persistent-hint
                    return-object
                    single-line
                    v-model="state"
                    :rules="[() => !!state || 'This field is required']"
                    required
                    ></v-select> -->
                </v-col>
                <v-col> 
                    <v-text-field v-model="town" ref="town" label="Town" prepend-icon="mdi-google-maps" 
                      :rules="[() => !!name || 'This field is required']"
                      :error-messages="errorMessages"
                      required
                      ></v-text-field>      
                </v-col>
            </v-row>

            <v-autocomplete
              ref="gender"                    
              v-model="gender"
              :rules="[() => !!gender || 'This field is required']"                                                                  
              :items="sex"
              label="Gender"
              placeholder="Select..."
              persistent-hint
              prepend-icon = "mdi-gender-male-female"
              return-object
              single-line
              required
            ></v-autocomplete>

            <v-text-field v-model="phone" ref="phone" label="Phone number" prepend-icon="mdi-phone"
              :rules="[() => !!phone || 'This field is required']"
              :error-messages="errorMessages"
              required
              ></v-text-field>      

            <v-text-field v-model="address" ref="address" label="address" prepend-icon="mdi-map-marker"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              required
              counter
              ></v-text-field>

            <v-text-field v-model="cp" ref="cp" label="Cp" prepend-icon="mdi-pound"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              required
              ></v-text-field>
              
            </v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    color="red"
                    @click="cancel()"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="update"
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
import firebase from 'firebase'
import { API } from '@/services/axios.js'

export default {
  name: 'Edit_Profile',
  components: {    
    Navbar,    
  },
  data: () => ({
        date: '',        
        menu2: false,
        select: { state: 'State', abbr: 'St' },
        // items: [
        //   // { state: 'Florida', abbr: 'FL' },
        //   {state: 'Aguascalientes', abbr: 'Ags'},
        //   {state: 'Baja California', abbr: 'B.C.'},
        //   {state: 'Baja California Sur', abbr:'B.C.S'},
        //   {state: 'Campeche', abbr: 'Camp.'},
        //   {state: 'Chiapas', abbr: 'Chis.'},
        //   {state: 'Chihuahua', abbr: 'Chih.'},
        //   {state: 'Coahuila', abbr: 'Coah.'},
        //   {state: 'Colima', abbr: 'Col.'},
        //   {state: 'Ciudad de Mexico', abbr:'CDMX.'},
        //   {state:'Durango', abbr:'Dgo.'},
        //   {state: 'Estado de Mexico', abbr:'Edo Mex.'},
        //   {state: 'Guanajuato', abbr: 'Gto.'},
        //   {state: 'Guerrero', abbr: 'Gro.'},
        //   {state: 'Hidalgo', abbr : 'Hgo.'},
        //   {state : 'Jalisco', abbr:'Jal.'},
        //   {state: 'Michoacan', abbr: 'Mich.'},
        //   {state: 'Morelos', abbr :'Mor'},
        //   {state: 'Nayarit', abbr: 'Nay.'},
        //   {state: 'Nuevo León', abbr: 'N.L'},
        //   {state: 'Oaxaca', abbr: 'Oax.'},
        //   {state: 'Puebla', abbr:'Pue'},
        //   {state: 'Querétaro', abbr: 'Qro.'},
        //   {state: 'Quintana Roo', abbr: 'Q.R.'},
        //   {state: 'San Luis Potosi', abbr: 'S.L.P.'},
        //   {state: 'Sinaloa', abbr: 'Sin.'},
        //   {state: 'Sonora', abbr:'Son.'},
        //   {state: 'Tabasco', abbr: 'Tab.'},
        //   {state: 'Tamaulipas', abbr: 'Tams.'},
        //   {state: 'Tlaxcala', abbr: 'Tlax.'},
        //   {state: 'Veracruz', abbr: 'Ver.'},
        //   {state: 'Yucatán', abbr: 'Yuc.'},
        //   {state: 'Zacatecas', abbr: 'zac.'}
        // ],
        items:['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila','Colima','CDMX','Durango','Estado de Mexico','Guanajuato','Guerrero','Hidalgo','Jalisco','Michoacan','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosi','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'],    
        sex : ['Hombre', 'Mujer'],
        picture: '',
        currentuser: '',
        element: '',
        name : null,
        last_name: null,
        second_name: null,
        state: null,
        town: null,
        address: null,
        cp: null,
        phone: null,
        gender: null,
        formHasErrors: false,
        errorMessages: ''

      }),
    watch: {
      name () {
        this.errorMessages = ''
      },
    },
    computed: {
      form () {
        return {          
          town: this.town,
          address: this.address,
          cp: this.cp,
          name : this.name,
          last_name: this.last_name,
          second_name: this.second_name,   
          phone :this.phone,
          state: this.state,
          gender: this.gender,
          // date: this.date
        }
      },
    },    
    mounted(){
      this.currentuser = firebase.auth().currentUser;
      this.picture = this.currentuser.photoURL
      API.get('client_user/'+ this.currentuser.uid).then(response =>{            
        this.element = response.data[0]
        this.town = this.element.Town
        this.address = this.element.Address
        this.cp = this.element.Cp
        if(this.element.Year != null){
          this.date = this.element.Year + "-" + this.element.Month + "-" + this.element.Day
        }        
        this.name =  this.element.Name 
        this.last_name = this.element.Last_Name
        this.second_name = this.element.Mother_Last_Name
        this.phone = this.element.Phone
        this.state = this.element.State
        this.gender = this.element.Gender
        console.log(this.element);
      })      
    }, 
    methods: {
      cancel(){        
        this.$router.push({name: 'Profile', params: { id: this.currentuser.uid}}).catch(error => {
            console.info(error.message)
            })
      },
      addressCheck () {
        this.errorMessages = this.address && !this.name 
          ? `Hey! I'm required`
          : ''

        return true
      },      
      update(){
        this.formHasErrors = false
        var no_lenos = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) {
            this.formHasErrors = true
            no_lenos = true
          }
          this.$refs[f].validate(true)
        })
        var dates = []        
        if(no_lenos == false){
          dates = this.date.split("-")
          
          API.patch('client_user/' + this.element.id, {
            Name: this.name ,
            Last_Name: this.last_name,
            Mother_Last_Name: this.second_name,
            Day: dates[2],
            Month: dates[1],
            Year: dates[0],
            Gender: this.gender,
            Address: this.address ,
            State: this.state ,
            Town: this.town,
            Cp: this.cp,
            Phone: this.phone,

          }).then((response) => {
            this.$router.push({ name: 'Profile' })
            console.log(response);
              var user = firebase.auth().currentUser;
              var names = this.name + " " + this.last_name + " " +this.second_name;
              user.updateProfile({
                displayName: names,
              }).then((response) => {
                // Update successful.
                console.log(response);
              }).catch(function(error) {
                console.error(error);
              });
          }).catch(error => {
            console.log(error.message);
          })
        }

      }

    }
}
</script>