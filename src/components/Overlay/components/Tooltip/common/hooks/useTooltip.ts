import type { ElementType, RefObject } from 'react';

import {
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useInteractions,
	useRole
} from '@floating-ui/react';

import { __DEFAULT_METHOD__ } from '@common/constants';

import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from '../constants';
import type { TooltipProps } from '../types';

type UseTooltipProps<Element extends ElementType> = Pick<
	TooltipProps<Element>,
	| 'closeDelay'
	| 'openDelay'
	| 'defaultIsOpen'
	| 'gutter'
	| 'isDisabled'
	| 'isOpen'
	| 'placement'
	| 'onClose'
	| 'onOpen'
> & { arrowRef: RefObject<SVGSVGElement> };

const useTooltip = <Element extends ElementType>(props: UseTooltipProps<Element>) => {
	const {
		arrowRef,
		closeDelay = __DEFAULT_TOOLTIP_CLOSE_DELAY__,
		openDelay = __DEFAULT_TOOLTIP_OPEN_DELAY__,
		defaultIsOpen = __DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
		gutter = __DEFAULT_TOOLTIP_GUTTER__,
		isDisabled = __DEFAULT_TOOLTIP_IS_DISABLED__,
		isOpen = __DEFAULT_TOOLTIP_IS_OPEN__,
		placement = __DEFAULT_TOOLTIP_PLACEMENT__,
		onClose = __DEFAULT_METHOD__,
		onOpen = __DEFAULT_METHOD__
	} = props;

	const handleClose = (): void => {
		if (onClose) {
			onClose();
		}
	};

	const handleOpen = (): void => {
		if (onOpen) {
			onOpen();
		}
	};

	const data = useFloating({
		placement,
		open: !isDisabled && (defaultIsOpen || isOpen),
		onOpenChange(open) {
			if (open) {
				handleOpen();
			} else {
				handleClose();
			}
		},
		whileElementsMounted: autoUpdate,
		middleware: [
			arrow({ element: arrowRef }),
			offset(gutter),
			flip({
				crossAxis: placement.includes('-'),
				fallbackAxisSideDirection: 'start',
				padding: gutter
			}),
			shift({ padding: gutter })
		]
	});

	const context = data.context;

	const hover = useHover(context, {
		move: false,
		enabled: isOpen === null,
		delay: { close: closeDelay, open: openDelay }
	});
	const focus = useFocus(context, { enabled: isOpen === null });
	const dismiss = useDismiss(context);
	const role = useRole(context, { role: 'tooltip' });

	const interactions = useInteractions([hover, focus, dismiss, role]);

	return { ...data, ...interactions };
};

export default useTooltip;
