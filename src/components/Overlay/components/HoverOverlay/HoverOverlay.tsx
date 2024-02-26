import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { KEYS_HOVER_OVERLAY_CLASS } from './common/keys';
import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

const HoverOverlay = forwardRef(function HoverOverlay<Element extends PolymorphicElementType>(
	props: HoverOverlayProps<Element>,
	ref: HoverOverlayRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, onMouseEnter, onMouseLeave, ...rest } = props;

	const [isHovering, setIsHovering] = useBoolean();

	const handleMouseEnter = (event: HoverOverlayMouseEvent<Element>): void => {
		setIsHovering.on();

		if (onMouseEnter) {
			onMouseEnter(event);
		}
	};

	const handleMouseLeave = (event: HoverOverlayMouseEvent<Element>): void => {
		setIsHovering.off();

		if (onMouseLeave) {
			onMouseLeave(event);
		}
	};

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_HOVER_OVERLAY_CLASS, { [className]: !!className })}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children(isHovering)}
		</Box>
	);
});

// HoverOverlay.displayName = 'HoverOverlay';

export default HoverOverlay;
