import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';

import { __KEYS_HOVER_OVERLAY_CLASS__ } from './common/keys';
import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

const HoverOverlay = forwardRef(function HoverOverlay<Element extends ElementType = PolymorphicDefaultElement>(
	props: HoverOverlayProps<Element>,
	ref: HoverOverlayRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, onMouseEnter, onMouseLeave, ...rest } = props;

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
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HOVER_OVERLAY_CLASS__, { [className]: !!className })}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children(isHovering)}
		</Box>
	);
});

HoverOverlay.displayName = 'HoverOverlay';

export default HoverOverlay;
