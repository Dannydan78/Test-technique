
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref([]);

  // Actions
  function addNotification(notification) {
    // Ajoute la notification et vérifie la limite de 5
    if (notifications.value.length >= 5) {
      // Supprime la plus ancienne 
      notifications.value.shift(); 
    }
    notifications.value.push(notification);
  }

  // Suppression de notification par l'id
  function removeNotification(id) {
    notifications.value = notifications.value.filter(n => n.id !== id);
  }

  // Getters
  const getAllNotifications = () => notifications.value;
  const getNotificationById = (id) => notifications.value.find(n => n.id === id);

  return {
    notifications,
    addNotification,
    removeNotification,
    getAllNotifications,
    getNotificationById,
  };
});
