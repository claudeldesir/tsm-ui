<template lang="pug">
  Page
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 Manage subscriptions
        .p5-bot
        h2 Subscribers
        br
        v-data-table.elevation-1(:items="subscribers" :headers="subscriberHeaders")
          template(slot="items" slot-scope="props")
            td {{ props.item.name }}
            td {{ props.item.surname }}
            td {{ props.item.email }}
            td {{ props.item.type | subType }}
        .p30-top
          p New subscriber fields here...
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
      subscriberHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Surname', value: 'surname' },
        { text: 'Email', value: 'email' },
        { text: 'Type', value: 'type' }
      ],
    }
  },
  methods: {
    getSubscribers() {
      return Api.getSubscribers()
        .then((res) => {
          this.subscribers = res.data
        })
    }
  }
}
</script>