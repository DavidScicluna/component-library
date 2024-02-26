import { icons } from '../../../../common/data';
import type { FlexDirectionClassArr } from '../../../../common/types';

import type { IconButtonSize, IconButtonVariant } from '../IconButton';
import { IconButton, IconButtonIcon } from '../IconButton';
import {
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '../IconButton/common/constants';
import { Center } from '../../../Layout';
import { DEFAULT_STACK_DIRECTION } from '../../../Layout/components/Stacks/Stack/common/constants';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED } from './common/constants';
import type { IconButtonGroupDefaultElement, IconButtonGroupProps } from './common/types';
import type { IconButtonGroupStory, IconButtonGroupStoryMeta } from './common/types/story';
import { IconButtonGroupItem } from './components';
import { IconButtonGroup as IconButtonGroupComponent } from '.';

const iconbuttons = icons.filter((_icon, index) => index < 4);

export default {
	title: 'Buttons/IconButtonGroup',
	component: IconButtonGroupComponent,
	argTypes: {
		direction: {
			name: 'Direction',
			type: 'string',
			defaultValue: DEFAULT_STACK_DIRECTION,
			// description: '',
			options: ['row', 'row-reverse', 'column', 'column-reverse'] as FlexDirectionClassArr,
			control: { type: 'radio' }
		},
		isAttached: {
			name: 'Attached',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_COMPACT,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: DEFAULT_ICON_BUTTON_IS_ROUND,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_ICON_BUTTON_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<IconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: DEFAULT_ICON_BUTTON_VARIANT,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'icon'] as Array<IconButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as IconButtonGroupStoryMeta;

export const IconButtonGroup: IconButtonGroupStory = (
	props: IconButtonGroupProps<IconButtonGroupDefaultElement>
): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<IconButtonGroupComponent {...props} color={color} colorMode={colorMode}>
				{iconbuttons.map((icon, index) => (
					<IconButtonGroupItem key={icon} index={index} total={iconbuttons.length}>
						{(props) => (
							<IconButton {...props}>
								<IconButtonIcon icon={icon} category='filled' />
							</IconButton>
						)}
					</IconButtonGroupItem>
				))}
			</IconButtonGroupComponent>
		</Center>
	);
};
