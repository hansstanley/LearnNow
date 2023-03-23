import {Chapter} from '../types/chapter';
import {LastPosition} from '../types/progress';
import {Section} from '../types/section';

// export const CHAPTERS: Chapter[] = [
//   {id: 0, title: 'Chapter 1', description: 'This is the first chapter.'},
//   {id: 1, title: 'Chapter 2', description: 'This is the second chapter.'},
//   {id: 2, title: 'Chapter 3', description: 'This is the third chapter.'},
//   {id: 3, title: 'Chapter 4', description: 'This is the fourth chapter.'},
//   {id: 4, title: 'Chapter 5', description: 'This is the fifth chapter.'},
//   {id: 5, title: 'Chapter 6', description: 'This is the sixth chapter.'},
//   {id: 6, title: 'Chapter 7', description: 'This is the seventh chapter.'},
//   {id: 7, title: 'Chapter 8', description: 'This is the eighth chapter.'},
// ];

export const SECTIONS: Section[] = [
  {
    id: 0,
    title: 'Section 1',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'Section 2',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Section 3',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Section 4',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Section 5',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Section 6',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 6,
    title: 'Section 7',
    summary: 'This is the first section',
    isCompleted: false,
  },
  {
    id: 7,
    title: 'Section 8',
    summary: 'This is the first section',
    isCompleted: false,
  },
];

export const LAST_POSITION: LastPosition = {
  chapterId: 3,
  sectionId: 5,
};

// export function getChapter(chapterId: number) {
//   return CHAPTERS.find(c => c.id === chapterId);
// }

export function getSection(sectionId: number) {
  return SECTIONS.find(s => s.id === sectionId);
}
