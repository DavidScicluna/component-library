import { ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import {
	Checkbox as CheckboxComponent,
	CheckboxProps,
	CheckboxSize,
	CheckboxSubtitle,
	CheckboxTitle,
	CheckboxVariant
} from '../../..';
import { AppColor, AppColors } from '../../../common/types';
// import icons from '../../../common/data/icons';
import {
	isChecked as defaultIsChecked,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFullWidth as defaultIsFullWidth,
	isIndeterminate as defaultIsIndeterminate,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize,
	variant as defaultVariant
} from '../../../components/Forms/Checkbox/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const colorOptions: AppColors = [
	'pink',
	'purple',
	'deep_purple',
	'indigo',
	'blue',
	'light_blue',
	'cyan',
	'teal',
	'light_green',
	'lime',
	'orange',
	'deep_orange'
];
const defaultColor: AppColor = sample(colorOptions) || colorOptions[0];

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

const sizeOptions: CheckboxSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

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
		label: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello I am a Label',
			// description: '',
			control: 'text'
		},
		helper: {
			name: 'Helper',
			type: 'string',
			defaultValue: 'Hello I am the helper text',
			// description: '',
			control: 'text'
		},
		isChecked: {
			name: 'Checked',
			type: 'boolean',
			defaultValue: defaultIsChecked,
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
		isFullWidth: {
			name: 'FullWidth',
			type: 'boolean',
			defaultValue: defaultIsFullWidth,
			// description: '',
			control: 'boolean'
		},
		renderLeftPanel: {
			name: 'Left Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', 'panel'],
			mapping: { ...renderMapping },
			control: 'select'
		},
		renderRightPanel: {
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

export const Checkbox: Story = (props: CheckboxProps): ReactElement => <CheckboxComponent {...props} />;
