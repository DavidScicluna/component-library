import type { ReactElement } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { useGetColor } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Text } from '@components/Typography/components/Text';

import type { HoverOverlayProps } from './common/types';
import type { HoverOverlayStory, HoverOverlayStoryMeta } from './common/types/story';
import { HoverOverlay as HoverOverlayComponent } from '.';

export default {
	title: 'Overlay/HoverOverlay',
	component: HoverOverlayComponent
} as HoverOverlayStoryMeta;

export const HoverOverlay: HoverOverlayStory = (props: HoverOverlayProps<PolymorphicDefaultElement>): ReactElement => {
	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ colorType: 'color', hueType: 'color', classType: 'bg' });

	return (
		<HoverOverlayComponent {...props} className={classNames(radius, background)} w='100%' p={4}>
			{(isHovering) => (
				<Text align='center' color={text}>
					{`Currently ${isHovering ? 'hovering the element!' : 'not hovering the element'}`}
				</Text>
			)}
		</HoverOverlayComponent>
	);
};
