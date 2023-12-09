import type { ElementType, ReactElement } from 'react';
import React, { cloneElement, forwardRef, useCallback, useRef } from 'react';

import {
	arrow,
	autoUpdate,
	flip,
	FloatingArrow,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole
} from '@floating-ui/react';
import { useMergeRefs } from 'rooks';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean, useGetResponsiveValue } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

// TODO: Go over all Transition and see if they can be merged with the child component since it is based of Box
import { AnimatePresence, Transition } from '@components/Animation';
import { Box } from '@components/Box';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from './common/constants';
import { useTooltipClasses } from './common/hooks';
import { __KEYS_TOOLTIP_CLASS__ } from './common/keys';
import type { TooltipPlacement, TooltipProps, TooltipRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Tooltip: PolymorphicComponentWithRef = forwardRef(function Tooltip<
	Element extends ElementType = PolymorphicDefaultElement
>(props: TooltipProps<Element>, ref: TooltipRef<Element>): ReactElement {
	const arrowRef = useRef<HTMLElement>(null);

	const {
		children,
		color,
		colorMode,
		className = __DEFAULT_CLASSNAME__,
		closeDelay: cd = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay: od = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		closeOnClick: closeonclick = __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
		closeOnEsc: closeonesc = __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
		gutter: g = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled: disabled = __DEFAULT_TOOLTIP_IS_DISABLED__,
		label = __DEFAULT_TOOLTIP_LABEL__,
		onClose,
		onCloseComplete,
		onOpen,
		placement: p = __DEFAULT_TOOLTIP_PLACEMENT__,
		...rest
	} = props;

	const closeDelay = useGetResponsiveValue<number>(cd);
	const openDelay = useGetResponsiveValue<number>(od);

	const closeOnClick = useGetResponsiveValue<boolean>(closeonclick);
	const closeOnEsc = useGetResponsiveValue<boolean>(closeonesc);

	const gutter = useGetResponsiveValue<number>(g);

	const isDisabled = useGetResponsiveValue<boolean>(disabled);

	const placement = useGetResponsiveValue<TooltipPlacement>(p);

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_TOOLTIP_IS_OPEN__);

	const handleOpen = useCallback((): void => {
		setIsOpen.on();
		if (onOpen) {
			onOpen();
		}
	}, [onOpen]);

	const handleClose = useCallback((): void => {
		setIsOpen.off();
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const handleChange = (open: boolean): void => {
		if (open) {
			handleOpen();
		} else {
			handleClose();
		}
	};

	const { refs, floatingStyles, context } = useFloating({
		placement,
		open: isOpen,
		onOpenChange: handleChange,
		middleware: [arrow({ element: arrowRef }), offset(gutter), flip(), shift()],
		whileElementsMounted: autoUpdate
	});

	const hover = useHover(context, { delay: { open: openDelay, close: closeDelay }, move: false });
	const focus = useFocus(context);
	const dismiss = useDismiss(context, { escapeKey: closeOnEsc, referencePress: closeOnClick });
	const role = useRole(context, { role: 'tooltip' });

	const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

	const refss = useMergeRefs(ref, refs.setFloating);

	const classes = useTooltipClasses<Element>({ color, colorMode });

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{cloneElement(children, { ...getReferenceProps(), ref: refs.setReference })}

			<Transition as='section' transition='fade' in={!isDisabled && isOpen}>
				<Box<Element>
					{...rest}
					{...getFloatingProps()}
					ref={refss}
					className={classNames(__KEYS_TOOLTIP_CLASS__, classes.tooltip, { [className]: !!className })}
					style={floatingStyles}
				>
					<FloatingArrow ref={arrowRef} className={classes.arrow} context={context} />
					<Box as='span' className={classes.content}>
						{label}
					</Box>
				</Box>
			</Transition>
		</AnimatePresence>
	);
});

Tooltip.displayName = 'Tooltip';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Tooltip<Element> {...props} />;
