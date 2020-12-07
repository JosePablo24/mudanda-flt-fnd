<template>
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <div>
                <v-card class="mx-auto" max-width="600" >   
                    <v-card-text>
                    <div class="text-center">
                        <v-avatar   size="120">
                            <img        :src=picture alt="John">
                        </v-avatar>
                        <div> #{{element.No_user}}</div>
                    </div>
                    
                    <br>
                    <v-divider ></v-divider>
                    <br>
                    <h1>User </h1>
                    <v-row>
                        <v-col>
                            <div>Name</div>
                            <p class=" text--primary">
                                {{element.Name}} {{element.Last_Name}} {{element.Mother_Last_Name}}
                            </p>
                        </v-col>

                        <v-col>
                            <div>Tipe User</div>
                            <p class=" text--primary">
                                {{element.Type_user}}
                            </p>
                        </v-col>

                        <v-col>
                            <div>Status User</div>
                            <p class=" text--primary">
                                {{element.Status_User}}
                            </p>
                        </v-col>
                    </v-row>            

                    <!-- <div>E-mail</div>
                    <p class=" text--primary">
                        {{e_mail}}
                    </p> -->

                    <div>Birthday</div>
                    <p class="text--primary" v-if="element.Day != null">
                        {{element.Day}} / {{element.Month}} / {{element.Year}}
                    </p>
                    <v-row>
                        <v-col>
                            <div>State</div>
                            <p class="text--primary">
                                {{element.State}}
                            </p>
                        </v-col>
                        <v-col>
                            <div>Town</div>
                            <p class="text--primary">
                                {{element.Town}}
                            </p>
                        </v-col>
                        <v-col>
                            <div>Addres</div>
                            <p class="text--primary">
                                {{element.Address}}
                            </p>
                        </v-col>
                        <v-col>
                            <div>Cp</div>
                            <p class="text--primary">
                                {{element.Cp}}
                            </p>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col>
                            <div>Cellphone</div>
                            <p class="text--primary">
                                {{element.Phone}}
                            </p>        
                        </v-col>

                        <v-col>
                            <div>Gender</div>
                            <p class="text--primary">
                                {{element.Gender}}
                            </p>        
                        </v-col>
                    </v-row>
                    <v-autocomplete
                        ref="status"                    
                        v-model="status"
                        :rules="[() => !!status || 'This field is required']"                                                                  
                        :items="status_opcions"
                        label="Status"
                        placeholder="Select..."
                        persistent-hint
                        prepend-icon = "mdi-account-question"
                        return-object
                        single-line
                        required
                    ></v-autocomplete>

                    </v-card-text>
                    <v-card-actions>
                   <v-btn
                        depressed
                        color="error"
                        @click="Cancel_operation()" 
                    >
                        Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="light-blue accent-3"
                        @click="Update_user()" 
                    >
                        Actualizar Información
                    </v-btn>
                    </v-card-actions>
                    <v-card v-if="element.Type_user == 'Trabajador'">
                        <v-divider></v-divider>
                    </v-card>
                </v-card>        
                <br><br>    
            </div>            
        </body>
    </div>
</template>

<script>
import Navbar from '../../views/share-nav/Navbar'
import { API } from '@/services/axios.js'
export default {
    name: 'Client-profile',
    components: {
        Navbar,
    },
    data: () => ({
        element: [],
        status: null,
        status_opcions: ['Active', 'Inactive', 'Block'],        
        formHasErrors: false,
        errorMessages: '',
        mensaje : '',
        subject : '',
    }),
    watch: {
      name () {
        this.errorMessages = ''
      },
    },
     computed: {
      form () {
        return {          
          status: this.status
        }
      },
    },    
     mounted(){         
        API.get('client_user/' + this.$route.params.id)
        .then(response => {            
            this.element = response.data[0]
            console.log(this.element);
            this.name = this.element.Name
        }).catch(error =>{
            console.error(error);
        });
    },
    
    methods: {
        addressCheck () {
            this.errorMessages = this.address && !this.name 
            ? `Hey! I'm required`
            : ''

            return true
        },  
        Cancel_operation(){
            this.$router.push({name: 'Users_list'}).catch(error => {
            console.info(error.message)
            })
        },
        Update_user(){
            this.formHasErrors = false
        var no_lenos = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) {
            this.formHasErrors = true
            no_lenos = true
          }
          this.$refs[f].validate(true)
        })

        if(no_lenos == false){          
          API.patch('client_user/' + this.element.id, {
            Name: this.name ,
            Status_User: this.status

          }).then((response) => {

              if(this.status == 'Active'){
                  this.subject = 'Cuenta activada'
                  this.mensaje = 'Muchas Gracias por la espera, en estos momentos tu cuenta ha sido activada y esperamos sigas con nosotros en el futuro'
              }else if(this.status == 'Inactive'){
                  this.subject = 'Cuenta Inhabilitada'
                  this.mensaje = 'Nos hemos fijado que tu cuenta tiene algunas incongruencias por el momento esta a revision todas tus acciones esperamos informarte los resultados lo mas pronto posible ya que eres un usuario valioso para esta comunidad'
              }else if(this.status == 'Block'){
                  this.subject = 'cuenta bloqueada'
                  this.mensaje = 'Tu cuenta ha sido bloqueada de acuerdo a los acuerdos establecidos en el uso de esta plataforma, ya que se han encontrado faltas en el uso, el bloqueo estara por tiempo indefinido mientras se hace una revision y se llega a un acuerdo con la junta directiva'
              }
              API.post('notification',{
                Client_user_id : this.element.id,
                Subject : this.subject,
                From : 'Administracion',
                Message : this.mensaje
            }).then((response2)=>{
                console.log(response2);
                this.$router.push({name: 'Users_list'}).catch(error => {
                    console.info(error.message)
                })

            }).catch(error2 =>{
                console.error(error2.message);
            })
             
            console.log(response);
          }).catch(error => {
            console.log(error.message);
          })
        }
        }
    }


}
</script>

<style>

</style>