import { sample } from 'lodash-es';

import { icons } from '../../../../common/data';
import type { ThemeFontSizeArr, ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	__DEFAULT_ICON_CATEGORY__,
	__DEFAULT_ICON_RADIUS__,
	__DEFAULT_ICON_SIZE__,
	__DEFAULT_ICON_VARIANT__
} from './common/constants';
import type { IconCategory, IconDefaultElement, IconProps, IconVariant } from './common/types';
import type { IconStory, IconStoryMeta } from './common/types/story';
import { Icon as IconComponent } from '.';

export default {
	title: 'Data Display/Icon',
	component: IconComponent,
	argTypes: {
		icon: {
			name: 'Icon',
			type: 'string',
			defaultValue: sample(icons),
			// description: '',
			options: icons,
			control: { type: 'select' }
		},
		category: {
			name: 'Category',
			type: 'string',
			defaultValue: __DEFAULT_ICON_CATEGORY__,
			// description: '',
			options: ['filled', 'outlined', 'twoTone'] as Array<IconCategory>,
			control: { type: 'radio' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_ICON_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_ICON_SIZE__,
			// description: '',
			options: [
				'xs',
				'sm',
				'md',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			] as ThemeFontSizeArr,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_ICON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'outlined', 'monochrome', 'transparent', 'unstyled'] as Array<IconVariant>,
			control: { type: 'radio' }
		}
	}
} as IconStoryMeta;

export const Icon: IconStory = (props: IconProps<IconDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='auto' p={4}>
			<IconComponent {...props} color={color} colorMode={colorMode} p={4} />
		</Center>
	);
};
