<template lang="pug">
  .dot(@click="$emit('selected', pointData)" :style="getStyle")
</template>

<script>
import { pointSizes } from '@/data/map-points'

export default {
  props: {
    pointData: {
      type: Object,
      required: true
    }
  },
  computed: {
    getStyle() {
      const pointData = this.pointData
      const size = pointSizes[pointData.size]

      const styleObj = {
        width: `${size.width}%`,
        height: `${size.height}%`,
        left: `${pointData.left}%`,
        top: `${pointData.top}%`,
      }
      if (pointData.color) styleObj.color = pointData.color
      if (pointData.boxShadow) styleObj['box-shadow'] = pointData.boxShadow
      return styleObj
    }
  }
}
</script>

<style scoped>
  .dot {
    background: white;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    box-shadow:
      0 0 6px 1px #fff,
      0 0 8px 2px #f0f,
      0 0 10px 3px #0ff;
  }
</style>