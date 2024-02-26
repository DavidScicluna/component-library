import { DEFAULT_RADIUS } from '../../../../common/constants';
import type { PolymorphicDefaultElement, ThemeRadiusArr } from '../../../../common/types';
import { AspectRatio } from '../../../Layout';

import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_IMAGE_FILTERS, DEFAULT_IMAGE_OPTIONS } from './common/constants';
import type { ImageProps } from './common/types';
import type { ImageStory, ImageStoryMeta } from './common/types/story';
import { Image as ImageComponent } from '.';

export default {
	title: 'Data Display/Image',
	component: ImageComponent,
	argTypes: {
		filters: {
			name: 'Filters',
			type: 'string',
			defaultValue: DEFAULT_IMAGE_FILTERS,
			// description: '',
			control: { type: 'object' }
		},
		options: {
			name: 'Options',
			type: 'string',
			defaultValue: DEFAULT_IMAGE_OPTIONS,
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
		}
	}
} as ImageStoryMeta;

export const Image: ImageStory = (props: ImageProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<AspectRatio w='100%' maxW='250px' h='100%' ratio='portrait'>
			<ImageComponent
				{...props}
				w='100%'
				h='100%'
				color={color}
				colorMode={colorMode}
				boring={{ src: '' }}
				thumbnail={{ src: '' }}
				full={{ src: '' }}
			/>
		</AspectRatio>
	);
};
