import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types/polymorphic';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography/components/Text';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_GLASS_OVERLAY_BLUR__,
	__DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_GLASS_OVERLAY_IS_BACKDROP__
} from './common/constants';
import type { GlassOverlayBlur, GlassOverlayProps } from './common/types';
import type { GlassOverlayStory, GlassOverlayStoryMeta } from './common/types/story';
import { GlassOverlay as GlassOverlayComponent } from '.';

export default {
	title: 'Overlay/GlassOverlay',
	component: GlassOverlayoCmponent,
	argTypes: {
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
			] as Array<GlassOverlayBlur>,
			control: { type: 'radio' }
		},
		isBackdrop: {
			name: 'Backdrop',
			type: 'boolean',
			defaultValue: __DEFAULT_GLASS_OVERLAY_IS_BACKDROP__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_GLASS_OVERLAY_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as GlassOverlayStoryMeta;

// TODO: MAybe replace any with default polymorphic element type
export const GlassOverlay: GlassOverlayStory = (props: GlassOverlayProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<GlassOverlayComponent {...props} className={classNames(radius)} color={color} colorMode={colorMode} w='100%'>
			<Center className={classNames(background)} w='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</GlassOverlayComponent>
	);
};
