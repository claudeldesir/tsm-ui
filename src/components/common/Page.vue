<template lang="pug">
  v-app
    v-toolbar(v-if="isAdmin" fixed flat)
      router-link(:to="{ name: 'admin' }")
        v-toolbar-title That's Montreal Admin
      v-spacer
      v-toolbar-items
        v-btn(flat :to="{ name: 'media' }") Media
        v-btn(flat :to="{ name: 'subscriptions' }") Subscriptions
    v-content(style="padding-top:64px;")
      v-container(fluid)
        slot(v-if="!loading")
        .w100.flex-row.justify-center(v-else)
          h2 Loading...
</template>

<script>
export default {
  props: {
    isAdmin: Boolean,
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

