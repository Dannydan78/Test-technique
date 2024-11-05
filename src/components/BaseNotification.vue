<template>
    <div v-if="showNotification">
        <div class="notification" :class="notificationClass">
            <div class="header">
                <img :src="notification.path" alt="Notification Icon" class="svg">
                <h2 class="title">Modal Window</h2>
                <button class="notification-close" @click="hideNotification">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
// Permet de passer la showNotification a false pour hidden la notification
function hideNotification() {
    showNotification.value = false
};
</script>

<style scoped>
.notification {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    max-width: 500px;
    color: white;
}

.header {
    display: flex;
    align-items: center;
    width: 100%;
}

.notification-danger {
    background-color: #de7d73;
}

.notification-warning {
    background-color: #b8a24c;
}

.notification-success {
    background-color: #2ecc71;
}

.notification-info {
    background-color: #3498db;
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
}

.svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
}

.title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-left: 2rem;
}

.notification p {
    text-align: center;

}
</style>
