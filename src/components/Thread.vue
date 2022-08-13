<template>
  <li
    class="thread-list-item list-none cursor-pointer
    px-3 py-3.5
    border-b-2 border-b-solid border-b-light-gray
    hover:bg-ghost-white bg-white
    "
    :class="{ 'bg-lavender-web hover:bg-lavender-web cursor-default hover:cursor-default': props.active }"
    @click="handleLiClick"
  >
    <h5 class="thread-name">{{ props.thread.name }}</h5>
    <div class="thread-time">{{ time(props.thread.lastMessage.timestamp) }}</div>
    <div class="thread-last-message">{{ props.thread.lastMessage.text }}</div>
  </li>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { defineEmits } from 'vue';

const props = defineProps({
  thread: Object,
  active: Boolean,
});

const emit = defineEmits(['switch-thread']);
const handleLiClick = () => emit('switch-thread', props.thread.id);

const time = (value) => new Date(value).toLocaleTimeString();
</script>
