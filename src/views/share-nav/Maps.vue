<template>
    <div class="ma-1">
      <v-row>              
        <v-col
          cols="2"
          md="3"
        >
          <div class="ma-2" >            
            <gmap-autocomplete               
              @place_changed="setPlace"
              class="w-50"
            >
            </gmap-autocomplete>
            <br>
            <v-btn @click="addMarker"> Set init location</v-btn>

          </div>
        </v-col>      
        <v-col
          cols="12"
          sm="6"
          md="9"
        >
        <div class="ma-1">
          <gmap-map
            :center="myCoordinates"
            :zoom="zoom"
            style="width:100%; height:640px;"
            ref="mapRef"
            flat
            @dragend="handleDrag"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
        </v-col>
      </v-row>      
    </div>
</template>

<script>
import gmapsInit from '../../utils/GMaps';
export default {
  name: 'Maps',  
  data: () => ({
    map: null,
    myCoordinates: {
      lat: 0,
      lng: 0
    },
    zoom: 7,
    markers: [],
    places: [],
    currentPlace: null,
    center: { lat: 45.508, lng: -73.587 },
  }),
  created() {
      // does the user have a saved center? use it instead of the default
      if(localStorage.center) {
          this.myCoordinates = JSON.parse(localStorage.center);
      } else {
          // get user's coordinates from browser request
          this.$getLocation({})
              .then(coordinates => {
                  this.myCoordinates = coordinates;
              })
              .catch(error => alert(error));
      }
      // does the user have a saved zoom? use it instead of the default
      if(localStorage.zoom) {
          this.zoom = parseInt(localStorage.zoom);
      }
  },
  mounted() {
      // add the map to a data object
      this.$refs.mapRef.$mapPromise.then(map => this.map = map);      
  },
  methods: {
    handleDrag() {
        // get center and zoom level, store in localstorage
        let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng()
      };
      let zoom = this.map.getZoom();
      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
    
    // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
        };
        console.log(marker.lat + "←←←  →→→" +marker.lng)
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
      
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }  
  },
  computed: {
      mapCoordinates() {
          if(!this.map) {
              return {
                  lat: 0,
                  lng: 0
              };
          }
          return {
              lat: this.map.getCenter().lat().toFixed(4),
              lng: this.map.getCenter().lng().toFixed(4)
          }
      }
  }
};
</script>

<style>
.texto-what-1{
  float:left;
  width: 45%;
}

.texto-what-2{
  float:left;
  width: 45;
}
</style>