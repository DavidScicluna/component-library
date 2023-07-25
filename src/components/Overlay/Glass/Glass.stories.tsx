import { ReactElement } from 'react';

import classNames from 'classnames';

import { BackdropBlurArr } from '@common/types/classes';

import Center from '@components/Layout/components/Center';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';

import { __DEFAULT_GLASS_BLUR__, __DEFAULT_GLASS_HAS_BACKGROUND__ } from './common/constants';
import type { GlassProps } from './common/types';
import type { GlassStory, GlassStoryMeta } from './common/types/story';
import GlassComponent from '.';

export default {
	title: 'Overlay/Glass',
	component: GlassComponent,
	argTypes: {
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_BLUR__,
			// description: '',
			options: ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl'] as BackdropBlurArr,
			control: { type: 'radio' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_GLASS_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as GlassStoryMeta;

export const Glass: GlassStory = (props: GlassProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<GlassComponent {...props} className={classNames('w-full', radius)}>
			<Center className={classNames('w-full', text, background, padding)}>
				<h6>Hello</h6>
			</Center>
		</GlassComponent>
	);
};
