<template>
    <div class="notification" :class="notificationClass">
      <div class="header">
        <img :src="notification.path" alt="Notification Icon" class="svg">
        <p class="title">Modal Window</p>
        <button class="notification-close" @click="remove">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
        magna fringilla urna, porttitor
      </p>
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

</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/dm-sans');

.notification {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
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
  background-color: #F7E4E4;
  border: solid 2px #D29393;
}

.notification-warning {
  background-color: #F7F2E4;
  border: solid 2px #D4C296;
}

.notification-success {
  background-color: #E4F7E8;
  border: solid 2px #89B291;
}

.notification-info {
  background-color: #E4E9F7;
  border: solid 2px #96A8D8;
}

.svg {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.rem;
  padding-left: 5px;
}

.notification-close {
  background-color: transparent;
  border: none;
  color: #646161;
  cursor: pointer;
  margin-left: auto;
}

.notification-close svg {
  width: 1.25rem;
  height: 1.25rem;
}


.title {
  font-size: 1.4rem;
  margin-left: 10px;
  font-weight: 500
  
}

.text {
  color: #575757;
  text-align: left;
  padding-right: 1rem;
  margin-left: 2.5rem;
}
</style>