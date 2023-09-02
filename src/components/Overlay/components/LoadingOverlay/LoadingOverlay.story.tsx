import type { ReactElement } from 'react';

import classNames from 'classnames';

import { useGetColor } from '@common/hooks';
import type { BackdropBlurClassArr, PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Spinner } from '@components/Feedback';
import { Center } from '@components/Layout';
import { Text } from '@components/Typography/components/Text';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from './common/constants';
import type { LoadingOverlayBlurTypes, LoadingOverlayProps } from './common/types';
import type { LoadingOverlayStory, LoadingOverlayStoryMeta } from './common/types/story';
import { LoadingOverlay as LoadingOverlayComponent } from '.';

export default {
	title: 'Overlay/LoadingOverlay',
	component: LoadingOverlayComponent,
	argTypes: {
		backdropAmount: {
			name: 'Backdrop Amount',
			type: 'string',
			defaultValue: __DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_LOADING_OVERLAY_BLUR__,
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
			defaultValue: __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
			// description: '',
			options: ['backdrop', 'blur'] as LoadingOverlayBlurTypes,
			control: { type: 'radio' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_LOADING_OVERLAY_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		isLoading: {
			name: 'Loading',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_IS_LOADING__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasGlass: {
			name: 'Glass',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as LoadingOverlayStoryMeta;

export const LoadingOverlay: LoadingOverlayStory = (
	props: LoadingOverlayProps<PolymorphicDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	const spinner = useGetColor({ colorType: 'default', hueType: 'text.primary' });
	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<LoadingOverlayComponent
			{...props}
			renderSpinner={() => <Spinner color={spinner} size='9xl' variant='puff' />}
			color={color}
			colorMode={colorMode}
		>
			<Center className={classNames(background)} w='100%' p={4}>
				<Text align='center' color={text}>
					Hello
				</Text>
			</Center>
		</LoadingOverlayComponent>
	);
};
