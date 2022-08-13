<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>
    </div>
    <ul class="thread-list">
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
