import { useGetColor } from '../../../../common/hooks';
import type { PolymorphicDefaultElement, ThemeBlurClassArr, ThemeRadiusArr } from '../../../../common/types';
import React from 'react';
import { Center } from '../../../Layout';
import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_BACKDROP_OVERLAY_AMOUNT,
	DEFAULT_BACKDROP_OVERLAY_BLUR,
	DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
	DEFAULT_BACKDROP_OVERLAY_RADIUS
} from './common/constants';
import type { BackdropOverlayBlurType, BackdropOverlayProps } from './common/types';
import type { BackdropOverlayStory, BackdropOverlayStoryMeta } from './common/types/story';
import { BackdropOverlay as BackdropOverlayComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Overlay/BackdropOverlay',
	component: BackdropOverlayComponent,
	argTypes: {
		amount: {
			name: 'Amount',
			type: 'string',
			defaultValue: DEFAULT_BACKDROP_OVERLAY_AMOUNT,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: DEFAULT_BACKDROP_OVERLAY_BLUR,
			// description: '',
			options: [
				'none',
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
			] as ThemeBlurClassArr,
			control: { type: 'radio' }
		},
		blurType: {
			name: 'Blur Type',
			type: 'string',
			defaultValue: DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE,
			// description: '',
			options: ['backdrop', 'blur'] as Array<BackdropOverlayBlurType>,
			control: { type: 'radio' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_BACKDROP_OVERLAY_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (
	props: BackdropOverlayProps<PolymorphicDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<BackdropOverlayComponent {...props} color={color} colorMode={colorMode} w='100%' h='100%'>
			<Center className={classNames(background)} p={4} m={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</BackdropOverlayComponent>
	);
};
