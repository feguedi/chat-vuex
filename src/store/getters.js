export const threads = (state) => state.threads;

export function currentThread(state) {
  return state.currentThreadID
    ? state.threads[state.currentThreadID]
    : {};
}

export function currentMessages(state) {
  const thread = currentThread(state);
  return thread.messages
    ? thread.messages.map(id => state.messages[id])
    : [];
}

export function unreadCount({ threads }) {
  return Object.keys(threads).reduce((count, id) => {
    return threads[id].lastMessage.isRead ? count : count + 1;
  }, 0);
}

export function sortedMessages(state, getters) {
  const messages = getters.currentMessages;
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp);
}
