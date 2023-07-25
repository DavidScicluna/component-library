/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';

import classNames from 'classnames';

import { useGetColor } from '@common/hooks';

import classes from '../../../common/classes';

import type { HoverOverlayProps } from './common/types';
import type { HoverOverlayStory, HoverOverlayStoryMeta } from './common/types/story';
import HoverOverlayComponent from '.';

export default {
	title: 'Overlay/HoverOverlay',
	component: HoverOverlayComponent
} as HoverOverlayStoryMeta;

export const HoverOverlay: HoverOverlayStory = (props: HoverOverlayProps): ReactElement => {
	const radius = classes.borders.radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'appColor', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<HoverOverlayComponent {...props} className={classNames('w-full', radius, text, background, padding)}>
			{(isHovering) => (
				<h6>{`Currently ${isHovering ? 'hovering the element!' : 'not hovering the element'}`}</h6>
			)}
		</HoverOverlayComponent>
	);
};
