<template>
  <div class="thread-section float-left w-1/3">
    <div class="thread-count h-20 m-0">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>
    </div>
    <ul class="thread-list border-2 border-solid border-lavender h-96 m-0 p-0 overflow-y-auto text-md hover:bg-ghost-white">
      <Thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Thread from './Thread.vue';

const store = useStore();

const threads = computed(() => store.getters.threads);
const currentThread = computed(() => store.getters.currentThread);
const unreadCount = computed(() => store.getters.unreadCount);
const switchThread = (id) => store.dispatch('switchThread', id);
</script>
