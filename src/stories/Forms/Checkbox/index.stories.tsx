import { ReactElement } from 'react';

import { Center, VStack } from '@chakra-ui/react';

import {
	Checkbox as CheckboxComponent,
	CheckboxProps,
	CheckboxSubtitle,
	CheckboxTitle,
	CheckboxVariant,
	FormControlSize
} from '../../..';
import { color as defaultColor } from '../../../common/default/props';
import { AppColors } from '../../../common/types';
import {
	isChecked as defaultIsChecked,
	isCompact as defaultIsCompact,
	isIndeterminate as defaultIsIndeterminate,
	isRound as defaultIsRound,
	variant as defaultVariant
} from '../../../components/Forms/Checkbox/common/default/props';
import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../components/Forms/FormControl/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: AppColors = [
	'gray',
	'red',
	'pink',
	'purple',
	'deep_purple',
	'indigo',
	'blue',
	'light_blue',
	'cyan',
	'teal',
	'green',
	'light_green',
	'lime',
	'yellow',
	'orange',
	'deep_orange'
];

const renderMapping = Object.assign(
	{ none: undefined },
	{
		panel: () => (
			<VStack width='100%' alignItems='flex-start' justifyContent='center' spacing={0}>
				<CheckboxTitle>I am a Title</CheckboxTitle>
				<CheckboxSubtitle>I am a Subtitle</CheckboxSubtitle>
			</VStack>
		)
	}
);

const sizeOptions: FormControlSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const variantOptions: CheckboxVariant[] = ['outlined', 'transparent'];

export default {
	title: 'Forms/Checkbox',
	component: CheckboxComponent,
	argTypes: {
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: defaultIsChecked,
			// description: '',
			control: 'boolean'
		},
		isCompact: {
			name: 'Compact',
			type: 'boolean',
			defaultValue: defaultIsCompact,
			// description: '',
			control: 'boolean'
		},
		isRound: {
			name: 'Round',
			type: 'boolean',
			defaultValue: defaultIsRound,
			// description: '',
			control: 'boolean'
		},
		isIndeterminate: {
			name: 'Indeterminate',
			type: 'boolean',
			defaultValue: defaultIsIndeterminate,
			// description: '',
			control: 'boolean'
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: defaultIsDisabled,
			// description: '',
			control: 'boolean'
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: defaultIsError,
			// description: '',
			control: 'boolean'
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: defaultIsWarning,
			// description: '',
			control: 'boolean'
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: defaultIsSuccess,
			// description: '',
			control: 'boolean'
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: defaultIsReadOnly,
			// description: '',
			control: 'boolean'
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: defaultIsRequired,
			// description: '',
			control: 'boolean'
		},
		renderLeft: {
			name: 'Left Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', 'panel'],
			mapping: { ...renderMapping },
			control: 'select'
		},
		renderRight: {
			name: 'Right Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', 'panel'],
			mapping: { ...renderMapping },
			control: 'select'
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		},
		variant: {
			name: 'Variant',
			type: 'string',
			defaultValue: defaultVariant,
			// description: '',
			options: [...variantOptions],
			control: 'radio'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Checkbox: Story = (props: CheckboxProps): ReactElement => (
	<Center>
		<CheckboxComponent {...props} />
	</Center>
);
