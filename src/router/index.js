import Vue from 'vue'
import firebase from 'firebase'


import Home from '../views/Home.vue'
import VueRouter from 'vue-router'
import SComponent from '../components/components_log/SComponent'
import LComponent from '../components/components_log/LComponent'
import Profile from '../views/share-nav/Profile'
import Edit_Profile from '../components/Profiles-Actions/Edit_Profile'
import Worker_Request from '../components/Workers-views/Worker_Request'
import About from '../views/share-nav/shared-view-about/About'
import Termconditions from '../views/share-nav/shared-view-about/TermConditions'
import Contact from '../views/share-nav/shared-view-about/Contact'
import Blog from '../views/share-nav/shared-view-about/Blog'
import Team from '../views/share-nav/shared-view-about/Team'
import Services from '../views/share-nav/shared-view-about/Services'
import Worker_Profile from '../components/Workers-views/Worker_Profile'
import Transport_Request from '../components/Customs-views/Transport_Request'
import Groups_list_workers from '../components/Customs-views/Groups_list_workers'
import Freight_list from '../components/Customs-views/Freight_list'
import Nearby_places from '../components/Customs-views/Nearby_places'
import Admin_activities from '../components/Admin-views/Admin_activities'
import Confirm from '../views/share-nav/Confirm'

Vue.use(VueRouter)
const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/log_in',
    name: 'LComponent',
    component: LComponent,    
    meta:{
      autentificado: false
    },    
  },
  {
    path: '/sign_up',
    name: 'SComponent',
    component: SComponent,
    meta:{
      autentificado: false
    }   
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;
      let autorizacion = to.matched.some(record => record.meta.autentificado)
      console.log(usuario.providerData[0].providerId);
      if(usuario.emailVerified == false && (usuario.providerData[0].providerId == 'google.com' || usuario.providerData[0].providerId == 'password')){
        next('confirm')
      }else{
        next()
      }
    }
  },
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
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/edit_profile',
    name: 'Edit_Profile',
    component: Edit_Profile,
    meta:{
      autentificado: true
    }   
  },    
  {
    path: '/worker_request',
    name: 'Worker_Request',
    component: Worker_Request,
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
    path: '/worker_profile',
    name: 'Worker_Profile',
    component: Worker_Profile,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/transport_request',
    name: 'Transport_Request',
    component: Transport_Request,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/workers_group',
    name: 'Groups_list_workers',    
    component: Groups_list_workers,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/freight_list',
    name : ' Freight_list',
    component : Freight_list,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/nearby_places',
    name : ' Nearby_places',
    component : Nearby_places,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/admin_activities',
    name : 'Admin_activities',
    component : Admin_activities,
    meta:{
      autentificado: true
    }   
  },
  {
    path: '/confirm',
    name : 'Confirm',
    component : Confirm,
    meta:{      
      autentificado: true
    },
    beforeEnter: (to, from, next) => {
      let usuario = firebase.auth().currentUser;
      let autorizacion = to.matched.some(record => record.meta.autentificado)
      if(usuario.emailVerified == false && (usuario.providerData[0].providerId == 'google.com' || usuario.providerData[0].providerId == "password")){
        next('confirm')
      }else{
        next()    
      }
    }
      
  }

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