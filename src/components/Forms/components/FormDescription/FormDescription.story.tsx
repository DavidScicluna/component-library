import type { FormDescriptionDefaultElement, FormDescriptionProps } from './common/types';
import type { FormDescriptionStory, FormDescriptionStoryMeta } from './common/types/story';
import { FormDescription as FormDescriptionComponent } from '.';
import React from 'react';

export default {
	title: 'Forms/FormDescription',
	component: FormDescriptionComponent,
	argTypes: {
		children: {
			name: 'Description',
			type: 'string',
			defaultValue: 'Hello',
			// description: '',
			control: { type: 'text' }
		}
	}
} as FormDescriptionStoryMeta;

export const FormDescription: FormDescriptionStory = (
	props: FormDescriptionProps<FormDescriptionDefaultElement>
): JSX.Element => {
	return <FormDescriptionComponent {...props} />;
};
