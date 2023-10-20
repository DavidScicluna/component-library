import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { AlignItemsClassArr, JustifyContentClassArr, PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';
import { constants } from '@components/Layout';
import { Text } from '@components/Typography';

// eslint-disable-next-line import-path/parent-depth
import { useStorybookContext } from '../../../../../.storybook/preview';
import { FormDescription } from '../FormDescription';
import { FormHeader } from '../FormHeader';
import { FormHelperText } from '../FormHelperText';
import { FormLabel } from '../FormLabel';

import {
	__DEFAULT_FORM_CONTROL_IS_DISABLED__,
	__DEFAULT_FORM_CONTROL_IS_ERROR__,
	__DEFAULT_FORM_CONTROL_IS_FOCUSED__,
	__DEFAULT_FORM_CONTROL_IS_READONLY__,
	__DEFAULT_FORM_CONTROL_IS_REQUIRED__,
	__DEFAULT_FORM_CONTROL_IS_SUCCESS__,
	__DEFAULT_FORM_CONTROL_IS_WARNING__,
	__DEFAULT_FORM_CONTROL_SIZE__,
	__DEFAULT_FORM_CONTROL_SPACING__
} from './common/constants';
import type { FormControlProps, FormControlSize } from './common/types';
import type { FormControlStory, FormControlStoryMeta } from './common/types/story';
import { FormControl as FormControlComponent } from '.';

const { __DEFAULT_STACK_ALIGN_ITEMS__, __DEFAULT_STACK_JUSTIFY_CONTENT__ } = constants;

export default {
	title: 'Forms/FormControl',
	component: FormControlComponent,
	argTypes: {
		alignItems: {
			name: 'Align Items',
			type: 'string',
			defaultValue: __DEFAULT_STACK_ALIGN_ITEMS__,
			// description: '',
			options: ['center', 'baseline', 'flex-start', 'flex-end', 'stretch'] as AlignItemsClassArr,
			control: { type: 'radio' }
		},
		justifyContent: {
			name: 'Justify Content',
			type: 'string',
			defaultValue: __DEFAULT_STACK_JUSTIFY_CONTENT__,
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
			defaultValue: __DEFAULT_FORM_CONTROL_IS_DISABLED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isError: {
			name: 'Error',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_ERROR__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFocused: {
			name: 'Focused',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_FOCUSED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isReadOnly: {
			name: 'ReadOnly',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_READONLY__,
			// description: '',
			control: { type: 'boolean' }
		},
		isRequired: {
			name: 'Required',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_REQUIRED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isSuccess: {
			name: 'Success',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_SUCCESS__,
			// description: '',
			control: { type: 'boolean' }
		},
		isWarning: {
			name: 'Warning',
			type: 'boolean',
			defaultValue: __DEFAULT_FORM_CONTROL_IS_WARNING__,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: __DEFAULT_FORM_CONTROL_SIZE__,
			// description: '',
			options: ['xs', 'sm', 'md', 'lg', 'xl'] as Array<FormControlSize>,
			control: { type: 'radio' }
		},
		spacing: {
			name: 'Spacing (0-24 | .0, .25, .5 or .75)',
			type: 'number',
			defaultValue: __DEFAULT_FORM_CONTROL_SPACING__,
			// description: '',
			control: { type: 'number' }
		}
	}
} as FormControlStoryMeta;

export const FormControl: FormControlStory = (props: FormControlProps<PolymorphicDefaultElement>): ReactElement => {
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
