<template lang="pug">
  div
    iframe(width="420" height="315" :src="getEmbedUrl")
</template>

<script>
import url from 'url'

export default {
  props: {
    videoUrl: String
  },
  computed: {
    getEmbedUrl() {
      const urlParts = url.parse(this.videoUrl, true)
      const query = urlParts.query
      return `https://www.youtube.com/embed/${query.v}`
    }
  }
}
</script>

