<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
      <Message
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </ul>
    <textarea
      class="message-composer"
      v-model="text"
      @keyup.enter="sendMessage"
      cols="30"
      rows="10"
    ></textarea>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from 'vue';
import { useStore } from 'vuex';
import Message from './Message.vue';

const store = useStore();
const list = ref(null);
const text = ref('');
const thread = computed(() => store.getters.currentThread);
const messages = computed(() => store.getters.sortedMessages);

watch(() => thread.value.lastMessage, () => {
  nextTick(() => {
    const ul = list.value;
    ul.scrollTop = ul.scrollHeight;
  });
});

function sendMessage() {
  const trimedText = text.value.trim();

  if (trimedText) {
    store.dispatch('sendMessage', {
      text: trimedText,
      thread: thread.value,
    });
    text = '';
  }
}
</script>
