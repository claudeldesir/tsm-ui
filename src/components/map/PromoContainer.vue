<template lang="pug">
  .p10
    span Media ID: {{ mediaId }}
    v-btn(outline color="white" @click="$emit('map:goToMedia')") Back
</template>

<script>
export default {
  props: {
    mediaId: {
      type: Number,
      required: true
    }
  }
}
</script>

