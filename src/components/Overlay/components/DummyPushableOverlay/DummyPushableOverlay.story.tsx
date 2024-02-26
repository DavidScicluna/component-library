import { DEFAULT_RADIUS } from '../../../../common/constants';
import type { PolymorphicDefaultElement, ThemeRadiusArr } from '../../../../common/types';

import { Skeleton } from '../../../Feedback';
import { Center } from '../../../Layout';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import {
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT
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
			defaultValue: DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_ANIMATED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_PUSHABLE_OVERLAY_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		radius: {
			name: 'Radius',
			type: 'string',
			defaultValue: DEFAULT_RADIUS,
			// description: '',
			options: ['none', 'xs', 'sm', 'base', 'lg', 'xl', 'full'] as ThemeRadiusArr,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'boolean',
			defaultValue: DEFAULT_DUMMY_PUSHABLE_OVERLAY_VARIANT,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'transparent',
				'unstyled'
			] as Array<DummyPushableOverlayVariant>,
			control: { type: 'radio' }
		}
	}
} as DummyPushableOverlayStoryMeta;

export const DummyPushableOverlay: DummyPushableOverlayStory = (
	props: DummyPushableOverlayProps<PolymorphicDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<DummyPushableOverlayComponent {...props} color={color} colorMode={colorMode} w='100%' h='100%' p={2}>
			<Skeleton color={color} colorMode={colorMode} isLoaded={false} radius='base'>
				<Center as='span' w='100%' h='100%'>
					Hello
				</Center>
			</Skeleton>
		</DummyPushableOverlayComponent>
	);
};
