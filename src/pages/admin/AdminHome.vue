<template lang="pug">
  Page
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 That's Montreal Admin Panel
        br
        router-link(:to="{name: 'media'}") Manage media
        router-link(:to="{name: 'subscriptions'}") Manage subscriptions
        a Send newsletter
      .flex-1
</template>