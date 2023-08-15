import type { ElementType, ReactElement } from 'react';
import React, { cloneElement, forwardRef, isValidElement, useRef } from 'react';

import { FloatingArrow, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import classNames from 'classnames';
import { useKey } from 'rooks';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__ } from '@common/constants';
import type { PolymorphicMouseEvent } from '@common/types/polymorphic';
import { checkIsTouchDevice } from '@common/utils';

import { AnimatePresence } from '@components/Animation';
import { Box } from '@components/Box';
import { Center } from '@components/Layout';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_DOWN__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_UP__,
	__DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
	// __DEFAULT_TOOLTIP_DURATION__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from './common/constants';
import { useGetTooltipClasses, useTooltip } from './common/hooks';
import type { TooltipProps, TooltipRef } from './common/types';

const isTouchDevice: boolean = checkIsTouchDevice();

const Tooltip = forwardRef(function Tooltip<Element extends ElementType>(
	props: TooltipProps<Element>,
	ref: TooltipRef<Element>
): ReactElement {
	const arrowRef = useRef(null);

	const {
		children,
		color,
		colorMode,
		className = __DEFAULT_CLASSNAME__,
		closeDelay = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		closeOnClick = __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
		closeOnEsc = __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
		closeOnMouseDown = __DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_DOWN__,
		closeOnMouseUp = __DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_UP__,
		defaultIsOpen = __DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
		gutter = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled = __DEFAULT_TOOLTIP_IS_DISABLED__,
		isOpen = __DEFAULT_TOOLTIP_IS_OPEN__,
		label = __DEFAULT_TOOLTIP_LABEL__,
		onClose = __DEFAULT_METHOD__,
		onCloseComplete = __DEFAULT_METHOD__,
		onOpen = __DEFAULT_METHOD__,
		onEsc = __DEFAULT_METHOD__,
		onClick = __DEFAULT_METHOD__,
		onMouseDown = __DEFAULT_METHOD__,
		onMouseUp = __DEFAULT_METHOD__,
		placement = __DEFAULT_TOOLTIP_PLACEMENT__,
		...rest
	} = props;

	const { getReferenceProps, getFloatingProps, context } = useTooltip<Element>({
		arrowRef,
		closeDelay,
		openDelay,
		defaultIsOpen,
		gutter,
		isOpen,
		isDisabled,
		onClose,
		onOpen,
		placement
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const triggerRef = useMergeRefs([context.refs.setReference, ref, (children as any).ref]);
	const contentRef = useMergeRefs([context.refs.setFloating, ref]);

	const classes = useGetTooltipClasses<Element>({ color, colorMode });

	const handleCloseOnClick = (event: PolymorphicMouseEvent<Element>): void => {
		if (onClick) {
			onClick(event);
		}
		if (onClose) {
			onClose();
		}
	};

	const handleCloseOnMouseDown = (event: PolymorphicMouseEvent<Element>): void => {
		if (onMouseDown) {
			onMouseDown(event);
		}
		if (onClose) {
			onClose();
		}
	};

	const handleCloseOnMouseUp = (event: PolymorphicMouseEvent<Element>): void => {
		if (onMouseUp) {
			onMouseUp(event);
		}
		if (onClose) {
			onClose();
		}
	};

	const handleEscapeClick = (): void => {
		if (onClose) {
			onClose();
		}
		if (onEsc) {
			onEsc();
		}
	};

	useKey(['Escape'], handleEscapeClick, { when: isOpen && closeOnEsc });

	// TODO: Add transition
	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			<>
				{isValidElement(children)
					? cloneElement(children, getReferenceProps({ ...children.props, ref: triggerRef }))
					: children}

				<FloatingPortal>
					{!isTouchDevice && context.open ? (
						<Box<Element>
							{...rest}
							{...getFloatingProps()}
							ref={contentRef}
							className={classNames(`${__DEFAULT_CLASS_PREFIX__}-tooltip`, classes.tooltip, {
								[className]: !!className
							})}
							onClick={isOpen && closeOnClick ? handleCloseOnClick : undefined}
							onMouseDown={isOpen && closeOnMouseDown ? handleCloseOnMouseDown : undefined}
							onMouseUp={isOpen && closeOnMouseUp ? handleCloseOnMouseUp : undefined}
							style={context.floatingStyles}
						>
							<FloatingArrow ref={arrowRef} className={classes.arrow} context={context} />
							<Center className={classes.content}>{label}</Center>
						</Box>
					) : null}
				</FloatingPortal>
			</>
		</AnimatePresence>
	);
});

export default Tooltip;
