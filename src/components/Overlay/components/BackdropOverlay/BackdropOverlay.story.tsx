import type { ReactElement } from 'react';

import { useGetColor } from '@common/hooks';
import type { ThemeBlurClassArr, ThemeRadiusArr } from '@common/types';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR__,
	__DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
	__DEFAULT_BACKDROP_OVERLAY_RADIUS__
} from './common/constants';
import type { BackdropOverlayBlurType, BackdropOverlayProps } from './common/types';
import type { BackdropOverlayStory, BackdropOverlayStoryMeta } from './common/types/story';
import { BackdropOverlay as BackdropOverlayComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Overlay/BackdropOverlay',
	component: BackdropOverlayComponent,
	argTypes: {
		amount: {
			name: 'Amount',
			type: 'string',
			defaultValue: __DEFAULT_BACKDROP_OVERLAY_AMOUNT__,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_BACKDROP_OVERLAY_BLUR__,
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
			defaultValue: __DEFAULT_BACKDROP_OVERLAY_BLUR_TYPE__,
			// description: '',
			options: ['backdrop', 'blur'] as Array<BackdropOverlayBlurType>,
			control: { type: 'radio' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_BACKDROP_OVERLAY_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		}
	}
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (props: BackdropOverlayProps<any>): ReactElement => {
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
