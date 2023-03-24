import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReadProgress} from '../types/progress';

const LAST_PROGRESS_KEY = '@last_progress';

export async function getLastProgress(username: string) {
  try {
    const json = await AsyncStorage.getItem(getLastProgressKey(username));
    if (!json) {
      return null;
    }
    const progress: ReadProgress = JSON.parse(json);
    return progress;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function storeLastProgress(
  username: string,
  progress: ReadProgress,
) {
  console.log(username, progress);
  try {
    const json = JSON.stringify(progress);
    await AsyncStorage.setItem(getLastProgressKey(username), json);
  } catch (err) {
    console.error(err);
  }
}

function getLastProgressKey(username: string) {
  return `${LAST_PROGRESS_KEY}/${username}`;
}
