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
                    <h1>Profile</h1>
                    <v-row>
                        <v-col>
                            <div>Name</div>
                            <p class=" text--primary">
                                {{element.Name}} {{element.Last_Name}} {{element.Mother_Last_Name}}
                            </p>
                        </v-col>

                        <v-col>
                            <div>Rfc</div>
                            <p class=" text--primary">
                                {{element.Rfc}}
                            </p>
                        </v-col>
                        
                    </v-row>            

                    <!-- <div>E-mail</div>
                    <p class=" text--primary">
                        {{e_mail}}
                    </p> -->
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
                    </v-row>                    

                    <h1>Driver's information</h1>
                    <v-row>
                        <v-col>
                            <div>Ine</div>
                        </v-col>
                        <v-col>
                            <div>Driver's licence</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div>Proof Address</div>
                        </v-col>
                        <v-col>
                            <div>Reference</div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <div>Contract</div>
                        </v-col>
                        <v-col></v-col>
                    </v-row>

                    <h1>Vehicle information</h1>
                    <v-row>
                        <v-col></v-col>
                        <v-col></v-col>
                    </v-row>


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
                        color="red darken-1"
                        @click="Reject_request()" 
                    >
                        Rechaza Solicitud
                    </v-btn>
                    <v-btn
                        text
                        color="light-blue accent-3"
                        @click="Acept_request()" 
                    >
                        Aceptar Solicitud
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
    name: 'Request_work_inspect',
    components: {
        Navbar,
    },
    data: () => ({
        element: []
    }),
     mounted(){         
        API.get('worker_request/' + this.$route.params.id)
        .then(response => {                   
            this.element = response.data[0]
            console.log(this.element);
        }).catch(error =>{
            console.error(error);
        });
    },
    methods: {
        Cancel_operation(){
            this.$router.push({name: 'Request_work_list'}).catch(error => {
                console.info(error.message)
            })            
            
        },
        Reject_request(){
            API.patch('client_user/' + this.element.Client_user_id, {
                Name: this.element.Name ,
                Type_user: 'Cliente'

            }).then((response) => {            
                API.post('notification',{
                    Client_user_id : this.element.Client_user_id,
                    Subject : 'Rechazo de Solicitud',
                    From : 'Administracion',
                    Message : 'Te agradecemos por haber hecho el tramite para empezar como trabajador, pero debido a algunas incontinencias que se han encontrado hemos decidido rechazar tu solicitud si quisieras volver ha hacer el tramite te recomendamos verificar bien la informacion enviada'
                }).then((response1)=>{
                    API.delete('worker_request/'+  this.$route.params.id).then((response2) =>{
                        console.log(response2);
                        this.$router.push({name: 'Request_work_list'}).catch(error => {
                            console.info(error.message)
                        })
                    }).catch(error =>{
                        console.error(error);
                    })
                    console.log(response1);                    

                }).catch(error2 =>{
                    console.error(error2.message);
                })
                
                console.log(response);
            }).catch(error => {
                console.log(error.message);
            })

        },

        Acept_request(){
            API.patch('client_user/' + this.element.Client_user_id, {
                Name: this.element.Name ,
                Type_user: 'Trabajador'

            }).then((response) => {            
                API.post('notification',{
                    Client_user_id : this.element.Client_user_id,
                    Subject : 'Aceptación de Solicitud',
                    From : 'Administracion',
                    Message : 'Te agradecemos por haber hecho el tramite para empezar como trabajador, los datos proporcionados son los correctos para comenzar como un trabajador en esta empresa, por motivo de nuesto agradecimiento por afiliarte a esta empresa te enviaremos un mensaje y ademas tendras un paquete de bienvenida como trabajador'
                }).then((response1)=>{
                    API.post('worker_profile',{
                        Client_user_id: this.element.Client_user_id,
                        Name: this.element.Name,
                        Last_Name: this.element.Last_Name,
                        Mother_Last_Name: this.element.Mother_Last_Name,
                        Rfc: this.element.Rfc,                                                
                        Address: this.element.Address ,
                        State: this.element.State ,
                        Town: this.element.Town,
                        Cp: this.element.Cp,
                        Phone: this.element.Phone,
                    }).then((response2) =>{
                        API.delete('worker_request/'+  this.$route.params.id).then((response3) =>{
                            console.log(response3);
                            this.$router.push({name: 'Request_work_list'}).catch(error => {
                                console.info(error.message)
                            })
                        }).catch(error =>{
                            console.error(error);
                        })
                    }).catch(error =>{

                    })
                    
                    console.log(response1);                    

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
</script>

<style>

</style>