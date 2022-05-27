import { ReactElement } from 'react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

import icons from '../../../common/data/icons';
import TextareaComponent from '../../../components/Forms/Textarea';
import {
	autoComplete as defaultAutoComplete,
	colorMode as defaultColorMode,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isWarning as defaultIsWarning,
	isSuccess as defaultIsSuccess,
	isFocused as defaultIsFocused,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isFullWidth as defaultIsFullWidth,
	resize as defaultResize,
	size as defaultSize
} from '../../../components/Forms/Textarea/common/data/defaultPropValues';
import {
	TextareaAutoComplete,
	TextareaColor,
	TextareaPanelRenderProps,
	TextareaResize,
	TextareaSize,
	TextareaProps
} from '../../../components/Forms/Textarea/types';
import Icon from '../../../components/Icon';
// eslint-disable-next-line max-len
// import { TextareaColor, TextareaProps, TextareaRef, TextareaSize, Textarea as TextareaComponent, TextareaHeader, TextareaBody, TextareaFooter } from '../..';
import controls from '../../common/controls';

const autoCompleteOptions: TextareaAutoComplete[] = ['on', 'password', 'off'];

const colorOptions: TextareaColor[] = [
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
const defaultColor: TextareaColor = sample(colorOptions) || colorOptions[0];

const renderMapping = Object.assign(
	{ none: undefined },
	...icons.map((icon) => {
		return {
			[icon]: ({ colorMode }: TextareaPanelRenderProps) => <Icon colorMode={colorMode} icon={icon} />
		};
	})
);

const resizeOptions: TextareaResize[] = ['horizontal', 'vertical', 'none'];

const sizeOptions: TextareaSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Forms/Textarea',
	component: TextareaComponent,
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
		colorMode: { ...controls.theme.colorMode, defaultValue: defaultColorMode },
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
		resize: {
			name: 'Resize',
			type: 'string',
			defaultValue: defaultResize,
			// description: '',
			options: [...resizeOptions],
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
	}
	// parameters: {
	// 	backgrounds: {
	// 		default: 'twitter',
	// 		values: [
	// 			{ name: 'twitter', value: '#00aced' },
	// 			{ name: 'facebook', value: '#3b5998' }
	// 		]
	// 	}
	// }
} as Meta;

export const Textarea: Story = (props: TextareaProps): ReactElement => <TextareaComponent {...props} />;
