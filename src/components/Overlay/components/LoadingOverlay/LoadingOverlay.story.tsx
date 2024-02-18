import { useGetColor } from '@common/hooks';
import type { ThemeBlurClassArr, ThemeRadiusArr } from '@common/types';

import { PuffSpinner } from '@components/Feedback';
import { Center } from '@components/Layout';
import { Text } from '@components/Typography';
import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_LOADING_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_LOADING_OVERLAY_BLUR__,
	__DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
	__DEFAULT_LOADING_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_LOADING_OVERLAY_HAS_GLASS__,
	__DEFAULT_LOADING_OVERLAY_IS_LOADING__,
	__DEFAULT_LOADING_OVERLAY_RADIUS__
} from './common/constants';
import type { LoadingOverlayBlurType, LoadingOverlayProps } from './common/types';
import type { LoadingOverlayStory, LoadingOverlayStoryMeta } from './common/types/story';
import { LoadingOverlay as LoadingOverlayComponent } from '.';

import classNames from 'classnames';

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
			] as ThemeBlurClassArr,
			control: { type: 'radio' }
		},
		blurType: {
			name: 'Blur Type',
			type: 'string',
			defaultValue: __DEFAULT_LOADING_OVERLAY_BLUR_TYPE__,
			// description: '',
			options: ['backdrop', 'blur'] as Array<LoadingOverlayBlurType>,
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

export const LoadingOverlay: LoadingOverlayStory = (props: LoadingOverlayProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const spinner = useGetColor({ colorMode, colorType: 'default', hueType: 'text.primary' });
	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<LoadingOverlayComponent
			{...props}
			renderSpinner={() => <PuffSpinner color={spinner} size='9xl' variant='puff' />}
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
