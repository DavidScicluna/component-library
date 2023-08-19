import type { ElementType, ReactElement } from 'react';
import React, { cloneElement, forwardRef, useEffect } from 'react';

import { Tooltip as AriakitTooltip, TooltipAnchor, TooltipArrow, useTooltipStore } from '@ariakit/react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__ } from '@common/constants';
import { useConst, useTheme } from '@common/hooks';
import { checkIsTouchDevice, convertREMToPixels, convertStringToNumber } from '@common/utils';

import { AnimatePresence } from '@components/Animation';
import { Box } from '@components/Box';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
	// __DEFAULT_TOOLTIP_DURATION__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from './common/constants';
import { useTooltipClasses } from './common/hooks';
import type { TooltipProps, TooltipRef } from './common/types';
import { TooltipTransition } from './components';

const isTouchDevice: boolean = checkIsTouchDevice();

const Tooltip = forwardRef(function Tooltip<Element extends ElementType>(
	props: TooltipProps<Element>,
	ref: TooltipRef<Element>
): ReactElement {
	const theme = useTheme();

	const {
		children,
		color,
		colorMode,
		className = __DEFAULT_CLASSNAME__,
		closeDelay = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		closeOnClick = __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
		closeOnEsc = __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
		defaultIsOpen = __DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
		gutter = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled = __DEFAULT_TOOLTIP_IS_DISABLED__,
		isOpen = __DEFAULT_TOOLTIP_IS_OPEN__,
		label = __DEFAULT_TOOLTIP_LABEL__,
		onClose = __DEFAULT_METHOD__,
		onOpen = __DEFAULT_METHOD__,
		placement = __DEFAULT_TOOLTIP_PLACEMENT__,
		...rest
	} = props;

	const tooltip = useTooltipStore({
		animated: true,
		defaultOpen: defaultIsOpen,
		hideTimeout: closeDelay,
		open: isOpen,
		placement,
		showTimeout: openDelay,
		type: 'label'
	});

	const classes = useTooltipClasses<Element>({ color, colorMode });

	const arrowSize = useConst<number>(convertREMToPixels(convertStringToNumber(theme.spacing[1.5], 'rem')));

	const handleOnOpen = (): void => {
		if (isOpen && onOpen) {
			onOpen();
		} else if (!isOpen && onClose) {
			onClose();
		}
	};

	useEffect(() => handleOnOpen(), [isOpen]);

	// TODO: Add transition
	return (
		<>
			<TooltipAnchor
				render={(props) => cloneElement(children, props)}
				store={tooltip}
				accessibleWhenDisabled={false}
				disabled={isDisabled}
				focusable
				showOnHover
			/>
			<AnimatePresence>
				{!isTouchDevice && (defaultIsOpen || isOpen) && !isDisabled ? (
					<AriakitTooltip
						ref={ref}
						className={classNames(`${__DEFAULT_CLASS_PREFIX__}-tooltip`, classes.tooltip, {
							[className]: !!className
						})}
						render={(props) => (
							<TooltipTransition<Element> {...props} {...rest} style={{ position: 'initial' }} />
						)}
						store={tooltip}
						accessibleWhenDisabled={false}
						alwaysVisible
						arrowPadding={0}
						autoFocusOnHide={false}
						autoFocusOnShow={false}
						backdrop={false}
						disabled={isDisabled}
						// disablePointerEventsOnApproach
						fitViewport
						fixed={false}
						flip
						focusable
						gutter={gutter}
						hideOnEscape={closeOnEsc}
						hideOnHoverOutside
						hideOnInteractOutside={closeOnClick}
						slide
					>
						<TooltipArrow className={classes.arrow} store={tooltip} size={arrowSize} />
						<Box className={classes.content} as='span'>
							{label}
						</Box>
					</AriakitTooltip>
				) : null}
			</AnimatePresence>
		</>
	);
});

export default Tooltip;
