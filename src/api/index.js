import data from './mock_data';

const LATENCY = 16;

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data);
  }, LATENCY);
}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const id = `m_${  timestamp}`

  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan'
  };

  setTimeout(() => {
    cb(message);
  }, LATENCY);
}
