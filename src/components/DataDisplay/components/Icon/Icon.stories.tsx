import type { ReactElement } from 'react';

import classNames from 'classnames';
import { sample } from 'lodash-es';

import classes from '@common/classes';
import icons from '@common/data/icons';

import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ } from './common/constants';
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
			options: ['filled', 'outlined', 'twoTone'] as IconCategory[],
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_ICON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'outlined', 'monochrome', 'transparent', 'unstyled'] as IconVariant[],
			control: { type: 'radio' }
		}
	}
} as IconStoryMeta;

export const Icon: IconStory = (props: IconProps<IconDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const fontSize = classes.typography.fontSize['6xl'];

	const radius = classes.borders.borderRadius.base;

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
