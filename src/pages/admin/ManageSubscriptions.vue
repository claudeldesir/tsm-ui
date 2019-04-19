<template lang="pug">
  Page(:loading="!loaded")
    .flex-col.p30-side
      h1 Manage subscribers and subscriptions
      .p10-ver
      v-tabs.p10
        v-tab(key="subscribers") Subscribers
        v-tab(key="subscriptions") Subscriptions
        v-tab-item.flex-col
          .p15-ver
            h2 Subscribers
            br
            v-data-table.elevation-1(:items="subscribers" :headers="subscriberHeaders")
              template(slot="items" slot-scope="props")
                td {{ props.item.user.displayName }}
                td {{ props.item.user.email }}
                td {{ props.item.type | subType }}
            .p30-top
            hr(style="border-top:0.8px solid white")
            .p15-top
              h2 Add new subscriber
              br
              v-form(ref="subscriberForm")
                v-select(v-model="subscriber.userId" :items="users" item-text="user.email" item-value="id" :rules="[(v) => v != null || 'User is required']" required placeholder="User" solo)
                v-select(v-model="subscriber.type" :items="subscriberTypes" :rules="[(v) => v != null || 'Type is required']" required placeholder="Type" solo)
              v-btn(@click="submitSubscriber" color="primary") Submit
            .p30-top
        v-tab-item.flex-col
          .p15-top
            h2 Subscriptions
            br
            v-data-table.elevation-1(:items="subscriptions" :headers="subscriptionHeaders")
              template(slot="items" slot-scope="props")
                td {{ getSubscriberFromList(props.item.subscriber.id).user.email }}
                td {{ props.item.package.desc }}
                td {{ props.item.daysLeft }}
                td {{ props.item.status | subStatus }}
            .p30-top
            hr(style="border-top:0.8px solid white")
            .p15-top
              h2 Add new subscription
              br
              v-form(ref="subscriptionForm")
                v-select(v-model="subscription.entityId" :items="subscribers" item-text="user.email" item-value="id" :rules="[(v) => v != null || 'Subscriber is required']" required placeholder="Subscriber" solo)
                v-select(v-model="subscription.pkgId" :items="packages" item-text="desc" item-value="id" :rules="[(v) => v != null || 'Package is required']" required placeholder="Package" solo)
              v-btn(@click="submitSubscription" color="primary") Submit
</template>

<script>
import Api from '@/services/api'

export default {
  created() {
    this.initData()
  },
  data() {
    return {
      users: [],
      subscribers: [],
      subscriber: {},
      subscriberHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Type', value: 'type' }
      ],
      subscriberTypes: [
        { text: 'Business', value: 0 },
        { text: 'Consumer', value: 1 }
      ],
      packages: [],
      subscriptions: [],
      subscription: {},
      subscriptionHeaders: [
        { text: 'Subscriber', value: 'subscriber.email' },
        { text: 'Package', value: 'package.desc' },
        { text: 'Days left', value: 'daysLeft' },
        { text: 'Status', value: 'status' }
      ],
      loaded: false
    }
  },
  methods: {
    initData() {
      this.loaded = false
      return Promise.all([
        this.getUsers(),
        this.getSubscribers(),
        this.getSubscriptions(),
        this.getPackages()
      ])
        .then(() => {
          this.loaded = true
        })
    },
    getUsers() {
      return Api.getUsers()
        .then((res) => {
          this.users = res.data
        })
    },
    getSubscribers() {
      return Api.getSubscribers()
        .then((res) => {
          this.subscribers = res.data
        })
    },
    getSubscriberFromList(subId) {
      return this.subscribers.find(sub => sub.id === subId)
    },
    submitSubscriber() {
      const subscriberValid = this.$refs.subscriberForm.validate()
      if (!subscriberValid) return
      const subscriber = this.subscriber
      Api.postSubscriber(subscriber)
        .then((res) => {
          this.subscribers.push(res.data)
          this.$refs.subscriberForm.reset()
        })
    },
    getPackages() {
      return Api.getPackages()
        .then((res) => {
          this.packages = res.data
        })
    },
    getSubscriptions() {
      return Api.getSubscriptions()
        .then((res) => {
          this.subscriptions = res.data
        })
    },
    submitSubscription() {
      const subscriptionValid = this.$refs.subscriptionForm.validate()
      if (!subscriptionValid) return
      const subscription = this.subscription
      Api.postSubscription(subscription)
        .then((res) => {
          this.subscriptions.push(res.data)
          this.$refs.subscriptionForm.reset()
        })
    },
  }
}
</script>