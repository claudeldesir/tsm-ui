<template lang="pug">
  div(data-app)
    v-dialog(:value="visible" @input="v => v || emitClose()" width="30%" content-class="dialog-custom")
      v-card.white
        slot
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    emitClose() {
      this.$emit('close')
    }
  }
}
</script>

<style>
.dialog-custom {
  min-width: 450px !important;
}
</style>