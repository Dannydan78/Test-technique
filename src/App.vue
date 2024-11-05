<!-- src/views/NotificationPage.vue -->
<script setup>
import BaseNotification from './components/BaseNotification.vue'
</script>

<template>
  <div class="container">
    <div class="">
      <BaseNotification type="Danger" />
      <BaseNotification type="Warning" />
      <BaseNotification type="CheckCircle" />
      <BaseNotification type="Info" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
}
</style>