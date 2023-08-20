import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Text } from '@components/Typography/components/Text';

import { Center } from '../Center';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import type { AspectRatioProps, AspectRatioRatios } from './common/types';
import type { AspectRatioStory, AspectRatioStoryMeta } from './common/types/story';
import { AspectRatio as AspectRatioComponent } from '.';

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

export const AspectRatio: AspectRatioStory = (props: AspectRatioProps<PolymorphicDefaultElement>): ReactElement => {
	const radius = classes.borders.borderRadius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<AspectRatioComponent {...props} as={Center} className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
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
			</Text>
		</AspectRatioComponent>
	);
};
