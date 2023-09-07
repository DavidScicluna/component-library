import type { ReactElement } from 'react';

import { __DEFAULT_RADIUS__ } from '@common/constants';
import type { PolymorphicDefaultElement, ThemeRadiusArr } from '@common/types';

import { Skeleton } from '@components/Feedback';
import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import {
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
	__DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import type { DummyPushableOverlayProps, DummyPushableOverlayVariant } from './common/types';
import type { DummyPushableOverlayStory, DummyPushableOverlayStoryMeta } from './common/types/story';
import { DummyPushableOverlay as DummyPushableOverlayComponent } from '.';

export default {
	title: 'Overlay/DummyPushableOverlay',
	component: DummyPushableOverlayComponent,
	argTypes: {
		isAnimated: {
			name: 'Animated',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED__,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: __DEFAULT_RADIUS__,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'boolean',
			defaultValue: __DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT__,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'transparent'
			] as Array<DummyPushableOverlayVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyPushableOverlayStoryMeta;

export const DummyPushableOverlay: DummyPushableOverlayStory = (
	props: DummyPushableOverlayProps<PolymorphicDefaultElement>
): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<DummyPushableOverlayComponent {...props} color={color} colorMode={colorMode} w='100%'>
			<Skeleton color={color} colorMode={colorMode} isLoaded={false} radius='base'>
				<Center as='span' w='100%' h='100%'>
					Hello
				</Center>
			</Skeleton>
		</DummyPushableOverlayComponent>
	);
};