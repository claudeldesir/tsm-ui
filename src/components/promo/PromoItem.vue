<template lang="pug">
  v-card
    .p15
      v-text-field.fs20(v-model="promoObj.title" filled label="Title")
      v-textarea(v-model="promoObj.desc" filled label="Description")
      br
      v-checkbox(v-model="promoObj.active" hide-details label="Active")
      .flex-row.p5
        .p15(v-for="promoImage in promo.promoImages" :key="promoImage.id")
          ImageItem(:image="promoImage")
      .p5(v-if="codes")
        v-data-table.elevation-1(:items="codes" :headers="codeHeaders")
          template(slot="items" slot-scope="props")
            td {{ props.item.code }}
            td {{ props.item.status }}
      v-btn(@click="$emit('updatePromo', promoObj)" color="success" outline) Update
      v-btn(@click="seeCodes()" color="primary" outline) See codes
      v-btn(@click="$emit('deletePromo', promo.id)" color="error" outline) Delete
</template>

<script>
import Api from '@/services/api'
import ImageItem from '@/components/ImageItem'

export default {
  props: {
    promo: {
      type: Object,
      required: true
    }
  },
  created() {
    this.promoObj = { ...this.promo }
  },
  data: () => ({
    promoObj: {},
    codes: null,
    codeHeaders: [
      { text: 'Code', value: 'code', width: 80 },
      { text: 'Status', value: 'status', width: 80 }
    ]
  }),
  methods: {
    seeCodes() {
      if (this.codes) return
      Api.getCodes(this.promo.id)
        .then((codes) => {
          this.codes = codes
        })
    },
  },
  components: {
    ImageItem
  }
}
</script>

