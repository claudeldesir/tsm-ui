<template lang="pug">
  Page(isAdmin)
    .flex-row
      .flex-1
      .flex-col.flex-2
        h1 That's Montreal Admin
        br
        router-link.fs16(:to="{name: 'media'}") Manage media
        router-link.fs16(:to="{name: 'subscriptions'}") Manage subscriptions
      .flex-1
</template>