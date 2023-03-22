import {Heading, ScrollView, Stack, Text} from 'native-base';
import {SectionScreenProps} from '../types/navigation';

export default function SectionScreen({route}: SectionScreenProps) {
  const section = route.params.section;

  return (
    <ScrollView>
      <Stack space={2} p={5}>
        <Text _light={{color: 'primary.800'}} _dark={{color: 'primary.200'}}>
          {section.summary}
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
          mauris finibus, consequat mauris in, bibendum urna. Curabitur eget
          ligula nisl. Donec at porta purus. Praesent cursus quam ac ligula
          scelerisque congue. Proin sodales ipsum nec pellentesque congue. Etiam
          pharetra egestas eros, a scelerisque elit ultrices non. Mauris cursus,
          dui id aliquet auctor, mi nunc lobortis metus, sed dignissim tortor
          metus vestibulum ex. Ut aliquam augue est, dignissim condimentum neque
          venenatis sit amet. Donec tristique enim tellus, non pretium nisi
          condimentum ac. Vivamus id arcu lacus. Nunc vel ultrices quam.
          Praesent nec viverra purus, vehicula venenatis libero. Aenean mollis
          augue neque, quis vehicula libero cursus a. Donec enim ligula,
          faucibus sed lectus non, iaculis pharetra elit.
        </Text>
      </Stack>
    </ScrollView>
  );
}
