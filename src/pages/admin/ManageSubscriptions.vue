<template lang="pug">
  Page
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 Manage subscriptions
        .p15-bot
        h2 Subscribers
        br
        v-data-table.elevation-1(:items="subscribers" :headers="subscriberHeaders")
          template(slot="items" slot-scope="props")
            td {{ props.item.name }}
            td {{ props.item.surname }}
            td {{ props.item.email }}
            td {{ props.item.type | subType }}
        .p30-top
        hr(style="border-top:0.8px solid white")
        .p15-top
          h2 Add new subscriber
          br
          v-form(ref="subscriberForm")
            v-text-field(v-model="subscriber.name" :rules="[(v) => !!v || 'Name is required']" required placeholder="Name" solo)
            v-text-field(v-model="subscriber.surname" :rules="[(v) => !!v || 'Surname is required']" required placeholder="Surname" solo)
            v-text-field(v-model="subscriber.email" :rules="[(v) => !!v || 'Email is required']" required type="email" placeholder="Email" solo)
            v-select(v-model="subscriber.type" :items="subscriberTypes" :rules="[(v) => v != null || 'Type is required']" required placeholder="Type" solo)
          v-btn(@click="submitSubscriber" color="primary") Submit
        .p30-top
        hr(style="border-top:0.8px solid white")
        .p15-top
          h2 Add new subscription
          br
          v-form(ref="subscriptionForm")
            v-select(v-model="subscription.entityId" :items="subscriberTypes" :rules="[(v) => v != null || 'Subscriber is required']" required placeholder="Subscriber" solo)
            v-select(v-model="subscriber.pkgId" :items="subscriberTypes" :rules="[(v) => v != null || 'Package is required']" required placeholder="Package" solo)
          v-btn(@click="submitSubscription" color="primary") Submit
      .flex-1
</template>

<script>
import Api from '@/services/api'

export default {
  created() {
    this.getSubscribers()
  },
  data() {
    return {
      subscribers: [],
      subscriber: {},
      subscriberHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Surname', value: 'surname' },
        { text: 'Email', value: 'email' },
        { text: 'Type', value: 'type' }
      ],
      subscriberTypes: [
        { text: 'Business', value: 0 },
        { text: 'Consumer', value: 1 }
      ],
      subscription: {}
    }
  },
  methods: {
    getSubscribers() {
      return Api.getSubscribers()
        .then((res) => {
          this.subscribers = res.data
        })
    },
    submitSubscriber() {
      const subscriberValid = this.$refs.subscriberForm.validate()
      if (!subscriberValid) return
      console.log(this.subscriber)
    },
    submitSubscription() {
      const subscriptionValid = this.$refs.subscriptionForm.validate()
      if (!subscriptionValid) return
      console.log(this.subscription)
    }
  }
}
</script>