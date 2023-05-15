import { ReactElement } from 'react';

import { Center, HStack, VStack } from '@chakra-ui/react';

import { sample } from 'lodash-es';

import {
	FormControl,
	FormControlSize,
	FormDescription,
	FormHelperText,
	FormLabel,
	PasswordInput as PasswordInputComponent,
	PasswordInputProps,
	PasswordStrengthLabel,
	PasswordStrengthTooltip,
	ScaleFade
} from '../../..';
// import icons from '../../../common/data/icons';
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

// const renderMapping = Object.assign(
// 	{ none: undefined },
// 	...icons.map((icon) => {
// 		return {
// 			[icon]: ({ colorMode }: InputRenderProps) => <Icon colorMode={colorMode} icon={icon} />
// 		};
// 	})
// );

const sizeOptions: FormControlSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
	title: 'Forms/Password Input',
	component: PasswordInputComponent,
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
		// renderLeft: {
		// 	name: 'Left Element',
		// 	defaultValue: 'none',
		// 	// description: '',
		// 	options: ['none', ...icons],
		// 	mapping: { ...renderMapping },
		// 	control: 'select'
		// },
		// renderRight: {
		// 	name: 'Right Element',
		// 	defaultValue: 'none',
		// 	// description: '',
		// 	options: ['none', ...icons],
		// 	mapping: { ...renderMapping },
		// 	control: 'select'
		// },
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: defaultSize,
			// description: '',
			options: [...sizeOptions],
			control: 'select'
		},
		value: {
			name: 'Value',
			type: 'string',
			defaultValue: 'Hello I am a Password',
			// description: '',
			control: 'text'
		}
	},
	parameters: { backgrounds: { ...parameters.backgrounds } }
} as Meta;

export const PasswordInput: Story = (props: PasswordInputProps): ReactElement => (
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
		<HStack width='100%' alignItems='stretch' justifyContent='space-between' spacing={0}>
			<VStack width='100%' alignItems='stretch' justifyContent='stretch' spacing={0}>
				<FormLabel htmlFor='123'>Label</FormLabel>
				<FormDescription>Description</FormDescription>
			</VStack>
			<ScaleFade in={((props.value as string) || '').length >= 8}>
				<Center width='100%' height='100%'>
					<PasswordStrengthLabel
						minWidth='125px'
						colorMode={props.colorMode}
						password={(props.value as string) || ''}
					/>
				</Center>
			</ScaleFade>
		</HStack>
		<PasswordStrengthTooltip
			color={props.color}
			colorMode={props.colorMode}
			renderAction={({ onOpen, onClose }) => (
				<PasswordInputComponent
					{...props}
					id='123'
					onFocus={typeof onOpen === 'function' ? () => onOpen() : undefined}
					onBlur={typeof onClose === 'function' ? () => onClose() : undefined}
					onMouseEnter={typeof onOpen === 'function' ? () => onOpen() : undefined}
					onMouseLeave={typeof onClose === 'function' ? () => onClose() : undefined}
				/>
			)}
			isOpen
			password={(props.value as string) || ''}
			placement='bottom'
		/>
		<FormHelperText>Helper Text</FormHelperText>
	</FormControl>
);
