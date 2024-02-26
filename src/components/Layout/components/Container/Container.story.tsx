import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';

import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './common/constants';
import type { ContainerBreakpoint, ContainerProps } from './common/types';
import type { ContainerStory, ContainerStoryMeta } from './common/types/story';
import { Container as ContainerComponent } from '.';

import classNames from 'classnames';
import { PolymorphicDefaultElement } from '../../../../common/types';

export default {
	title: 'Layout/Container',
	component: ContainerComponent,
	argTypes: {
		breakpoint: {
			name: 'Breakpoint',
			type: 'string',
			defaultValue: __DEFAULT_CONTAINER_BREAKPOINT__,
			// description: '',
			options: ['sm', 'md', 'lg', 'xl', '2xl'] as Array<ContainerBreakpoint>,
			control: { type: 'radio' }
		},
		isContentCentered: {
			name: 'Center Content',
			type: 'boolean',
			defaultValue: __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
			// description: '',
			control: { type: 'boolean' }
		},
		isFluid: {
			name: 'Fluid',
			type: 'boolean',
			defaultValue: __DEFAULT_CONTAINER_IS_FLUID__,
			// description: '',
			control: { type: 'boolean' }
		}
	}
} as ContainerStoryMeta;

export const Container: ContainerStory = (props: ContainerProps<PolymorphicDefaultElement>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<ContainerComponent {...props} className={classNames(radius, background)} p={4}>
			<Text align='center' color={text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ac felis donec et odio pellentesque diam volutpat commodo sed. Id porta nibh
				venenatis cras sed felis eget velit aliquet. Sit amet mauris commodo quis. Placerat in egestas erat
				imperdiet sed. Nunc id cursus metus aliquam eleifend. Quis varius quam quisque id diam vel.
			</Text>
		</ContainerComponent>
	);
};
