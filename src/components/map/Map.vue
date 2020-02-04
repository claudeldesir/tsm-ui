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
      <MapPoint v-for="mapPoint in mapPoints" :key="mapPoint.id" :pointData="mapPoint" @selected="pointSelected"/>
      <transition name="slide">
        <StationPopup v-if="selectedPoint" :pointData="selectedPoint" @close="pointSelected(selectedPoint)"/>
      </transition>
    </div>
  </section>
</template>

<script>
import Api from '@/services/api'
import MapPoint from '@/components/map/MapPoint'
import StationPopup from '@/components/map/StationPopup'
import { mapPoints } from '@/data/map-points'

export default {
  created() {
    Api.getDotStations()
      .then((resp) => {
        const dotStations = resp.data
        dotStations.forEach((dotStation) => {
          const mapPoint = mapPoints.find(mapPointObj => mapPointObj.id === dotStation.dot)
          mapPoint.stationId = dotStation.stationId
          if (dotStation.location.medias.length > 0) {
            this.mapPoints.push(mapPoint)
          }
        })
      })
  },
  mounted() {
    const map = document.getElementById('map')
    map.addEventListener('mouseup', this.checkPropagation)
    map.addEventListener('mousedown', this.checkPropagation)
  },
  beforeDestroy() {
    const map = document.getElementById('map')
    if (map) {
      map.removeEventListener('mouseup', this.checkPropagation)
      map.removeEventListener('mousedown', this.checkPropagation)
    }
  },
  data() {
    return {
      mapPoints: [],
      selectedPoint: null,
      mouseDownInside: false
    }
  },
  methods: {
    pointSelected(pointData) {
      if (pointData.stationId == null) return

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
    checkInsidePopup(elArr, direction) {
      const path = elArr.map(pathObj => pathObj.className || '').join(' ')
      const inside = path.includes('station-popup') || path.includes('dot')

      if (direction === 'd') {
        this.mouseDownInside = inside
      } else if (direction === 'u') {
        if (!this.mouseDownInside && !inside) {
          this.selectedPoint = null
          this.mouseDownInside = false
        }
      }
    },
    checkPropagation(e) { // a bit system
      const elArr = e.propagationPath()
      const direction = e.type === 'mousedown' ? 'd' : 'u'
      this.checkInsidePopup(elArr, direction)
    }
  },
  components: {
    MapPoint,
    StationPopup
  }
}
</script>
