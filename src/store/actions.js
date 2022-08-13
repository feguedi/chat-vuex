import * as api from '../api';

export function getAllMessages({ commit }) {
  api.getAllMessages(messages => {
    commit('receiveAll', messages);
  });
}

export function sendMessage({ commit }, payload) {
  api.createMessage(payload, message => {
    commit('receiveMessage', message);
  });
}

export function switchThread({ commit }, payload) {
  commit('switchThread', payload);
}
