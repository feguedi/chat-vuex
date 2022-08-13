<template>
  <div class="chatapp max-w-3xl container mx-auto overflow-hidden">
    <ThreadSection />
    <MessageSection />
  </div>  
</template>

<script setup>
import ThreadSection from './components/ThreadSection.vue';
import MessageSection from './components/MessageSection.vue';
</script>

<style>
  .chatapp {
    font-family: 'Muli', 'Helvetica Neue', helvetica, arial;
  }
</style>
