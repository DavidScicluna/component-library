import type { ReactElement } from 'react';

import { __DEFAULT_RADIUS__ } from '@common/constants';
import type { ThemeRadiusArr } from '@common/types';

import { AspectRatio } from '@components/Layout';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { __DEFAULT_IMAGE_FILTERS__, __DEFAULT_IMAGE_OPTIONS__ } from './common/constants';
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
			defaultValue: __DEFAULT_IMAGE_FILTERS__,
			// description: '',
			control: { type: 'object' }
		},
		options: {
			name: 'Options',
			type: 'string',
			defaultValue: __DEFAULT_IMAGE_OPTIONS__,
			// description: '',
			control: { type: 'object' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as ImageStoryMeta;

export const Image: ImageStory = (props: ImageProps<any>): ReactElement => {
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
