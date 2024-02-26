import { Center } from '../../../Layout';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import type { HeadlineProps } from './common/types';
import type { HeadlineStory, HeadlineStoryMeta } from './common/types/story';
import { Headline as HeadlineComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Data Display/Headline',
	component: HeadlineComponent
} as HeadlineStoryMeta;

export const Headline: HeadlineStory = (props: HeadlineProps<PolymorphicDefaultElement>): JSX.Element => {
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
