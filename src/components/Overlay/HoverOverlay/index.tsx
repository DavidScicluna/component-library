import { forwardRef, ReactElement } from 'react';

import { Center } from '@chakra-ui/react';

import { useBoolean } from '../../../common/hooks';

import { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

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
		<Center {...rest} ref={ref} overflow='overlay' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{children({ isHovering })}
		</Center>
	);
});

export default HoverOverlay;
