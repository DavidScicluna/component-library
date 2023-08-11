import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography/components/Text';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import type { HeadlineProps } from './common/types';
import type { HeadlineStory, HeadlineStoryMeta } from './common/types/story';
import { Headline as HeadlineComponent } from '.';

export default {
	title: 'Data Display/Headline',
	component: HeadlineComponent
} as HeadlineStoryMeta;

export const Headline: HeadlineStory = (props: HeadlineProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<HeadlineComponent
			{...props}
			w='100%'
			color={color}
			colorMode={colorMode}
			renderLeft={({ h }) => (
				<Center w={h} h={h}>
					Left
				</Center>
			)}
			renderRight={({ h }) => (
				<Center w={h} h={h}>
					Right
				</Center>
			)}
			renderCaption={(props) => <Text {...props}>Caption</Text>}
			renderTitle={(props) => <Text {...props}>Title</Text>}
			renderSubtitle={(props) => <Text {...props}>Subtitle</Text>}
		/>
	);
};
