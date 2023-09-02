import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { BackdropBlurClassArr, PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography/components/Text';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_RADIUS__
} from './common/constants';
import type { GlassOverlayBlurTypes, GlassOverlayProps } from './common/types';
import type { GlassOverlayStory, GlassOverlayStoryMeta } from './common/types/story';
import { GlassOverlay as GlassOverlayComponent } from '.';

export default {
	title: 'Overlay/GlassOverlay',
	component: GlassOverlayComponent,
	argTypes: {
		backdropAmount: {
			name: 'Backdrop Amount',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_OVERLAY_BACKDROP_AMOUNT__,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_OVERLAY_BLUR__,
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
			] as BackdropBlurClassArr,
			control: { type: 'radio' }
		},
		blurType: {
			name: 'Blur Type',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_OVERLAY_BLUR_TYPE__,
			// description: '',
			options: ['backdrop', 'blur'] as GlassOverlayBlurTypes,
			control: { type: 'radio' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_GLASS_OVERLAY_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as GlassOverlayStoryMeta;

// TODO: MAybe replace any with default polymorphic element type
export const GlassOverlay: GlassOverlayStory = (props: GlassOverlayProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

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
