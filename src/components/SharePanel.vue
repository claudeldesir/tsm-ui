<template lang="pug">
  .flex-col.align-center
    span Share with your friends!
    v-layout(row).p5
      social-sharing(:url="data.url"
        :media="data.url"
        :title="data.title"
        :description="data.desc"
        :quote="data.desc"
        inline-template)
        v-layout(row).center
          network(network="facebook")
            i.p10.fs30.fab.fa-facebook.pointer
          network(network="twitter")
            i.p10.fs30.fab.fa-twitter.pointer
          network(network="googleplus")
            i.p10.fs30.fab.fa-google-plus.pointer
          network(network="pinterest")
            i.p10.fs30.fab.fa-pinterest.pointer
          network(network="linkedin")
            i.p10.fs30.fab.fa-linkedin.pointer
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

