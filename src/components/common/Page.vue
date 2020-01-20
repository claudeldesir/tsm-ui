<template lang="pug">
  v-app
    v-toolbar(v-if="isAdmin" fixed flat)
      router-link(:to="{ name: 'admin' }")
        v-toolbar-title That's Montreal Admin
      v-spacer
      v-toolbar-items
        v-btn(flat :to="{ name: 'media' }") Media
        v-btn(flat :to="{ name: 'subscriptions' }") Subscriptions
    v-toolbar(v-if="isUser" fixed flat)
      router-link(:to="{ name: 'admin' }")
        v-toolbar-title That's Montreal User
      v-spacer
      v-toolbar-items
        AuthPanel
    v-content(style="padding-top:64px;")
      v-container(fluid)
        slot(v-if="!loading")
        .w100.flex-row.justify-center(v-else)
          h2 Loading...
</template>

<script>
import AuthPanel from '@/components/AuthPanel'

export default {
  props: {
    isAdmin: [Boolean, String],
    isUser: Boolean,
    loading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AuthPanel
  }
}
</script>

