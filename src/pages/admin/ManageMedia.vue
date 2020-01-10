<template lang="pug">
  Page(:loading="!loaded")
    .flex-col.p30-side
      h1 Manage stations and media
      .p10-ver
      v-tabs.p10
        v-tab(key="stations") Stations
        v-tab(key="media") Media
        v-tab(key="dots") Dots
        v-tab-item.flex-col
          .p15-ver
            h2 Stations
            br
            v-data-table.elevation-1(:items="stations" :headers="stationHeaders")
              template(slot="items" slot-scope="props")
                td(:title="props.item.desc") {{ props.item.title }}
                td {{ props.item.line | line }}
                td {{ props.item.latestCount || 0 }}
                td {{ props.item.totalCount || 0 }}
                td
                  .flex-row
                    v-btn.no-margin(@click="deleteStation(props.item.id)" small outline color="error") Delete
          .p30-top
          hr(style="border-top:0.8px solid white")
          .p15-top
            h2 Add new station
            br
            v-form(ref="stationForm")
              v-text-field(v-model="station.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo outline)
              v-textarea(v-model="station.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo outline)
              v-select(v-model="station.line" :items="lines" item-text="title" item-value="id" :rules="[(v) => v != null || 'Line is required']" required placeholder="Line" solo outline)
            v-btn(@click="submitStation" color="primary" outline) Submit
          .p30-top
        v-tab-item.flex-col
          .p15-top
            h2 Media
            br
            v-data-table.elevation-1(:items="media" :headers="mediaHeaders")
              template(slot="items" slot-scope="props")
                td
                  a(:href="props.item.url" target="_blank") {{ props.item.title }}
                td {{ props.item.type | mediaType }}
                td {{ props.item.hasActiveSub | yesno }}
                td {{ props.item.subscriber.id }}
                td
                  .flex-row
                    v-btn.no-margin(@click="goToDetails(props.item.id)" small outline) Details
                    .p5-side
                    v-btn.no-margin(@click="deleteMedia(props.item.id)" small outline color="error") Delete
          .p30-top
          hr(style="border-top:0.8px solid white")
          .p15-top
            h2 Add new media
            br
            v-form(ref="mediaForm")
              v-combobox(v-model="mediaObj.locId" :items="stations" item-text="title" item-value="id" :rules="[(v) => v != null || 'Station is required']" :return-object="false" required placeholder="Station" solo outline)
                template(slot="selection" slot-scope="data")
                  span {{ getStation(data.item).title }}
              v-text-field(v-model="mediaObj.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo outline)
              v-text-field(v-model="mediaObj.url" :rules="[(v) => !!v || 'Media URL is required']" required placeholder="Media URL" solo outline)
              v-textarea(v-model="mediaObj.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo outline)
              v-select(v-model="mediaObj.entityId" :items="businesses" item-text="user.email" item-value="id" :rules="[(v) => v != null || 'Business is required']" required placeholder="Business" solo outline)
            v-btn(@click="submitMedia" color="primary" outline) Submit
        v-tab-item.flex-col
          .p15-top
            h2 Dots
            br
            v-data-table.elevation-1(:items="dotStations" :headers="dotStationHeaders")
              template(slot="items" slot-scope="props")
                td {{ getDotStation(props.item.dot).name }}
                td
                  .flex-row.align-center.p10-ver
                    .flex-1
                      v-combobox(:items="stations" :value="props.item" @change="updateDotStation(props.item, $event)" hide-details outline item-text="title" item-value="id" placeholder="Station" solo)
                        template(slot="selection" slot-scope="data")
                          span {{ props.item.stationId != null ? getStation(props.item.stationId).title : '' }}
                    .flex-5
</template>

<script>
import Api from '@/services/api'
import { mapPoints } from '@/data/map-points'
import { lineTitleFilter } from '@/filters'

export default {
  created() {
    this.initData()
  },
  data() {
    return {
      lines: [],
      stations: [],
      station: {},
      stationHeaders: [
        { text: 'Title', value: 'title' },
        { text: 'Line', value: 'line' },
        { text: 'Recent media #', value: 'latestCount' },
        { text: 'Total media #', value: 'totalCount' },
        { text: 'Actions', value: null }
      ],
      media: [],
      mediaObj: {},
      mediaHeaders: [
        { text: 'Title', value: 'title' },
        { text: 'Type', value: 'type' },
        { text: 'Active subscription', value: 'hasActiveSub' },
        { text: 'Subscriber ID', value: null },
        { text: 'Actions', value: null }
      ],
      businesses: [],
      dotStations: [],
      dotStationHeaders: [
        { text: 'Dot', value: 'dot' },
        { text: 'Station', value: 'stationId' }
      ],
      loaded: false
    }
  },
  methods: {
    initData() {
      this.loaded = false
      Promise.all([this.getLines(),
        this.getStations(),
        this.getDotStations(),
        this.getActiveBusinesses(),
        this.getMedia()])
        .then(() => {
          this.loaded = true
        })
    },
    getLines() {
      return Api.getLines()
        .then((res) => {
          this.lines = res.data.map(line => ({
            id: line.id,
            title: lineTitleFilter(line.id)
          }))
        })
    },
    getActiveBusinesses() {
      return Api.getActiveBusinesses()
        .then((res) => {
          this.businesses = res.data
        })
    },
    getStations() {
      return Api.getStations()
        .then((res) => {
          this.stations = res.data.sort((a, b) => {
            if (a.title > b.title) return 1
            if (a.title > b.title) return -1
            return 0
          })
        })
    },
    submitStation() {
      const stationValid = this.$refs.stationForm.validate()
      if (!stationValid) return
      const station = this.station
      Api.postStation(station)
        .then((res) => {
          this.stations.push(res.data)
          this.$refs.stationForm.reset()
        })
    },
    deleteStation(stationId) {
      return Api.deleteStation(stationId)
        .then((res) => {
          const deleteId = Number(res.data.id)
          this.stations = this.stations.filter(stationItem => stationItem.id !== deleteId)
        })
    },
    getMedia() {
      return Api.getMedia()
        .then((res) => {
          this.media = res.data
        })
    },
    submitMedia() {
      const mediaValid = this.$refs.mediaForm.validate()
      if (!mediaValid) return
      const media = this.mediaObj
      Api.postMedia(media)
        .then((res) => {
          this.media.push(res.data)
          this.$refs.mediaForm.reset()
        })
    },
    deleteMedia(mediaId) {
      return Api.deleteMedia(mediaId)
        .then((res) => {
          const deleteId = Number(res.data.id)
          this.media = this.media.filter(mediaItem => mediaItem.id !== deleteId)
        })
    },
    goToDetails(mediaId) { // util
      this.$router.push({ name: 'media-details', params: { mediaId } })
    },
    getDotStations() {
      return Api.getDotStations()
        .then((res) => {
          this.dotStations = res.data
        })
    },
    getDotStation(dotId) { // not api-related
      return mapPoints.find(mapPoint => mapPoint.id === dotId) || {}
    },
    getStation(stationId) { // not api-related, workaround
      return this.stations.find(station => station.id === stationId)
    },
    updateDotStation(dotStation, station) {
      if (station == null) return
      const stationId = station.id || station
      if (isNaN(stationId)) return
      const dotToUpdate = {
        ...dotStation,
        stationId
      }
      Api.updateDotStation(dotToUpdate)
        .then((resp) => {
          const updatedDots = resp.data

          this.dotStations = this.dotStations.map((dotStationObj) => {
            const updatedDot = updatedDots.find(updatedDotObj => updatedDotObj.id === dotStationObj.id)
            return updatedDot || dotStationObj
          })
        })
    }
  }
}
</script>