import { ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import {
	FormControl,
	FormControlSize,
	FormDescription,
	FormHelperText,
	FormLabel,
	Icon,
	Input as InputComponent,
	InputAutoComplete,
	InputProps,
	InputRenderProps
} from '../../..';
import icons from '../../../common/data/icons';
import { AppColor, AppColors } from '../../../common/types';
import {
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../components/Forms/FormControl/common/default/props';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const autoCompleteOptions: InputAutoComplete[] = ['on', 'password', 'off'];

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
	...icons.map((icon) => {
		return {
			[icon]: ({ colorMode }: InputRenderProps) => <Icon colorMode={colorMode} icon={icon} />
		};
	})
);

const sizeOptions: FormControlSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Forms/Input',
	component: InputComponent,
	argTypes: {
		autoComplete: {
			name: 'AutoComplete',
			type: 'string',
			defaultValue: 'off',
			// description: '',
			options: [...autoCompleteOptions],
			control: 'radio'
		},
		color: {
			name: 'Color',
			type: 'string',
			defaultValue: defaultColor,
			// description: '',
			options: [...colorOptions],
			control: 'select'
		},
		colorMode: { ...controls.theme.colorMode },
		placeholder: {
			name: 'Placeholder',
			type: 'string',
			defaultValue: 'Hello I am a placeholder',
			// description: '',
			control: 'text'
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
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: defaultIsFocused,
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
			options: ['none', ...icons],
			mapping: { ...renderMapping },
			control: 'select'
		},
		renderRight: {
			name: 'Right Element',
			defaultValue: 'none',
			// description: '',
			options: ['none', ...icons],
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
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Input: Story = (props: InputProps): ReactElement => (
	<FormControl
		color={props.color}
		colorMode={props.colorMode}
		isDisabled={props.isDisabled}
		isError={props.isError}
		isFocused={props.isFocused}
		isReadOnly={props.isReadOnly}
		isRequired={props.isRequired}
		isSuccess={props.isSuccess}
		isWarning={props.isWarning}
		size={props.size}
	>
		<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
			<FormLabel htmlFor='123'>Label</FormLabel>
			<FormDescription>Description</FormDescription>
		</VStack>
		<InputComponent {...props} id='123' />
		<FormHelperText>Helper Text</FormHelperText>
	</FormControl>
);
