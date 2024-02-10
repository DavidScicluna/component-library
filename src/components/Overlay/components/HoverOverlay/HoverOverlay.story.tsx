import classes from '@common/classes';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';
import { useStorybookContext } from '@components/Provider/components/StorybookProvider';

import type { HoverOverlayProps } from './common/types';
import type { HoverOverlayStory, HoverOverlayStoryMeta } from './common/types/story';
import { HoverOverlay as HoverOverlayComponent } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export default {
	title: 'Overlay/HoverOverlay',
	component: HoverOverlayComponent
} as HoverOverlayStoryMeta;

export const HoverOverlay: HoverOverlayStory = (props: HoverOverlayProps<any>): JSX.Element => {
	const { color, colorMode } = useStorybookContext();

	const radius = classes.borders.border_radius.base;

	const text = useGetColor({ colorMode, colorType: 'default', hueType: 'background', classType: 'text' });
	const background = useGetColor({ color, colorMode, colorType: 'color', hueType: 'color', classType: 'bg' });

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
