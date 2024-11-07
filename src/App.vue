<template>
  <div class="add-notification-container">
    <button @click="addNotification" class="add-notification-button">
      Ajouter Notification
    </button>
  </div>

  <div class="notifications">
    <BaseNotification 
      v-for="notification in notificationStore.getAllNotifications()" 
      :key="notification.id" 
      :notification="notification" 
      @remove="notificationStore.removeNotification"
    />
  </div>
</template>

<script setup>
import BaseNotification from './components/BaseNotification.vue';
import { useNotificationStore } from '../stores/notificationsStore.js';

// Pour utiliser le store Pinia 
const notificationStore = useNotificationStore();

// Getter
const allNotifications = notificationStore.getAllNotifications();

// Mappe le titre des notifications au SVG 
const notificationIcons = {
  Danger: "/icons/Danger.svg",
  Warning: "/icons/Warning.svg",
  Success: "/icons/CheckCircle.svg",
  Info: "/icons/Info.svg"
};

// Fonction pour ajouter une notification random
function addNotification() {
  const titres = ["Danger", "Warning", "Success", "Info"];
  const randomTitre = titres[Math.floor(Math.random() * titres.length)];
  
  // Création objet notification random
  const randomNotification = {
    id: Date.now(),
    titre: randomTitre,
    path: notificationIcons[randomTitre]
  };
  notificationStore.addNotification(randomNotification);
}

</script>

<style scoped>
.add-notification-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.add-notification-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
}

.add-notification-button:hover {
  background-color: #0056b3;
}

.notifications {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 1rem;
}
</style>
