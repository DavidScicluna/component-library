/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { useGetColor } from '../../../common/hooks';

import { ContainerProps } from './common/types';
import { ContainerStory, ContainerStoryMeta } from './common/types/story';
import ContainerComponent from '.';

export default {
	title: 'Layout/Container',
	component: ContainerComponent,
	argTypes: {
		centerContent: {
			name: 'Center Content',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: { type: 'boolean' }
		},
		isFluid: {
			name: 'Fluid',
			type: 'boolean',
			defaultValue: false,
			// description: '',
			control: { type: 'boolean' }
		},
		size: {
			name: 'Size',
			type: 'string',
			defaultValue: '2xl',
			// description: '',
			options: ['sm', 'md', 'lg', 'xl', '2xl'],
			control: { type: 'radio' }
		}
	}
} as ContainerStoryMeta;

export const Container: ContainerStory = (props: ContainerProps<any>): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<ContainerComponent {...props} className={classNames(radius, text, background, padding)}>
			<h6>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ac felis donec et odio pellentesque diam volutpat commodo sed. Id porta nibh
				venenatis cras sed felis eget velit aliquet. Sit amet mauris commodo quis. Placerat in egestas erat
				imperdiet sed. Nunc id cursus metus aliquam eleifend. Quis varius quam quisque id diam vel.{' '}
			</h6>
		</ContainerComponent>
	);
};