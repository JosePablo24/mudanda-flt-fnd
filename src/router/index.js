import Vue from 'vue'
import firebase from 'firebase'
import { API } from '@/services/axios.js'
import VueRouter from 'vue-router'

// Vistas Generales
import Home from '../views/Home.vue'
import SComponent from '../components/components_log/SComponent'
import LComponent from '../components/components_log/LComponent'
import Profile from '../views/share-nav/Profile'
import Edit_Profile from '../components/Profiles-Actions/Edit_Profile'
import About from '../views/share-nav/shared-view-about/About'
import Termconditions from '../views/share-nav/shared-view-about/TermConditions'
import Contact from '../views/share-nav/shared-view-about/Contact'
import Blog from '../views/share-nav/shared-view-about/Blog'
import Team from '../views/share-nav/shared-view-about/Team'
import Services from '../views/share-nav/shared-view-about/Services'
import Confirm from '../views/share-nav/Confirm'
import Notifications from '../views/share-nav/Notifications'

// vistas de administrador
import Admin_activities from '../components/Admin-views/Admin_activities'
import Users_list from '../components/Admin-views/Users_list'
import Request_work_list from '../components/Admin-views/Request_work_list'
import Group_work_request from '../components/Admin-views/Group_work_request'
import Client_profile from '../components/Admin-views/Client_profile';
import Request_work_inspect from '../components/Admin-views/Request_work_inspect'

// Vistas de Cliente
import Worker_Request from '../components/Workers-views/Worker_Request'
import Transport_Request from '../components/Customs-views/Transport_Request'
import Freight_list from '../components/Customs-views/Freight_list'
import Nearby_places from '../components/Customs-views/Nearby_places'
import Groups_list_workers from '../components/Customs-views/Groups_list_workers'

// Vistas de Trabajador
import Worker_Profile from '../components/Workers-views/Worker_Profile'



Vue.use(VueRouter)
const routes = [
  // Vistas Generales
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  // log_in component
  {
    path: '/log_in',
    name: 'LComponent',
    component: LComponent,    
    meta:{
      autentificado: false
    },    
  },
  // sign_up component
  {
    path: '/sign_up',
    name: 'SComponent',
    component: SComponent,
    meta:{
      autentificado: false
    }   
  },
  // home component
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      autentificado: true
    },
    // beforeEnter: (to, from, next) => {
    //   let usuario = firebase.auth().currentUser;
    //   let autorizacion = to.matched.some(record => record.meta.autentificado)
    //   console.log(usuario.providerData[0].providerId);
    //   if(usuario.emailVerified == false && (usuario.providerData[0].providerId == 'google.com' || usuario.providerData[0].providerId == 'password')){
    //     next('confirm')
    //   }else{
    //     next()
    //   }
    // }
  },
  //about component
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About, //() => import(/* webpackChunkName: "about" */ '../views/About.vue')
    
    meta:{
      autentificado: false
    }   
  },        
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/edit_profile/:id',
    name: 'Edit_Profile',
    component: Edit_Profile,
    meta:{
      autentificado: true
    }   
  },      
  {
    path: '/termAndConditions',
    name: 'Termconditions',
    component: Termconditions,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/confirm',
    name : 'Confirm',
    component : Confirm,
    meta:{      
      autentificado: true
    },              
  },
  {
    path: '/notifications/:id',
    name: 'Notifications',
    component: Notifications,
    meta:{
      autentificado: true
    },
  },
  // Vistas de Cliente
  {
    path: '/worker_request/:id',
    name: 'Worker_Request',
    component: Worker_Request,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/transport_request/:id',
    name: 'Transport_Request',
    component: Transport_Request,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Cliente') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })
      console.log(this.user);

    },
  },
  {
    path: '/workers_group',
    name: 'Groups_list_workers',    
    component: Groups_list_workers,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Cliente') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })
      console.log(this.user);

    },
  },
  {
    path: '/freight_list',
    name : ' Freight_list',
    component : Freight_list,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Cliente') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })
      console.log(this.user);

    },
  },
  {
    path: '/nearby_places',
    name : ' Nearby_places',
    component : Nearby_places,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Cliente') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })
      console.log(this.user);

    },
  },

  // vistas de Trabajador
    // Perfil del trbajador
  {
    path: '/worker_profile',
    name: 'Worker_Profile',
    component: Worker_Profile,
    meta:{
      autentificado: true
    }   
  },  
  // vista de administrador
    // admin activities
  {
    path: '/admin_activities',
    name : 'Admin_activities',
    component : Admin_activities,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },
    // user list component
  {
    path: '/users_list',
    name : 'Users_list',
    component : Users_list,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },
  // Request work list component
  {
    path: '/request_work_list',
    name : 'Request_work_list',
    component : Request_work_list,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },
  // Request group list component
  {
    path: '/request_group_list',
    name : 'Group_work_request',
    component : Group_work_request,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },
  // Client profile
  {
    path: '/user_list/client_profile/:id',
    name : 'Client_profile',
    component : Client_profile,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },
  // Request work inspect
  {
    path: '/request_work_list/request_work_inspect/:id',
    name : 'Request_work_inspect',
    component : Request_work_inspect,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;            
      API.get('client_user/'+ usuario.uid).then(response =>{            
        console.log(response);
        let type_user = response.data[0].Type_user;
        if (type_user == 'Administrador') {
          next()
        } else {
          next('home')  
        }
      }).catch(error =>{
        console.error(error);
      })      

    },
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some(record => record.meta.autentificado)
  console.log('----------- Aqui vamos ---------')
  console.log(usuario)
  console.log(autorizacion);
    
  if (autorizacion && !usuario) {
    next('log_in')
    console.log('verdadero falso ');
  }else if(!autorizacion && usuario){
    next('home')  
    
    console.log('falso verdadero ');
  }else{
    
    next()  
    console.log('falso falso  o verdadero verdadero');
  }

})