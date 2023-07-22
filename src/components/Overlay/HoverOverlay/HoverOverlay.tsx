import { ElementType, forwardRef, ReactElement } from 'react';

import Box from '@components/Layout/Box';

import { useBoolean } from '../../../common/hooks';

import { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

const HoverOverlay = forwardRef(function HoverOverlay<Element extends ElementType>(
	props: HoverOverlayProps<Element>,
	ref: HoverOverlayRef<Element>
): ReactElement {
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
		<Box
			{...(rest as HoverOverlayProps<Element>)}
			ref={ref}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children(isHovering)}
		</Box>
	);
});

export default HoverOverlay;
