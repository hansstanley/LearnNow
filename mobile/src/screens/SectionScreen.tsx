import {Heading, ScrollView, Stack, Text} from 'native-base';
import {SectionScreenProps} from '../types/navigation';

export default function SectionScreen({route}: SectionScreenProps) {
  const section = route.params.section;

  return (
    <ScrollView>
      <Stack space={2} p={5}>
        <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
          {section.fields.summary}
        </Text>
        <Text>{section.fields.content}</Text>
      </Stack>
    </ScrollView>
  );
}
