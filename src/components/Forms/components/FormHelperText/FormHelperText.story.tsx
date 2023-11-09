import type { ReactElement } from 'react';

import type { FormHelperTextDefaultElement, FormHelperTextProps } from './common/types';
import type { FormHelperTextStory, FormHelperTextStoryMeta } from './common/types/story';
import { FormHelperText as FormHelperTextComponent } from '.';

export default {
	title: 'Forms/FormHelperText',
	component: FormHelperTextComponent,
	argTypes: {
		children: {
			name: 'Helper Text',
			type: 'string',
			defaultValue: 'Hello',
			// description: '',
			control: { type: 'text' }
		}
	}
} as FormHelperTextStoryMeta;

export const FormHelperText: FormHelperTextStory = (
	props: FormHelperTextProps<FormHelperTextDefaultElement>
): ReactElement => {
	return <FormHelperTextComponent {...props} />;
};
