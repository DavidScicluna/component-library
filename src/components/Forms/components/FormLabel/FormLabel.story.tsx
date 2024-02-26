import type { FormLabelDefaultElement, FormLabelProps } from './common/types';
import type { FormLabelStory, FormLabelStoryMeta } from './common/types/story';
import { FormLabel as FormLabelComponent } from '.';
import React from 'react';

export default {
	title: 'Forms/FormLabel',
	component: FormLabelComponent,
	argTypes: {
		children: {
			name: 'Label',
			type: 'string',
			defaultValue: 'Hello',
			// description: '',
			control: { type: 'text' }
		}
	}
} as FormLabelStoryMeta;

export const FormLabel: FormLabelStory = (props: FormLabelProps<FormLabelDefaultElement>): JSX.Element => {
	return <FormLabelComponent {...props} />;
};
