<template>
    <div v-if="showNotification">
      <div class="notification" :class="notificationClass">
        <div class="header">
          <img :src="notification.path" alt="Notification Icon" class="svg">
          <h2 class="title">Modal Window</h2>
          <button class="notification-close" @click="remove">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue';
  
  // Déclaration de la prop notification
  const props = defineProps({
    notification: Object,
  });
  
  // Déclaration de l'événement avec defineEmits
  const emit = defineEmits();
  
  // Fonction pour supprimer la notification
  function remove() {
    emit('remove', props.notification.id);
  }
  
  // CSS dynamique en fonction du titre de la notification
  const notificationClass = computed(() => {
    return {
      'notification-danger': props.notification.titre === 'Danger',
      'notification-warning': props.notification.titre === 'Warning',
      'notification-success': props.notification.titre === 'Success',
      'notification-info': props.notification.titre === 'Info',    
    };
  });
  
  const showNotification = ref(true);
  </script>
  
  <style scoped>
  .notification {
    display: flex; 
    flex-direction: column;
    padding-left: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    max-width: 500px;
    position: fixed;
    bottom: 1rem;
  }
  
  .header {
    display: flex;
    align-items: center;
    width: 100%;
  }
  
  .notification-danger {
    background-color: #e0948c;
    border: solid 2px #de4545;
  }
  
  .notification-warning {
    background-color: #eddc9a;
    border: solid 2px #d1b853;
  }
  
  .notification-success {
    background-color: #9de4ba;
    border: solid 2px #79d153;
  }
  
  .notification-info {
    background-color: #80b0d7;
    border: solid 2px #5398d1;
  }
  
  .notification-close {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .notification-close svg {
    width: 1.5rem;
    height: 1.5rem;
    padding-left: 16rem;
    color: #646161;
  }
  
  .svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
  .title {
    font-size: 1.25rem;
    margin-left: 20px;
  }
  
  .notification p {
    color: rgb(88, 86, 86);
    text-align: center;
    padding-right: 4rem;
    margin-left: 3rem;
  }
  </style>
  