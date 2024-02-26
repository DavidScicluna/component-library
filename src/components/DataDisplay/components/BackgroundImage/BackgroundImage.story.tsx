import { DEFAULT_RADIUS } from '../../../../common/constants';
import { useGetColor } from '../../../../common/hooks';
import type { ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import { DEFAULT_BACKGROUND_IMAGE_FILTERS, DEFAULT_BACKGROUND_IMAGE_OPTIONS } from './common/constants';
import type { BackgroundImageProps } from './common/types';
import type { BackgroundImageStory, BackgroundImageStoryMeta } from './common/types/story';
import { BackgroundImage as BackgroundImageComponent } from '.';

export default {
	title: 'Data Display/BackgroundImage',
	component: BackgroundImageComponent,
	argTypes: {
		filters: {
			name: 'Filters',
			type: 'string',
			defaultValue: DEFAULT_BACKGROUND_IMAGE_FILTERS,
			// description: '',
			control: { type: 'object' }
		},
		options: {
			name: 'Options',
			type: 'string',
			defaultValue: DEFAULT_BACKGROUND_IMAGE_OPTIONS,
			// description: '',
			control: { type: 'object' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		src: {
			name: 'Src',
			type: 'string',
			defaultValue: '',
			// description: '',
			control: { type: 'text' }
		}
	}
} as BackgroundImageStoryMeta;

export const BackgroundImage: BackgroundImageStory = (props: BackgroundImageProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ color, colorMode, colorType: 'default', hueType: 'background', classType: 'text' });

	return (
		<BackgroundImageComponent
			{...props}
			// color={color}
			// colorMode={colorMode}
			w='100%'
			h='100%'
		>
			<Center w='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</BackgroundImageComponent>
	);
};
