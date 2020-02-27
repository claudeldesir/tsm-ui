<template lang="pug">
  .flex-row.align-center.dot-pagination(v-show="pages > 1")
    .p10.pointer(v-for="(dot, idx) in dots" :key="idx" @click="$emit('selected', idx)")
      .dot-pagination-item(:class="{'selected': dot === 'selected'}")
</template>

<script>
export default {
  props: {
    pages: Number,
    activePage: Number
  },
  computed: {
    dots() {
      const arr = Array.from(Array(this.pages).keys()).map((el) => {
        if (el === this.activePage) return 'selected'
        return ''
      })
      return arr
    }
  }
}
</script>

<style lang="scss">
.dot-pagination {
  .dot-pagination-item {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: 0.5;
    &.selected {
      opacity: 1;
    }
  }
}
</style>