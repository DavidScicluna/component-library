import classes from '../../../../common/classes';
import { useGetColor } from '../../../../common/hooks';

import { Text } from '../../../Typography';
import React from 'react';
import { useStorybookContext } from '../../../Provider/components/StorybookProvider';

import {
	DEFAULT_CONTAINER_BREAKPOINT,
	DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
	DEFAULT_CONTAINER_IS_FLUID
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
			defaultValue: DEFAULT_CONTAINER_BREAKPOINT,
			// description: '',
			options: ['sm', 'md', 'lg', 'xl', '2xl'] as Array<ContainerBreakpoint>,
			control: { type: 'radio' }
		},
		isContentCentered: {
			name: 'Center Content',
			type: 'boolean',
			defaultValue: DEFAULT_CONTAINER_IS_CONTENT_CENTERED,
			// description: '',
			control: { type: 'boolean' }
		},
		isFluid: {
			name: 'Fluid',
			type: 'boolean',
			defaultValue: DEFAULT_CONTAINER_IS_FLUID,
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
