import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import Text from '@components/Typography/components/Text';

import type { CenterProps } from './common/types';
import type { CenterStory, CenterStoryMeta } from './common/types/story';
import { Center as CenterComponent } from '.';

export default {
	title: 'Layout/Center',
	component: CenterComponent,
	argTypes: {
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as CenterStoryMeta;

export const Center: CenterStory = (props: CenterProps<PolymorphicDefaultElement>): ReactElement => {
	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<CenterComponent {...props} className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
				Hello
			</Text>
			<Text align='center' color={text}>
				Hello
			</Text>
		</CenterComponent>
	);
};
