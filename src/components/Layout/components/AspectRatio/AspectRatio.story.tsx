import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeAspectRatioArr } from '@common/types';

import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { Center } from '../Center';

import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './common/constants';
import type { AspectRatioProps } from './common/types';
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
			options: [
				'auto',
				'square',
				'video',
				'widescreen',
				'portrait',
				'standard',
				'vertical'
			] as ThemeAspectRatioArr,
			control: { type: 'radio' }
		}
	}
} as AspectRatioStoryMeta;

export const AspectRatio: AspectRatioStory = (props: AspectRatioProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

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
