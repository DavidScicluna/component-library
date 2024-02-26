import { useGetColor } from '../../../../common/hooks';
import React from 'react';
import { Center } from '../../../Layout';
import { Text } from '../../../Typography';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import type { HideProps } from './common/types';
import type { HideStory, HideStoryMeta } from './common/types/story';
import { Hide as HideComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Other/Hide',
	component: HideComponent,
	argTypes: {
		hasBackground: {
			name: 'Is Hiden',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as HideStoryMeta;

export const Hide: HideStory = (props: HideProps): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<HideComponent {...props}>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</HideComponent>
	);
};
