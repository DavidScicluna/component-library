import type { ReactElement } from 'react';

import type { FormLabelDefaultElement, FormLabelProps } from './common/types';
import type { FormLabelStory, FormLabelStoryMeta } from './common/types/story';
import { FormLabel as FormLabelComponent } from '.';

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

export const FormLabel: FormLabelStory = (props: FormLabelProps<FormLabelDefaultElement>): ReactElement => {
	return <FormLabelComponent {...props} />;
};
