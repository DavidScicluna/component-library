import { useGetColor } from '../../../../common/hooks';
import type { PolymorphicDefaultElement, ThemeBlurClassArr, ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';
import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
	DEFAULT_GLASS_OVERLAY_BLUR,
	DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
	DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND,
	DEFAULT_GLASS_OVERLAY_RADIUS
} from './common/constants';
import type { GlassOverlayBlurType, GlassOverlayProps } from './common/types';
import type { GlassOverlayStory, GlassOverlayStoryMeta } from './common/types/story';
import { GlassOverlay as GlassOverlayComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Overlay/GlassOverlay',
	component: GlassOverlayComponent,
	argTypes: {
		backdropAmount: {
			name: 'Backdrop Amount',
			type: 'string',
			defaultValue: DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: DEFAULT_GLASS_OVERLAY_BLUR,
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
			defaultValue: DEFAULT_GLASS_OVERLAY_BLUR_TYPE,
			// description: '',
			options: ['backdrop', 'blur'] as Array<GlassOverlayBlurType>,
			control: { type: 'radio' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_GLASS_OVERLAY_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as GlassOverlayStoryMeta;

export const GlassOverlay: GlassOverlayStory = (props: GlassOverlayProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<GlassOverlayComponent {...props} color={color} colorMode={colorMode}>
			<Center className={classNames(background)} w='100%' h='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</GlassOverlayComponent>
	);
};
