<template lang="pug">
  .p20
    span This is a message!
</template>

<script>
export default {
  props: {
    message: Object,
    required: true
  }
}
</script>
