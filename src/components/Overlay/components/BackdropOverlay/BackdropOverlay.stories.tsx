import type { ReactElement } from 'react';

import classNames from 'classnames';

import { useGetColor } from '@common/hooks';

import { Center } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_BACKDROP_OVERLAY_BLUR__ } from './common/constants';
import type { BackdropOverlayBlur, BackdropOverlayDefaultElement, BackdropOverlayProps } from './common/types';
import type { BackdropOverlayStory, BackdropOverlayStoryMeta } from './common/types/story';
import { BackdropOverlay as BackdropOverlayComponent } from '.';

export default {
	title: 'Overlay/BackdropOverlay',
	component: BackdropOverlayComponent,
	argTypes: {
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
			] as BackdropOverlayBlur[],
			control: { type: 'radio' }
		}
	}
} as BackdropOverlayStoryMeta;

export const BackdropOverlay: BackdropOverlayStory = (
	props: BackdropOverlayProps<BackdropOverlayDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const text = useGetColor({ color, colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
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
