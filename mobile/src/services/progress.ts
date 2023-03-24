import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReadProgress} from '../types/progress';

const LAST_PROGRESS_KEY = '@last_progress';

export async function getLastProgress() {
  try {
    const json = await AsyncStorage.getItem(LAST_PROGRESS_KEY);
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

export async function storeLastProgress(progress: ReadProgress) {
  try {
    const json = JSON.stringify(progress);
    await AsyncStorage.setItem(LAST_PROGRESS_KEY, json);
  } catch (err) {
    console.error(err);
  }
}
