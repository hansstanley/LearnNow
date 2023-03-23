export interface Section {
  pk: number;
  fields: {
    title: string;
    summary: string;
    content: string;
    chapter: number;
  };
}
