import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReadProgress} from '../types/progress';

const LAST_PROGRESS_KEY = '@last_progress';
const PROGRESSES_KEY = '@progresses';
const LAST_SECTION_KEY = '@last_section';

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
  try {
    const json = JSON.stringify(progress);
    await AsyncStorage.setItem(getLastProgressKey(username), json);
  } catch (err) {
    console.error(err);
  }
}

export async function getProgresses(username: string): Promise<ReadProgress[]> {
  try {
    const json = await AsyncStorage.getItem(getProgressesKey(username));
    if (!json) {
      return [];
    }
    const progresses: ReadProgress[] = JSON.parse(json);
    return progresses;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function storeProgresses(
  username: string,
  progresses: ReadProgress[],
) {
  try {
    const json = JSON.stringify(progresses);
    await AsyncStorage.setItem(getProgressesKey(username), json);
  } catch (err) {
    console.error(err);
  }
}

function getProgressesKey(username: string) {
  return `${PROGRESSES_KEY}/${username}`;
}

function getLastSectionKey(username: string) {
  return `${LAST_SECTION_KEY}/${username}`;
}

function getLastProgressKey(username: string) {
  return `${LAST_PROGRESS_KEY}/${username}`;
}
