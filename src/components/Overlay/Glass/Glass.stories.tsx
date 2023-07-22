/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';

import { __DEFAULT_GLASS_SIZE__ } from './common/constants';
import { GlassProps } from './common/types';
import { GlassStory, GlassStoryMeta } from './common/types/story';
import GlassComponent from '.';

export default {
	title: 'Overlay/Glass',
	component: GlassComponent,
	argTypes: {
		size: {
			name: 'Size (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_GLASS_SIZE__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as GlassStoryMeta;

export const Glass: GlassStory = (props: GlassProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<GlassComponent {...props} className={classNames('w-full', radius, text, background, padding)}>
			<h6>Hello</h6>
		</GlassComponent>
	);
};
