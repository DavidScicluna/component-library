/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, forwardRef, useCallback, useRef } from 'react';

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
	useMergeRefs,
	useRole
} from '@floating-ui/react';
import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

// TODO: Go over all Transition and see if they can be merged with the child component since it is based of Box
import { AnimatePresence, Transition } from '@components/Animation';
import { Box } from '@components/Box';

import {
	DEFAULT_TOOLTIP_CLOSE_DELAY,
	DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
	DEFAULT_TOOLTIP_CLOSE_ON_ESC,
	DEFAULT_TOOLTIP_GUTTER,
	DEFAULT_TOOLTIP_IS_DISABLED,
	DEFAULT_TOOLTIP_IS_OPEN,
	DEFAULT_TOOLTIP_LABEL,
	DEFAULT_TOOLTIP_OPEN_DELAY,
	DEFAULT_TOOLTIP_PLACEMENT
} from './common/constants';
import { useTooltipClasses, useTooltipResponsiveValues } from './common/hooks';
import { KEYS_TOOLTIP_CLASS } from './common/keys';
import type { TooltipProps, TooltipRef } from './common/types';

const Tooltip = forwardRef(function Tooltip<Element extends PolymorphicElementType>(
	props: TooltipProps<Element>,
	ref: TooltipRef<Element>
): JSX.Element {
	const arrowRef = useRef<HTMLElement>(null);

	const {
		children,
		color,
		colorMode,
		className = DEFAULT_CLASSNAME,
		closeDelay: closeDelayProp = DEFAULT_TOOLTIP_CLOSE_DELAY,
		openDelay: openDelayProp = DEFAULT_TOOLTIP_OPEN_DELAY,
		closeOnClick: closeOnClickProp = DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
		closeOnEsc: closeOnEscProp = DEFAULT_TOOLTIP_CLOSE_ON_ESC,
		gutter: gutterProp = DEFAULT_TOOLTIP_GUTTER,
		isDisabled: isDisabledProp = DEFAULT_TOOLTIP_IS_DISABLED,
		label: labelProp = DEFAULT_TOOLTIP_LABEL,
		onClose,
		onCloseComplete,
		onOpen,
		placement: placementProp = DEFAULT_TOOLTIP_PLACEMENT,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(DEFAULT_TOOLTIP_IS_OPEN);

	const {
		closeDelay = DEFAULT_TOOLTIP_CLOSE_DELAY,
		openDelay = DEFAULT_TOOLTIP_OPEN_DELAY,
		closeOnClick = DEFAULT_TOOLTIP_CLOSE_ON_CLICK,
		closeOnEsc = DEFAULT_TOOLTIP_CLOSE_ON_ESC,
		gutter = DEFAULT_TOOLTIP_GUTTER,
		isDisabled = DEFAULT_TOOLTIP_IS_DISABLED,
		label = DEFAULT_TOOLTIP_LABEL,
		placement = DEFAULT_TOOLTIP_PLACEMENT
	} = useTooltipResponsiveValues({
		closeDelay: closeDelayProp,
		openDelay: openDelayProp,
		closeOnClick: closeOnClickProp,
		closeOnEsc: closeOnEscProp,
		gutter: gutterProp,
		isDisabled: isDisabledProp,
		label: labelProp,
		placement: placementProp
	});

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

	const refss = useMergeRefs([ref, refs.setFloating as any]);

	const classes = useTooltipClasses({ color, colorMode });

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{cloneElement(children, { ...getReferenceProps(), ref: refs.setReference })}
			<Transition as='section' transition='fade' in={!isDisabled && isOpen}>
				<Box
					{...rest}
					{...getFloatingProps()}
					ref={refss}
					className={classNames(KEYS_TOOLTIP_CLASS, classes.tooltip, { [className]: !!className })}
					style={floatingStyles}
				>
					<FloatingArrow ref={arrowRef as any} className={classes.arrow} context={context} />
					<Box as='span' className={classes.content}>
						{label}
					</Box>
				</Box>
			</Transition>
		</AnimatePresence>
	);
});

// Tooltip.displayName = 'Tooltip';

export default Tooltip;
