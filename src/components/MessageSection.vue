<template>
  <div class="message-section float-right w-2/3">
    <h3 class="message-thread-heading m-0 h-10">
      {{ thread.name }}
    </h3>
    <ul ref="list" class="message-list border-2 border-solid border-lavender h-96 m-0 p-0 overflow-y-auto text-md">
      <Message
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </ul>
    <textarea
      v-model="text"
      class="message-composer box-border text-sm h-20 w-full mx-5 p-2.5"
      cols="30"
      rows="10"
      @keyup.enter="sendMessage"
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
    text.value = '';
  }
}
</script>
