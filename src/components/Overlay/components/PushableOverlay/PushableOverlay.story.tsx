import React from 'react';
import { __DEFAULT_RADIUS__ } from '../../../../common/constants';
import type { ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';

import { useStorybookContext } from '../../..//Provider/components/StorybookProvider';

import {
	__DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
	__DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
	__DEFAULT_PUSHABLE_OVERLAY_VARIANT__
} from './common/constants';
import type { PushableOverlayProps, PushableOverlayVariant } from './common/types';
import type { PushableOverlayStory, PushableOverlayStoryMeta } from './common/types/story';
import { PushableOverlay as PushableOverlayComponent } from '.';

export default {
	title: 'Overlay/PushableOverlay',
	component: PushableOverlayComponent,
	argTypes: {
		isActive: {
			name: 'Active',
			type: 'boolean',
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_IS_FIXED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isPushable: {
			name: 'Pushable',
			type: 'boolean',
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE__,
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
			defaultValue: __DEFAULT_PUSHABLE_OVERLAY_VARIANT__,
			// description: '',
			options: [
				'contained',
				'light',
				'dark',
				'outlined',
				'monochrome',
				'transparent',
				'unstyled'
			] as Array<PushableOverlayVariant>,
			control: { type: 'radio' }
		}
	}
} as PushableOverlayStoryMeta;

export const PushableOverlay: PushableOverlayStory = (props: PushableOverlayProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<PushableOverlayComponent {...props} color={color} colorMode={colorMode} w='100%'>
			<Center as='span' w='100%' h='100%'>
				Hello
			</Center>
		</PushableOverlayComponent>
	);
};
