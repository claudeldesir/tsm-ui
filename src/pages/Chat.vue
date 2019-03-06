<template lang="pug">
  .w100.flex-row.justify-center
    .w70.flex-col-align-center
      AuthPanel
      v-text-field.w100(v-model="newMessage" solo placeholder="Write anything!" hide-details)
      ChatMessage(v-for="message in messages" :key="message.id" :message="message")
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import ChatMessage from '@/components/ChatMessage'

export default {
  data() {
    return {
      newMessage: '',
      messages: []
    }
  },
  components: {
    AuthPanel,
    ChatMessage
  }
}
</script>
