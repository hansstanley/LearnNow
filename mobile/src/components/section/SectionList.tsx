import {FlatList, ScrollView, Stack} from 'native-base';
import {SECTIONS} from '../../utils/sample';
import SectionItem from './SectionItem';

export default function SectionList() {
  return (
    <Stack space={2}>
      {SECTIONS.map(s => (
        <SectionItem key={s.id} section={s} />
      ))}
    </Stack>
  );
  return (
    <FlatList
      data={SECTIONS}
      renderItem={({item}) => <SectionItem key={item.id} section={item} />}
    />
  );
}
