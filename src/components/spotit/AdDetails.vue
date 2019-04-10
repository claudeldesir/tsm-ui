<template lang="pug">
  div
    .flex-row
      .flex-col
        h2 {{ ad.title }}
        .fs14 Posted&nbsp;
          timeago(:datetime="ad.createdAt" :autoUpdate="true")
    br
    .flex-row
      .w66.p10.tiny-border.flex-row.align-center
        ImageItem(:image="currentImage" original)
      .w33.p10
        .flex-row.w100.justify-center
          img(src="http://staticmapmaker.com/img/google.png")
    .flex-row.m5
      .p5(v-for="image in ad.adImages" :key="image.id" :class="{'tiny-border': isSelected(image.id)}")
        ImageItem(:image="image" :full="false" @selected="changeCurrentImage(image)")
    br
    .flex-row
      .tiny-border.p10
        .p10.fs20(style="white-space:pre-wrap;") {{ ad.content }}
        v-chip.w100.justify-center
          .fs15 ${{ ad.price }}
    br
    .flex-row
      .tiny-border.p20.fs15.flex-row
        .flex-1
          .flex-row.p5
            h4 Contact name:&nbsp;
            span {{ ad.contactName }}
          .flex-row.p5
            h4 Phone number:&nbsp;
            span(v-if="ad.phone") {{ ad.phone }}
            span.italic(v-else) not visible
          .flex-row.p5
            h4 Email address:&nbsp;
            span(v-if="ad.email") {{ ad.email }}
            span.italic(v-else) not visible
        .p20-side
        .flex-1
          .flex-row.p5
            h4 City:&nbsp;
            span {{ ad.city }}, {{ ad.postal }}
          .flex-row.p5
            h4 Address:&nbsp;
            span {{ ad.address }}
</template>

<script>
import ImageItem from '@/components/ImageItem'

export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  created() {
    this.currentImage = this.ad.adImages[0]
  },
  data() {
    return {
      currentImage: {}
    }
  },
  methods: {
    changeCurrentImage(image) {
      if (image) this.currentImage = image
    },
    isSelected(imageId) {
      return this.currentImage.id === imageId
    }
  },
  components: {
    ImageItem
  }
}
</script>