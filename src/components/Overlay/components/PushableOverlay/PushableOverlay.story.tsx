import React from 'react';
import { DEFAULT_RADIUS } from '../../../../common/constants';
import type { ThemeRadiusArr } from '../../../../common/types';

import { Center } from '../../../Layout';

import { useStorybookContext } from '../../..//Provider/components/StorybookProvider';

import {
	DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
	DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
	DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
	DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
	DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
	DEFAULT_PUSHABLE_OVERLAY_VARIANT
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
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_IS_ACTIVE,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFixed: {
			name: 'Fixed',
			type: 'boolean',
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_IS_FIXED,
			// description: '',
			control: { type: 'boolean' }
		},
		isOutlined: {
			name: 'Outlined',
			type: 'boolean',
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_IS_OUTLINED,
			// description: '',
			control: { type: 'boolean' }
		},
		isPushable: {
			name: 'Pushable',
			type: 'boolean',
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_IS_PUSHABLE,
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
			defaultValue: DEFAULT_PUSHABLE_OVERLAY_VARIANT,
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
