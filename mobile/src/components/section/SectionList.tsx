import {FlatList, ScrollView, Stack} from 'native-base';
import {useState} from 'react';
import {Section} from '../../types/section';
import SectionItem from './SectionItem';

export interface SectionListProps {
  sections: Section[];
}

export default function SectionList({sections}: SectionListProps) {
  return (
    <Stack space={2}>
      {sections.map(s => (
        <SectionItem key={s.pk} section={s} />
      ))}
    </Stack>
  );
}
