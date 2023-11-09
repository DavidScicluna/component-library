import type { ReactElement } from 'react';

import type { PolymorphicDefaultElement } from '@common/types';

import { FormDescription } from '../FormDescription';
import { FormLabel } from '../FormLabel';

import type { FormHeaderProps } from './common/types';
import type { FormHeaderStory, FormHeaderStoryMeta } from './common/types/story';
import { FormHeader as FormHeaderComponent } from '.';

export default {
	title: 'Forms/FormHeader',
	component: FormHeaderComponent
} as FormHeaderStoryMeta;

export const FormHeader: FormHeaderStory = (props: FormHeaderProps<PolymorphicDefaultElement>): ReactElement => {
	return (
		<FormHeaderComponent
			{...props}
			renderLabel={() => <FormLabel>Form Label</FormLabel>}
			renderDescription={() => <FormDescription>Form Description</FormDescription>}
		/>
	);
};
