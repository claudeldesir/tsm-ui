<template>
  <section id="map" class="mapa" @click="checkInsidePopup">
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

    <MapPoint v-for="mapPoint in mapPoints" :key="mapPoint.id" :pointData="mapPoint" @selected="pointSelected"/>
    <transition name="slide">
      <StationPopup v-if="selectedPoint" :stationId="selectedPoint.id" @close="pointSelected(selectedPoint)"/>
    </transition>
  </section>
</template>

<script>
import MapPoint from '@/components/map/MapPoint'
import StationPopup from '@/components/map/StationPopup'
import { mapPoints } from '@/data/map-points'

export default {
  data() {
    return {
      mapPoints,
      selectedPoint: null
    }
  },
  methods: {
    pointSelected(pointData) {
      const noPoint = !this.selectedPoint
      const changePoint = this.selectedPoint ? this.selectedPoint.id !== pointData.id : false
      const show = noPoint || changePoint
      const timeout = noPoint ? 0 : 200

      this.selectedPoint = null
      if (show) {
        setTimeout(() => {
          this.selectedPoint = pointData
        }, timeout)
      }
    },
    checkInsidePopup(e) {
      const path = e.path.map(pathObj => pathObj.className || '').join(' ')
      const inside = path.includes('station-popup') || path.includes('dot')
      if (!inside) this.selectedPoint = null
    }
  },
  components: {
    MapPoint,
    StationPopup
  }
}
</script>
