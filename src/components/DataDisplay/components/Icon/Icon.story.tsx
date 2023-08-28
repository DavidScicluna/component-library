import type { ReactElement } from 'react';

import classNames from 'classnames';
import { sample } from 'lodash-es';

import classes from '@common/classes';
import { icons } from '@common/data';
import type { ThemeFontSizeArr, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

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

export const Icon: IconStory = (props: IconProps<IconDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const fontSize = classes.typography.font_size['6xl'];

	const radius = classes.borders.border_radius.base;

	return (
		<Center w='auto' p={4}>
			<IconComponent
				{...props}
				className={classNames(fontSize, radius)}
				color={color}
				colorMode={colorMode}
				w='auto'
				h='auto'
				p={4}
			/>
		</Center>
	);
};
