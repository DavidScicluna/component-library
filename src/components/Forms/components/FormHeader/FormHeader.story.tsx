import { FormDescription } from '../FormDescription';
import { FormLabel } from '../FormLabel';
import React from 'react';
import type { FormHeaderProps } from './common/types';
import type { FormHeaderStory, FormHeaderStoryMeta } from './common/types/story';
import { FormHeader as FormHeaderComponent } from '.';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Forms/FormHeader',
	component: FormHeaderComponent
} as FormHeaderStoryMeta;

export const FormHeader: FormHeaderStory = (props: FormHeaderProps<PolymorphicDefaultElement>): JSX.Element => {
	return (
		<FormHeaderComponent
			{...props}
			renderLabel={() => <FormLabel>Form Label</FormLabel>}
			renderDescription={() => <FormDescription>Form Description</FormDescription>}
		/>
	);
};
