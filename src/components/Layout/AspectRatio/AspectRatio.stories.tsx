/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';
import Center from '../Center';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import { AspectRatioProps, AspectRatioRatios } from './common/types';
import { AspectRatioStory, AspectRatioStoryMeta } from './common/types/story';
import AspectRatioComponent from '.';

export default {
	title: 'Layout/AspectRatio',
	component: AspectRatioComponent,
	argTypes: {
		ratio: {
			name: 'Ratio',
			type: 'string',
			defaultValue: __DEFAULT_ASPECT_RATIO_RATIO__,
			// description: '',
			options: ['auto', 'square', 'video', 'widescreen', 'portrait', 'standard', 'vertical'] as AspectRatioRatios,
			control: { type: 'radio' }
		}
	}
} as AspectRatioStoryMeta;

export const AspectRatio: AspectRatioStory = (props: AspectRatioProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<AspectRatioComponent
			{...props}
			as={Center}
			className={classNames('w-full', radius, text, background, padding)}
		>
			<h6>
				{props.ratio === 'portrait'
					? '4/5'
					: props.ratio === 'square'
					? '1/1'
					: props.ratio === 'standard'
					? '4/3'
					: props.ratio === 'vertical'
					? '9/16'
					: props.ratio === 'video' || props.ratio === 'widescreen'
					? '16/9'
					: 'Auto'}
			</h6>
		</AspectRatioComponent>
	);
};
