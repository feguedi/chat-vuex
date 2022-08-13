<template>
  <div class="chatapp max-w-3xl container mx-auto overflow-hidden">
    <ThreadSection />
    <MessageSection />
  </div>  
</template>

<script>
import { useStore } from 'vuex';
import ThreadSection from './components/ThreadSection.vue';
import MessageSection from './components/MessageSection.vue';

export default {
  setup() {
    const store = useStore();
    store.dispatch('getAllMessages');
  },
  components: {
    MessageSection,
    ThreadSection,
  },
};
</script>

<style>
  .chatapp {
    font-family: 'Muli', 'Helvetica Neue', helvetica, arial;
  }
</style>
