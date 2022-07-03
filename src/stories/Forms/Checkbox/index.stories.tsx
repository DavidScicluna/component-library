import { ReactElement } from 'react';

import { VStack } from '@chakra-ui/react';

import { sample } from 'lodash';

import { Meta, Story } from './types';

// import icons from '../../../common/data/icons';
import CheckboxComponent from '../../../components/Forms/Checkbox';
import {
	isChecked as defaultIsChecked,
	isIndeterminate as defaultIsIndeterminate,
	isDisabled as defaultIsDisabled,
	isError as defaultIsError,
	isWarning as defaultIsWarning,
	isSuccess as defaultIsSuccess,
	isReadOnly as defaultIsReadOnly,
	isRequired as defaultIsRequired,
	isFullWidth as defaultIsFullWidth,
	size as defaultSize,
	variant as defaultVariant
} from '../../../components/Forms/Checkbox/common/data/defaultPropValues';
import CheckboxSubtitle from '../../../components/Forms/Checkbox/components/CheckboxSubtitle';
import CheckboxTitle from '../../../components/Forms/Checkbox/components/CheckboxTitle';
import {
	CheckboxColor,
	// CheckboxPanelRenderProps,
	CheckboxSize,
	CheckboxVariant,
	CheckboxProps
} from '../../../components/Forms/Checkbox/types';
// import Icon from '../../../components/Icon';
// eslint-disable-next-line max-len
// import { CheckboxColor, CheckboxProps, CheckboxRef, CheckboxSize, Checkbox as CheckboxComponent, CheckboxHeader, CheckboxBody, CheckboxFooter } from '../..';
import controls from '../../common/controls';

const colorOptions: CheckboxColor[] = [
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
const defaultColor: CheckboxColor = sample(colorOptions) || colorOptions[0];

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

export const Checkbox: Story = (props: CheckboxProps): ReactElement => <CheckboxComponent {...props} />;
