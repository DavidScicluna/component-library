import type { ReactElement } from 'react';

import { icons } from '@common/data';
import type { FlexDirectionClassArr } from '@common/types';

import type { IconButtonSize, IconButtonVariant } from '@components/Buttons';
import { IconButton, IconButtonIcon } from '@components/Buttons';
import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '@components/Buttons/components/IconButton/common/constants';
import { Center } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import type { IconButtonGroupProps } from './common/types';
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
			defaultValue: __DEFAULT_STACK_DIRECTION__,
			// description: '',
			options: ['row', 'row-reverse', 'column', 'column-reverse'] as FlexDirectionClassArr,
			control: { type: 'radio' }
		},
		isAttached: {
			name: 'Attached',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_ICON_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_ICON_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<IconButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_ICON_BUTTON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'icon'] as Array<IconButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as IconButtonGroupStoryMeta;

export const IconButtonGroup: IconButtonGroupStory = (props: IconButtonGroupProps<any>): ReactElement => {
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
