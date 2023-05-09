import { ReactElement } from 'react';

import { sample } from 'lodash-es';

import {
	Textarea as TextareaComponent,
	TextareaAutoComplete,
	TextareaPanelRenderProps,
	TextareaProps,
	TextareaResize,
	TextareaSize
} from '../../..';
import icons from '../../../common/data/icons';
import { AppColor, AppColors } from '../../../common/types';
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
	resize as defaultResize,
	size as defaultSize
} from '../../../components/Forms/Textarea/common/default/props';
import Icon from '../../../components/DataDisplay/Icon';
import controls from '../../common/controls';
import parameters from '../../common/parameters';

import { Meta, Story } from './types';

const autoCompleteOptions: TextareaAutoComplete[] = ['on', 'password', 'off'];

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
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const Textarea: Story = (props: TextareaProps): ReactElement => <TextareaComponent {...props} />;
