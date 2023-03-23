import axios from 'axios';
import {Chapter} from '../types/chapter';
import {Section} from '../types/section';

const BASE_URL = 'http://10.0.2.2:8000/learn/';

export async function getChapters() {
  return axios
    .get<Chapter[]>('chapters/', {baseURL: BASE_URL})
    .then(res => res.data);
}

export async function getChapter(chapterId: number) {
  return axios
    .get<Chapter[]>(`chapters/${chapterId}/`, {baseURL: BASE_URL})
    .then(res => {
      if (res.data.length) {
        return res.data[0];
      } else {
        throw new Error(`Chapter ${chapterId} not found`);
      }
    });
}

export async function getSections(chapterId: number) {
  return axios
    .get<Section[]>(`chapters/${chapterId}/sections`, {baseURL: BASE_URL})
    .then(res => res.data);
}
