/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { __DEFAULT_SPACING__ } from '../../../common/constants';
import { useGetColor } from '../../../common/hooks';

import { CenterProps } from './common/types';
import { CenterStory, CenterStoryMeta } from './common/types/story';
import CenterComponent from '.';

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

export const Center: CenterStory = (props: CenterProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<CenterComponent {...props} className={classNames('w-full', radius, text, background, padding)}>
			<h6>Hello</h6>
			<h6>Hello</h6>
		</CenterComponent>
	);
};
