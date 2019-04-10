<template lang="pug">
  Page(:loading="!loaded")
    AuthPanel
    AdDetails(:ad="ad")
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import AdDetails from '@/components/spotit/AdDetails'
import Api from '@/services/api'

export default {
  props: {
    adId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.loaded = false
    Api.getAd(this.adId)
      .then((res) => {
        const ad = res.data
        this.ad = ad
        this.loaded = true
      })
  },
  data() {
    return {
      loaded: false,
      ad: null
    }
  },
  components: {
    AuthPanel,
    AdDetails
  }
}
</script>