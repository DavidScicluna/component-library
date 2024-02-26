import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';
import type { AlignItemsClassArr, JustifyContentClassArr } from '../../../../common/types';

import { Box } from '../../../Box';
import {
	DEFAULT_STACK_ALIGN_ITEMS,
	DEFAULT_STACK_JUSTIFY_CONTENT
} from '../../../Layout/components/Stacks/Stack/common/constants';
import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import { FormDescription } from '../FormDescription';
import { FormHeader } from '../FormHeader';
import { FormHelperText } from '../FormHelperText';
import { FormLabel } from '../FormLabel';

import {
	DEFAULT_FORM_CONTROL_IS_DISABLED,
	DEFAULT_FORM_CONTROL_IS_ERROR,
	DEFAULT_FORM_CONTROL_IS_FOCUSED,
	DEFAULT_FORM_CONTROL_IS_READONLY,
	DEFAULT_FORM_CONTROL_IS_REQUIRED,
	DEFAULT_FORM_CONTROL_IS_SUCCESS,
	DEFAULT_FORM_CONTROL_IS_WARNING,
	DEFAULT_FORM_CONTROL_SIZE,
	DEFAULT_FORM_CONTROL_SPACING
} from './common/constants';
import type { FormControlDefaultElement, FormControlProps, FormControlSize } from './common/types';
import type { FormControlStory, FormControlStoryMeta } from './common/types/story';
import { FormControl as FormControlComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Forms/FormControl',
	component: FormControlComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: DEFAULT_STACK_ALIGN_ITEMS,
			// description: '',
			options: ['center', 'baseline', 'flex-start', 'flex-end', 'stretch'] as AlignItemsClassArr,
			control: { type: 'radio' }
		},
		justifyContent: {
			name: 'Justify Content',
			type: 'string',
			defaultValue: DEFAULT_STACK_JUSTIFY_CONTENT,
			// description: '',
			options: [
				'center',
				'flex-start',
				'flex-end',
				'stretch',
				'normal',
				'space-between',
				'space-around',
				'space-evenly'
			] as JustifyContentClassArr,
			control: { type: 'radio' }
		},
		isDisabled: {
			name: 'Disabled',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_DISABLED,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_ERROR,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_FOCUSED,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_READONLY,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_REQUIRED,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_SUCCESS,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: DEFAULT_FORM_CONTROL_IS_WARNING,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: DEFAULT_FORM_CONTROL_SIZE,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<FormControlSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: DEFAULT_FORM_CONTROL_SPACING,
			// description: '',
			control: { type: 'number' }
		}
	}
} as FormControlStoryMeta;

export const FormControl: FormControlStory = (props: FormControlProps<FormControlDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<FormControlComponent {...props}>
			<FormHeader
				{...props}
				renderLabel={() => <FormLabel>Form Label</FormLabel>}
				renderDescription={() => <FormDescription>Form Description</FormDescription>}
			/>
			<Box className={classNames(radius, background)} w='100%' p={4}>
				<Text align='center' color={text}>
					Input Element
				</Text>
			</Box>
			<FormHelperText>Helper Text</FormHelperText>
		</FormControlComponent>
	);
};
