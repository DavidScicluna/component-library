/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import Text from '@components/Typography/components/Text';

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
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	const padding = classes.spacing.p[4];

	return (
		<HoverOverlayComponent {...props} className={classNames('w-full', radius, background, padding)}>
			{(isHovering) => (
				<Text align='center' color={text}>
					{`Currently ${isHovering ? 'hovering the element!' : 'not hovering the element'}`}
				</Text>
			)}
		</HoverOverlayComponent>
	);
};
