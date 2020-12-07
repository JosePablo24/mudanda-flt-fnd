import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import VueGeolocation from 'vue-browser-geolocation';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9NcXbjKSkpLR9hOuXMiTdDqT6FNbon0c',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
});
 

var firebaseConfig = {
  apiKey: "AIzaSyChEar4GYmpsNNRHVbHBzGs4Ai4Hr-k16Y",
  authDomain: "mdz-flt.firebaseapp.com",
  databaseURL: "https://mdz-flt.firebaseio.com",
  projectId: "mdz-flt",
  storageBucket: "mdz-flt.appspot.com",
  messagingSenderId: "994566277873",
  appId: "1:994566277873:web:2ff5d783da0eb838aab750"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user){    
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  
})