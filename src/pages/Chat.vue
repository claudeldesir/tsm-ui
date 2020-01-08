<template lang="pug">
  Page(:loading="!loaded")
    .p20-side
      .p10-side.p20-bot
        AuthPanel
      v-text-field.w100(v-model="newMessage" @keyup.enter="postMessage" solo placeholder="Write anything!" hide-details outline)
      br
      div(v-if="!messages.length")
        h2 You'll be the first one though...
      div(v-else)
        ChatMessage(v-for="message in messages" :key="message.id" :message="message")
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import ChatMessage from '@/components/ChatMessage'
import Api from '@/services/api'

export default {
  sockets: {
    msgReceived(message) {
      this.onNewMessage(message)
    }
  },
  created() {
    this.listChatMessages()
  },
  data() {
    return {
      newMessage: '',
      messages: [],
      loaded: false
    }
  },
  methods: {
    listChatMessages() {
      this.loaded = false
      Api.listChatMessages()
        .then((res) => {
          const messages = res.data
          this.messages = messages
          this.loaded = true
        })
    },
    postMessage() {
      const content = this.newMessage.trim()
      if (!content || !this.isLoggedIn) return
      const msgObj = {
        content
      }
      Api.postChatMessage(msgObj)
        .then(() => {
          this.newMessage = ''
        })
    },
    onNewMessage(message) {
      this.messages.unshift(message)
    }
  },
  components: {
    AuthPanel,
    ChatMessage
  }
}
</script>
