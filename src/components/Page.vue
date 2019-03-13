<template lang="pug">
  v-app
    v-content
      v-container(fluid)
        slot(v-if="!loading")
        .w100.flex-row.justify-center(v-else)
          h2 Loading...
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

