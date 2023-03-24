import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReadProgress} from '../types/progress';
import {Section} from '../types/section';

const PROGRESSES_KEY = '@progresses';
const LAST_SECTION_KEY = '@last_section';

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

export async function getLastSection(
  username: string,
): Promise<Section | null> {
  try {
    const json = await AsyncStorage.getItem(getLastSectionKey(username));
    if (!json) {
      return null;
    }
    const section: Section = JSON.parse(json);
    return section;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function storeLastSection(username: string, section: Section) {
  try {
    const json = JSON.stringify(section);
    await AsyncStorage.setItem(getLastSectionKey(username), json);
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
