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

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useBoolean } from '@common/hooks';
import type { PolymorphicElementType } from '@common/types';

// TODO: Go over all Transition and see if they can be merged with the child component since it is based of Box
import { AnimatePresence, Transition } from '@components/Animation';
import type { BoxProps } from '@components/Box';
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
import { useTooltipClasses, useTooltipResponsiveValues } from './common/hooks';
import { __KEYS_TOOLTIP_CLASS__ } from './common/keys';
import type { TooltipProps, TooltipRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Tooltip = forwardRef(function Tooltip<Element extends PolymorphicElementType>(
	props: TooltipProps<Element>,
	ref: TooltipRef<Element>
): JSX.Element {
	const arrowRef = useRef<HTMLElement>(null);

	const {
		children,
		color,
		colorMode,
		className = __DEFAULT_CLASSNAME__,
		closeDelay: closeDelayProp = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay: openDelayProp = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		closeOnClick: closeOnClickProp = __DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
		closeOnEsc: closeOnEscProp = __DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
		gutter: gutterProp = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled: isDisabledProp = __DEFAULT_TOOLTIP_IS_DISABLED__,
		label: labelProp = __DEFAULT_TOOLTIP_LABEL__,
		onClose,
		onCloseComplete,
		onOpen,
		placement: placementProp = __DEFAULT_TOOLTIP_PLACEMENT__,
		...rest
	} = props;

	const [isOpen, setIsOpen] = useBoolean(__DEFAULT_TOOLTIP_IS_OPEN__);

	const { closeDelay, openDelay, closeOnClick, closeOnEsc, gutter, isDisabled, label, placement } =
		useTooltipResponsiveValues<Element>({
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

	const classes = useTooltipClasses<Element>({ color, colorMode });

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{cloneElement(children, { ...getReferenceProps(), ref: refs.setReference })}
			<Transition as='section' transition='fade' in={!isDisabled && isOpen}>
				<Box
					{...(rest as BoxProps<Element>)}
					{...getFloatingProps()}
					ref={refss}
					className={classNames(__KEYS_TOOLTIP_CLASS__, classes.tooltip, { [className]: !!className })}
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
