<template>
  <div class="t-left contact">
    <!-- Title -->
    <h3 class="uppercase">
      Drop us a <span style="color:#007e86">Message</span>
    </h3>
    <!-- Contact Form -->
    <form @submit.prevent="onSubmit" id="contact_frm" name="contact_frm" class="font-15 normal">
      <!-- Input with border effect -->
      <span class="border-effect">
        <!-- Email -->
        <input type="email" name="email" id="email" required placeholder="E-Mail" v-model="contactObj.email">
        <!-- Border EFfects -->
        <span class="left-br"></span>
        <span class="right-br"></span>
        <span class="top-br"></span>
      </span>
      <!-- Input with border effect -->
      <span class="border-effect">
        <!-- Subject -->
        <input type="text" name="subject" id="subject" required placeholder="Subject" v-model="contactObj.subject">
        <!-- Border EFfects -->
        <span class="left-br"></span>
        <span class="right-br"></span>
        <span class="top-br"></span>
      </span>
      <!-- Input with border effect -->
      <span class="border-effect">
        <!-- Message -->
        <textarea name="msg" id="msg" required placeholder="Message" v-model="contactObj.msg"></textarea>
        <!-- Border EFfects -->
        <span class="left-br"></span>
        <span class="right-br"></span>
        <span class="top-br"></span>
      </span>
      <!-- Send Button -->
      <button type="submit" id="submit" class="contact-button click-effect dark-loading mt-57 white-hover bg-colored-hover slow">Send</button>
      <!-- End Send Button -->
    </form>
    <!-- End Form -->
  </div>
</template>

<script>
import Api from '@/services/api'

const objTemplate = {
  email: '',
  subject: '',
  msg: ''
}

export default {
  data() {
    return {
      contactObj: {
        ...objTemplate
      }
    }
  },
  methods: {
    onSubmit() {
      Api.contactUs(this.contactObj)
        .then(() => {
          this.$notify({
            group: 'basic',
            type: 'basic',
            title: 'Success',
            text: 'Message sent, thank you!'
          })
          this.contactObj = { ...objTemplate }
        })
    }
  }
}
</script>
