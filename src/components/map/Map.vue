<template>
  <section id="map" class="mapa">
    <h1 class="mar">That's Montreal</h1>
    <div class="container">
      <h5 style="color:white;text-align:center">
      IS THE NEW MEDIATOURISTIC PLATFORM BASED AROUND THE METRO.
      WE PRESENT YOU, VIA VIDEOS, THE BEST LOCATIONS AND SERVICES FOR TOURISTS AND CITIZENS OF MONTREAL. <br> Now:
      </h5>
      <hr style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));height:1px;">
      <h5 style="color:white;text-align:center">
          -Trouve ta Station et Clik-un-clip!
      </h5>
      <h5 style="color:white;text-align:center">
          -Find your Station and Clik-a-clip!
      </h5>
    </div>
    <div style="position:relative" id="mapContainer">
      <img class="imgmap" src="https://image.ibb.co/j9RVrK/mappfinal.png">
    </div>

    <MapPoint v-for="mapPoint in mapPoints" :key="mapPoint.id" :pointData="mapPoint"/>
  </section>
</template>

<script>
import MapPoint from '@/components/map/MapPoint'
import { mapPoints } from '@/data/map-points'

export default {
  data() {
    return {
      mapPoints
    }
  },
  components: {
    MapPoint
  }
}
</script>
