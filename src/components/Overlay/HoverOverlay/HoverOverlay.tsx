import { forwardRef, ReactElement } from 'react';

import Box from '@components/Box';

import { useBoolean } from '../../../common/hooks';

import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

const HoverOverlay = forwardRef<HoverOverlayRef, HoverOverlayProps>(function HoverOverlay(props, ref): ReactElement {
	const { children, onMouseEnter, onMouseLeave, ...rest } = props;

	const [isHovering, setIsHovering] = useBoolean();

	const handleMouseEnter = (event: HoverOverlayMouseEvent): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: HoverOverlayMouseEvent): void => {
		setIsHovering.off();

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Box {...rest} ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{children(isHovering)}
		</Box>
	);
});

export default HoverOverlay;
