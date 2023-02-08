import { getDatabase, ref, onValue, set } from 'firebase/database';

export const useRealTimeData = (userId, score) => {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);

  set(reference, {
    highscore: score
  });

  console.log('Todo good mi bro');
}