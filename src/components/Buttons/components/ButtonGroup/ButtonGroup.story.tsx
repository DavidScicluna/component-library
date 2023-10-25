import type { ReactElement } from 'react';

import { range } from 'lodash-es';

import type { FlexDirectionClassArr, PolymorphicDefaultElement } from '@common/types';

import type { ButtonSize, ButtonVariant } from '@components/Buttons';
import { Button } from '@components/Buttons';
import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '@components/Buttons/components/Button/common/constants';
import { Center } from '@components/Layout';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from './common/constants';
import type { ButtonGroupProps } from './common/types';
import type { ButtonGroupStory, ButtonGroupStoryMeta } from './common/types/story';
import { ButtonGroupItem } from './components';
import { ButtonGroup as ButtonGroupComponent } from '.';

const buttons = range(4);

export default {
	title: 'Buttons/ButtonGroup',
	component: ButtonGroupComponent,
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
			defaultValue: __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_COMPACT__,
			// description: '',
			control: { type: 'boolean' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_FULLWIDTH__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: __DEFAULT_BUTTON_IS_ROUND__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_BUTTON_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<ButtonSize>,
			control: { type: 'radio' }
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: __DEFAULT_BUTTON_VARIANT__,
			// description: '',
			options: ['contained', 'light', 'dark', 'outlined', 'monochrome', 'text'] as Array<ButtonVariant>,
			control: { type: 'radio' }
		}
	}
} as ButtonGroupStoryMeta;

export const ButtonGroup: ButtonGroupStory = (props: ButtonGroupProps<PolymorphicDefaultElement>): ReactElement => {
	const { color, colorMode } = useStorybookContext();

	return (
		<Center w='100%'>
			<ButtonGroupComponent {...props} color={color} colorMode={colorMode}>
				{buttons.map((button, index) => (
					<ButtonGroupItem key={button} index={index} total={buttons.length}>
						{(props) => <Button {...props}> {`Button ${index + 1}`}</Button>}
					</ButtonGroupItem>
				))}
			</ButtonGroupComponent>
		</Center>
	);
};
