<template lang="pug">
  Page
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 Manage media
        .p15-bot
        h2 Stations
        br
        v-data-table.elevation-1(:items="stations" :headers="stationHeaders")
          template(slot="items" slot-scope="props")
            td {{ props.item.title }}
            td {{ props.item.line | line }}
            td {{ props.item.latestCount }}
            td {{ props.item.totalCount }}
        .p30-top
        hr(style="border-top:0.8px solid white")
        .p15-top
          h2 Add new station
          br
          v-form(ref="stationForm")
            v-text-field(v-model="station.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo)
            v-textarea(v-model="station.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo)
            v-select(v-model="station.line" :items="lines" item-text="title" item-value="id" :rules="[(v) => v != null || 'Line is required']" required placeholder="Line" solo)
          v-btn(@click="submitStation" color="primary") Submit
        .p30-top
        hr(style="border-top:0.8px solid white")
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
        .p30-top
        hr(style="border-top:0.8px solid white")
        .p15-top
          h2 Add new media
          br
          v-form(ref="mediaForm")
            v-select(v-model="mediaObj.locId" :items="stations" item-text="title" item-value="id" :rules="[(v) => v != null || 'Station is required']" required placeholder="Station" solo)
            v-text-field(v-model="mediaObj.title" :rules="[(v) => !!v || 'Title is required']" required placeholder="Title" solo)
            v-text-field(v-model="mediaObj.url" :rules="[(v) => !!v || 'Media URL is required']" required placeholder="Media URL" solo)
            v-textarea(v-model="mediaObj.desc" :rules="[(v) => !!v || 'Description is required']" required placeholder="Description" solo)
            v-select(v-model="mediaObj.entityId" :items="businesses" item-text="email" item-value="id" :rules="[(v) => v != null || 'Business is required']" required placeholder="Business" solo)
          v-btn(@click="submitMedia" color="primary") Submit
      .flex-1
</template>

<script>
import Api from '@/services/api'
import { lineTitleFilter } from '@/filters'

export default {
  created() {
    this.getLines()
    this.getStations()
    this.getActiveBusinesses()
    this.getMedia()
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
      ],
      media: [],
      mediaObj: {},
      mediaHeaders: [
        { text: 'Title', value: 'title' },
        { text: 'Type', value: 'type' },
        { text: 'Active subscription', value: 'hasActiveSub' },
        { text: 'Subscriber ID', value: null },
      ],
      businesses: [],
    }
  },
  methods: {
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
          this.stations = res.data
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
    }
  }
}
</script>