<template lang="pug">
  Page(:loading="!loaded")
    .p20-side
      AuthPanel
      div
        h1 Spot It
        br
        h3 Here you can buy and sell and rent and loan and borrow and lend
      br
      v-btn(@click="newAd = !newAd" color="primary" v-if="!newAd") Create new ad
      br
      .frame.p10(v-if="newAd")
        NewAd(@adSubmitted="adSubmitted" @cancel="newAd=false")
      br
      .flex-row
        AdItem(v-for="ad in ads" :key="ad.id" :ad="ad" @goToDetails="goToDetails($event)")
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import AdItem from '@/components/spotit/AdItem'
import NewAd from '@/components/spotit/NewAd'
import Api from '@/services/api'

export default {
  created() {
    this.getAds()
  },
  data() {
    return {
      ads: [],
      newAd: false,
      loaded: false
    }
  },
  methods: {
    getAds() {
      this.loaded = false
      Api.getAds()
        .then((res) => {
          const ads = res.data
          this.ads = ads
          this.loaded = true
        })
    },
    adSubmitted(ad) {
      Api.postAd(ad)
        .then(() => {
          this.newAd = false
          this.getAds()
        })
    },
    goToDetails(adId) {
      this.$router.push({ name: 'ad-details', params: { adId } })
    }
  },
  components: {
    AuthPanel,
    AdItem,
    NewAd
  }
}
</script>
