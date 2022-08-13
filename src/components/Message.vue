<template>
  <li class="message-list-item list-none py-3 px-3.5">
    <h5 class="message-author-name float-left m-0 text-sm color-blue-violet-crayola">{{ props.message.authorName }}</h5>
    <div class="message-time float-right text-sm color-maximum-blue-purple">{{ time(props.message.timestamp) }}</div>
    <div class="message-text clear-both pt-10 text-sm">{{ props.message.text }}</div>
  </li>
</template>

<script setup>
const props = defineProps({
  message: Object,
});

const time = (value) => new Date(value).toLocaleTimeString();
</script>
