import type { ReactElement } from 'react';

import classNames from 'classnames';
import { sample } from 'lodash-es';

import classes from '@common/classes';
import icons from '@common/data/icons';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';

import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_ICON_CATEGORY__, __DEFAULT_ICON_VARIANT__ } from './common/constants';
import type { IconCategory, IconProps, IconVariant } from './common/types';
import type { IconStory, IconStoryMeta } from './common/types/story';
import IconComponent from '.';

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

export const Icon: IconStory = (props: IconProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const fontSize = classes.typography.fontSize['6xl'];

	const radius = classes.borders.borderRadius.base;

	const padding = classes.spacing.p[4];

	return (
		<Center className={classNames('w-auto')}>
			<IconComponent
				{...props}
				className={classNames('w-auto', 'h-auto', fontSize, radius, padding)}
				color={color}
				colorMode={colorMode}
			/>
		</Center>
	);
};
