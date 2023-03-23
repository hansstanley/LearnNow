import {Stack} from 'native-base';
import {useEffect, useState} from 'react';
import {getChapters} from '../../services/api';
import {Chapter} from '../../types/chapter';
import ChapterItem from './ChapterItem';

export default function ChapterList() {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    getChapters()
      .then(c => setChapters(c))
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Stack space={2}>
      {chapters.map(c => (
        <ChapterItem key={c.pk} chapter={c} />
      ))}
    </Stack>
  );
}
