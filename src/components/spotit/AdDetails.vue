<template lang="pug">
  div
    span Ad: {{ ad }}
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  }
}
</script>