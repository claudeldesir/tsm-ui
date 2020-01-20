<template lang="pug">
  Page(:loading="!loaded" :isUser="true")
    .p40-side
      h3 Promo codes dashboard
      br
      div(v-if="!codes.length")
        h2 Nothing to see here...
      div(v-else)
        v-card.p20(v-for="codeObj in codes" :key="codeObj.id")
          .flex-row
            .w50.flex-col
              h4 {{ codeObj.promo.title }}
              .p5
              h5 {{ codeObj.promo.desc }}
            .w50.flex-col.align-center
              h4 {{ codeObj.code }}
              .p5
              qr-code(:text="codeObj.code" :size="100")
              .p5
              h5(:style="{color:getStatusColor(codeObj.status)}") {{ getStatus(codeObj.status)}}
              template(v-if="user.type === 0 && codeObj.status === 'ready'")
                .p5
                v-btn(@click="banCode(codeObj.code)" outline color="error") Ban
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import Api from '@/services/api'

export default {
  created() {
    this.initData()
  },
  data() {
    return {
      codes: [],
      user: null,
      loaded: false
    }
  },
  methods: {
    initData() {
      this.loaded = false
      Promise.all([
        Api.getCodes(),
        Api.getUser()
      ]).then(([codes, user]) => {
        this.codes = codes
        this.user = user
        this.loaded = true
      })
    },
    getStatus(codeStatus) {
      if (codeStatus === 'ready') return 'Ready'
      if (codeStatus === 'inactive') return 'Expired'
      if (codeStatus === 'banned') return 'Banned'
      if (codeStatus === 'used') return 'Already used'
      return ''
    },
    getStatusColor(codeStatus) {
      return codeStatus === 'ready' ? '#2c994e' : 'red'
    },
    banCode(code) {
      Api.banCode(code)
        .then(() => this.initData())
    }
  },
  components: {
    AuthPanel
  }
}
</script>