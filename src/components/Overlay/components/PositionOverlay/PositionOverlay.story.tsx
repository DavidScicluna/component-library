import { useGetColor } from '@common/hooks';
import type { ThemeBlurClassArr, ThemeRadiusArr } from '@common/types';

import { AspectRatio, Center } from '@components/Layout';
import { Text } from '@components/Typography';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import {
	__DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
	__DEFAULT_POSITION_OVERLAY_BLUR__,
	__DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
	__DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
	__DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
	__DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
	__DEFAULT_POSITION_OVERLAY_RADIUS__
} from './common/constants';
import type { PositionOverlayBlurType, PositionOverlayProps } from './common/types';
import type { PositionOverlayStory, PositionOverlayStoryMeta } from './common/types/story';
import { PositionOverlay as PositionOverlayComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Overlay/PositionOverlay',
	component: PositionOverlayComponent,
	argTypes: {
		backdropAmount: {
			name: 'Backdrop Amount',
			type: 'string',
			defaultValue: __DEFAULT_POSITION_OVERLAY_BACKDROP_AMOUNT__,
			// description: '',
			control: { type: 'number' }
		},
		blur: {
			name: 'Blur',
			type: 'string',
			defaultValue: __DEFAULT_POSITION_OVERLAY_BLUR__,
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
			defaultValue: __DEFAULT_POSITION_OVERLAY_BLUR_TYPE__,
			// description: '',
			options: ['backdrop', 'blur'] as Array<PositionOverlayBlurType>,
			control: { type: 'radio' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_POSITION_OVERLAY_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		isVisible: {
			name: 'Visible',
			type: 'boolean',
			defaultValue: __DEFAULT_POSITION_OVERLAY_IS_VISIBLE__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasGlass: {
			name: 'Glass',
			type: 'boolean',
			defaultValue: __DEFAULT_POSITION_OVERLAY_HAS_GLASS__,
			// description: '',
			control: { type: 'boolean' }
		},
		hasBackground: {
			name: 'Has Background',
			type: 'boolean',
			defaultValue: __DEFAULT_POSITION_OVERLAY_HAS_BACKGROUND__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as PositionOverlayStoryMeta;

export const PositionOverlay: PositionOverlayStory = (props: PositionOverlayProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const overlay = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'bg' });
	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<PositionOverlayComponent
			{...props}
			color={color}
			colorMode={colorMode}
			overlays={[
				{
					renderOverlay: () => <Center w='24px' h='24px' className={classNames(overlay)} />,
					placement: 'middle-start'
				},
				{
					renderOverlay: () => <Center w='24px' h='24px' className={classNames(overlay)} />,
					placement: 'middle-center'
				},
				{
					renderOverlay: () => <Center w='24px' h='24px' className={classNames(overlay)} />,
					placement: 'middle-end'
				}
			]}
		>
			<AspectRatio ratio='video'>
				<Center className={classNames(background)} w='100%' h='100%' p={4}>
					<Text align='center' color={text}>
						Hello
					</Text>
				</Center>
			</AspectRatio>
		</PositionOverlayComponent>
	);
};
