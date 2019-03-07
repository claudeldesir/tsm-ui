<template lang="pug">
  Page
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 That's Montreal Admin Panel
        br
        a Manage media
        router-link(:to="{name: 'subscriptions'}") Manage subscriptions
        a Send newsletter
      .flex-1
</template>