import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import icons from '../../../common/data/icons';
import InputComponent from '../../../components/Forms/Input';
import {
	autoComplete as defaultAutoComplete,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isFocused as defaultIsFocused,
	isFullWidth as defaultIsFullWidth,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isSuccess as defaultIsSuccess,
	isWarning as defaultIsWarning,
	size as defaultSize
} from '../../../components/Forms/Input/common/data/defaultPropValues';
import {
	InputAutoComplete,
	InputColor,
	InputPanelRenderProps,
	InputProps,
	InputSize
} from '../../../components/Forms/Input/types';
import Icon from '../../../components/Icon';
// eslint-disable-next-line max-len
// import { InputColor, InputProps, InputRef, InputSize, Input as InputComponent, InputHeader, InputBody, InputFooter } from '../..';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const autoCompleteOptions: InputAutoComplete[] = ['on', 'password', 'off'];

const colorOptions: InputColor[] = [
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
const defaultColor: InputColor = sample(colorOptions) || colorOptions[0];

const renderMapping = Object.assign(
	{ none: undefined },
	...icons.map((icon) => {
		return {
			[icon]: ({ colorMode }: InputPanelRenderProps) => <Icon colorMode={colorMode} icon={icon} />
		};
	})
);

const sizeOptions: InputSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Forms/Input',
	component: InputComponent,
	argTypes: {
		autoComplete: {
			name: 'AutoComplete',
			type: 'string',
			defaultValue: defaultAutoComplete,
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
		label: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello I am a Label',
			// description: '',
			control: 'text'
		},
		placeholder: {
			name: 'Placeholder',
			type: 'string',
			defaultValue: 'Hello I am a placeholder',
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
			options: ['none', ...icons],
			mapping: { ...renderMapping },
			control: 'select'
		},
		renderRightPanel: {
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

export const Input: Story = (props: InputProps): ReactElement => <InputComponent {...props} />;
