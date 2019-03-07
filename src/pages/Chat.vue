<template lang="pug">
  .w100.flex-row.justify-center
    .w70.flex-col-align-center
      AuthPanel
      v-text-field.w100(v-model="newMessage" @keyup.enter="postMessage" solo placeholder="Write anything!" hide-details)
      br
      ChatMessage(v-for="message in messages" :key="message.id" :message="message")
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import ChatMessage from '@/components/ChatMessage'
import Api from '@/services/api'

export default {
  created() {
    Api.listChatMessages()
      .then((res) => {
        const messages = res.data
        this.messages = messages
      })
  },
  data() {
    return {
      newMessage: '',
      messages: []
    }
  },
  methods: {
    postMessage() {
      const content = this.newMessage.trim()
      if (!content || !this.isLoggedIn) return
      const msgObj = {
        content,
        userId: 1 // temp
      }
      Api.postChatMessage(msgObj)
        .then((res) => {
          const message = res.data
          this.messages.unshift(message)
          this.newMessage = ''
        })
    }
  },
  components: {
    AuthPanel,
    ChatMessage
  }
}
</script>
