import type { ReactElement } from 'react';

import { icons } from '@common/data';
import type { PolymorphicDefaultElement } from '@common/types';

import type { IconButtonSize, IconButtonVariant } from '@components/Buttons/IconButton';
import { constants, IconButton, IconButtonIcon } from '@components/Buttons/IconButton';
import { Center } from '@components/Layout';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../.storybook/preview';

import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import type { IconButtonGroupProps } from './common/types';
import type { IconButtonGroupStory, IconButtonGroupStoryMeta } from './common/types/story';
import { IconButtonGroupItem } from './components';
import { IconButtonGroup as IconButtonGroupComponent } from '.';

const {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} = constants;

const iconbuttons = icons.filter((_icon, index) => index < 4);

export default {
	title: 'Buttons/IconButtonGroup',
	component: IconButtonGroupComponent,
	argTypes: {
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

export const IconButtonGroup: IconButtonGroupStory = (
	props: IconButtonGroupProps<PolymorphicDefaultElement>
): ReactElement => {
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
