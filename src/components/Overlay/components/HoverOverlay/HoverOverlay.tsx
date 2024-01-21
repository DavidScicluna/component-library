import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __KEYS_HOVER_OVERLAY_CLASS__ } from './common/keys';
import type { HoverOverlayMouseEvent, HoverOverlayProps, HoverOverlayRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const HoverOverlay = forwardRef(function HoverOverlay<Element extends PolymorphicElementType>(
	props: HoverOverlayProps<Element>,
	ref: HoverOverlayRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, onMouseEnter, onMouseLeave, ...rest } = props;

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
			className={classNames(__KEYS_HOVER_OVERLAY_CLASS__, { [className]: !!className })}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children(isHovering)}
		</Box>
	);
});

// HoverOverlay.displayName = 'HoverOverlay';

export default HoverOverlay;
