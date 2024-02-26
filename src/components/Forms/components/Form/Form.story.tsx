import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';

import { Text } from '../../../Typography';

import { useStorybookContext } from '../../../Provider/components/StorybookProvider';
import React from 'react';
import type { FormDefaultElement, FormProps } from './common/types';
import type { FormStory, FormStoryMeta } from './common/types/story';
import { Form as FormComponent } from '.';

import classNames from 'classnames';

export default {
	title: 'Forms/Form',
	component: FormComponent
} as FormStoryMeta;

export const Form: FormStory = (props: FormProps<FormDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<FormComponent {...props} className={classNames(radius, background)} w='100%' p={4}>
			<Text align='center' color={text}>
				Hello
			</Text>
		</FormComponent>
	);
};
