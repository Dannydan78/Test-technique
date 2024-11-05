<template>
  <BaseNotification v-for="notification in notifications" :key="notification.titre" :notification="notification" />
</template>

<script setup>
import { ref } from 'vue';
import BaseNotification from './components/BaseNotification.vue';

const notifications = ref([
  { titre: "Danger", path: "/icons/Danger.svg" },
  { titre: "Warning", path: "/icons/Warning.svg" },
  { titre: "Success", path: "/icons/CheckCircle.svg" },
  { titre: "Info", path: "/icons/Info.svg" },
  
]);


</script>
