import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';
import {Chapter} from '../types/chapter';
import {Section} from '../types/section';

const BASE_URL = 'http://10.0.2.2:8000/learn/';

const jar = new CookieJar();
const client = wrapper(axios.create({jar}));

export async function login(username: string, password: string) {
  return client.post(
    `login/`,
    {username, password},
    {
      baseURL: BASE_URL,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    },
  );
}

export async function getChapters() {
  return client
    .get<Chapter[]>('chapters', {baseURL: BASE_URL})
    .then(res => res.data);
}

export async function getChapter(chapterId: number) {
  return client
    .get<Chapter[]>(`chapters/${chapterId}`, {baseURL: BASE_URL})
    .then(res => {
      if (res.data.length) {
        return res.data[0];
      } else {
        throw new Error(`Chapter ${chapterId} not found`);
      }
    });
}

export async function getSections(chapterId: number) {
  return client
    .get<Section[]>(`chapters/${chapterId}/sections`, {baseURL: BASE_URL})
    .then(res => res.data);
}

export async function getSection(chapterId: number, sectionId: number) {
  return client
    .get<Section[]>(`chapters/${chapterId}/sections/${sectionId}`, {
      baseURL: BASE_URL,
    })
    .then(res => {
      if (res.data.length) {
        return res.data[0];
      } else {
        throw new Error(
          `Section ${sectionId} of chapter ${chapterId} not found`,
        );
      }
    });
}
