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
                Instructiciones
                <small>Reglamento y cosas que se necesitan para trabajar como un prestador de servicios (Trabajador)</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                <v-card                                       
                    elevation="2"
                >
                    <div class="ma-2">
                        <div> 
                            <v-card-title>
                                Bienvenida
                            </v-card-title> 
                        </div>

                        <div>
                            <v-card-text>
                                Primero que nada te damos la Bienvenida a esta plataforma, agradecemos que nos ayudes a nosotros como a las demas personas que utilizan la web para ser una comunidad que apoye a la gente con sus pedidos.
                                Esperamos contar con usted para seguir las politicas que tiene esta plataforma para asi ofrecer un trabajo que valga el esfuerzo que uste y como otros hacen.

                            </v-card-text>                                                        
                        </div>

                        <div> 
                            <v-card-title>
                                Pasos a seguir en la Solicitud
                            </v-card-title> 
                            <v-card-subtitle>
                                *** Importante **
                            </v-card-subtitle>
                        </div>
                        <div>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <div>
                                            <h3>
                                                Apartado de Documentos                                              
                                            </h3>                                            
                                        </div>
                                        <div>
                                            <v-row>
                                                En este apartado encontraras unos documentos los cuales conforman el Contrato que se tiene que firmar por parte del solicitante ademas de que el mismo debe ser llevado a las oficinas para guardarse
                                            </v-row>                                            
                                            <v-row>
                                                El siguiente documento contiene las reglas que la empresa pide para que los choferes den un servicio honesto y eficaz a los clientes que estan dentro de la plataforma
                                            </v-row>
                                        </div>

                                    </v-col>
                                    <v-col>
                                        <div>
                                            <h3>
                                                Seccion de Formulario
                                            </h3>
                                        </div>
                                        <div>
                                            <v-row>
                                                *** Importante ** <br> Todos los documentos que subas en este apartado deben tener el siguiente orden "Primer nombre + Tipo de documento + Nombre del Documento"  <br /> 
                                                ejemplo: Jose_Pablo_doc_Contrato.pdf ó Jose_Pablo_img_INE
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>                                                                  

                            </v-card-text>                                                        
                        </div>
                    </div>                    
                </v-card>
                
                <v-btn class="ma-2" @click="cancel()">
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
                <v-card>
                    <v-row>
                        <v-col>
                            <v-card-title>
                                Contrato                                
                            </v-card-title>
                            
                            <v-img                                
                                max-height="150"
                                max-width="250"
                                src="https://picsum.photos/id/11/500/300"
                                class="white--text align-end"
                            >
                                <v-card-title>
                                    <v-btn
                                        color="white"
                                        icon
                                        @click.prevent="downloadContract()"
                                    >
                                        <v-icon>mdi-cloud-download</v-icon>
                                    </v-btn>
                                </v-card-title>                                                                   
                            </v-img>
                        </v-col>

                        <v-col>
                            <v-card-title>
                                Reglamento

                            </v-card-title>
                            <v-img                                
                                max-height="150"
                                max-width="250"
                                src="https://picsum.photos/id/11/500/300"
                                class="white--text align-end"
                            >
                                <v-card-title>
                                    <v-btn
                                        color="white"
                                        icon
                                        @click.prevent="downloadReglament()"
                                    >
                                        <v-icon>mdi-cloud-download</v-icon>
                                    </v-btn>
                                </v-card-title>                                                                   
                            </v-img>
                        </v-col>
                    </v-row>
                </v-card>
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
                                <v-text-field v-model="name" ref="name" label="Name" prepend-icon="mdi-account-edit" 
                                    :rules="[() => !!name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="last_name" ref="last_name" label="Last Name" prepend-icon="mdi-account-edit"
                                    :rules="[() => !!last_name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="second_name" ref="second_name" label="Second Name" prepend-icon="mdi-account-edit" 
                                    :rules="[() => !!second_name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field v-model="phone" ref="phone" label="Phone number" prepend-icon="mdi-phone"
                                    :rules="[() => !!phone || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required
                                    ></v-text-field>     
                            </v-col>
                            <v-col>
                                <v-text-field v-model="rfc" ref="rfc" label="RFC" prepend-icon="mdi-pickaxe" 
                                    :rules="[() => !!rfc || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required ></v-text-field>      
                            </v-col>
                        </v-row>
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
                            </v-col>
                            <v-col> 
                                <v-text-field v-model="town" ref="town" label="Town" prepend-icon="mdi-google-maps" 
                                    :rules="[() => !!name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required
                                ></v-text-field>                                 
                                
                            </v-col>
                        </v-row>       
                        <v-row>
                            <v-col>
                                <v-text-field v-model="address" ref="address" label="address" prepend-icon="mdi-map-marker"
                                    :rules="[() => !!name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required
                                    counter
                                    ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field v-model="cp" ref="cp" label="Cp" prepend-icon="mdi-pound"
                                    :rules="[() => !!name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    required
                                    ></v-text-field>
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
                    
                    <div class="ma-6">
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
                    :disabled = "!enabled"
                    @click ="post_work_request()"
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
import { API } from '@/services/axios.js'
import firebase from 'firebase'
export default {
    name: 'Worker_Request',
    components: {    
    Navbar,    
  },
   data :() => ({
        e6: 1,
        // select: { state: 'State', abbr: 'St' },
        // items: [
        //   { state: 'Florida', abbr: 'FL' },
        //   { state: 'Georgia', abbr: 'GA' },
        //   { state: 'Nebraska', abbr: 'NE' },
        //   { state: 'California', abbr: 'CA' },
        //   { state: 'New York', abbr: 'NY' },
        // ],        
        enabled: false,
        rules: [
            value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
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
        rfc: null,
        errorMessages: '',
        date: '',        
        menu2: false,
        
        imageData: null,
        picture1: null,
        uploadValue: 0
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
          rfc: this.rfc,
          
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
        this.name =  this.element.Name 
        this.last_name = this.element.Last_Name
        this.second_name = this.element.Mother_Last_Name
        this.phone = this.element.Phone
        this.state = this.element.State        
        // console.log(this.element);
        // console.log(this.element.id);
      })      
    }, 
    methods: {
        downloadContract(){            
            var storage = firebase.storage();
            var storageRef = storage.ref();
            // Create a reference to the file we want to download
            var starsRef = storageRef.child('documents-mdz-flt-sample/Contrato_de_trabajo.docx');

            // Get the download URL
            starsRef.getDownloadURL().then(function(url) {
            // Insert url into an <img> tag to "download"
                console.log(url);
                var win = window.open(url, '_blank');
                // Cambiar el foco al nuevo tab (punto opcional)
                
            }).catch(function(error) {
                console.log(error);
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                // File doesn't exist
                break;

                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

                case 'storage/canceled':
                // User canceled the upload
                break;            
                case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
            });
        },
        
        downloadReglament(){
            var storage = firebase.storage();
            var storageRef = storage.ref();
            // Create a reference to the file we want to download
            var starsRef = storageRef.child('documents-mdz-flt-sample/Reglamento_interno.pdf');

            // Get the download URL
            starsRef.getDownloadURL().then(function(url) {
            // Insert url into an <img> tag to "download"
                console.log(url);
                var win = window.open(url, '_blank');
                // Cambiar el foco al nuevo tab (punto opcional)
                
            }).catch(function(error) {
                console.log(error);
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                // File doesn't exist
                break;

                case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

                case 'storage/canceled':
                // User canceled the upload
                break;            
                case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
            });
        },

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

         onUpload(){
            this.picture1=null;
            const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
                ()=>{this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.picture1 =url;
                });
            }
            );
        },

        previewImage(event) {
            this.uploadValue=0;
            this.picture1=null;
            this.imageData = event.target.files[0];
        },

        post_work_request(){            
            this.formHasErrors = false
            var no_llenos = false

            Object.keys(this.form).forEach(f => {
            if (!this.form[f]) {
                this.formHasErrors = true
                no_llenos = true
            }
            this.$refs[f].validate(true)
            })        
            if(no_llenos == false){                                    
                API.post('worker_request/', {
                    Client_user_id: this.element.id,
                    Name: this.name ,
                    Last_Name: this.last_name,
                    Mother_Last_Name: this.second_name,
                    Rfc: this.rfc,                                                
                    Address: this.address ,
                    State: this.state ,
                    Town: this.town,
                    Cp: this.cp,
                    Phone: this.phone,

                }).then((response) => {
                    console.log(response);

                    API.patch('client_user/' + this.element.id, {
                        Type_user: 'Pendiente',
                        Name: this.element.Name,
                    }).then((response1) => {
                        console.log(response1);
                        
                        API.post('notification',{
                            Client_user_id : this.element.id,
                            Subject : 'Solicitud de Trabajo',
                            From : 'Administracion',
                            Message : 'Tu solicitud para funjir como trasnportador esta pendiente, y muchas gracias por trabajar con nosotros. Enviaremos un mensaje al numero proporcionado e intentaremos informarte lo mas pronto posible por los resultados, si tienes alguna duda estaremos en contactopor el chat',
                        }).then((response2)=>{
                            console.log(response2);
                            this.$router.push({name: 'Profile', params: { id: this.currentuser.uid}}).catch(error => {
                                console.info(error.message)
                                })

                        }).catch(error2 =>{
                            console.error(error2.message);
                        })

                    }).catch(error1 => {
                        console.log(error1.message);
                    })                                                                
                }).catch(error => {
                    console.log(error.message);
                })
            }

          }

    }
}
</script>