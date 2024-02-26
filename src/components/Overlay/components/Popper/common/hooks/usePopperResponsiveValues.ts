import { DEFAULT_RADIUS } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	DEFAULT_POPPER_CLOSE_DELAY,
	DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
	DEFAULT_POPPER_CLOSE_ON_ESC,
	DEFAULT_POPPER_GUTTER,
	DEFAULT_POPPER_IS_DISABLED,
	DEFAULT_POPPER_OPEN_DELAY,
	DEFAULT_POPPER_PLACEMENT
} from '../constants';
import type { PopperPlacement, PopperProps } from '../types';

type PickedPopperProps =
	| 'closeDelay'
	| 'openDelay'
	| 'closeOnClickOutside'
	| 'closeOnEsc'
	| 'gutter'
	| 'isDisabled'
	| 'placement'
	| 'radius';
type UsePopperResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<PopperProps<Element>, PickedPopperProps>
>;

const usePopperResponsiveValues = <Element extends PolymorphicElementType>(
	props: UsePopperResponsiveValuesProps<Element>
) => {
	const {
		closeDelay: closeDelayProp = DEFAULT_POPPER_CLOSE_DELAY,
		openDelay: openDelayProp = DEFAULT_POPPER_OPEN_DELAY,
		closeOnClickOutside: closeOnClickOutsideProp = DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE,
		closeOnEsc: closeOnEscProp = DEFAULT_POPPER_CLOSE_ON_ESC,
		gutter: gutterProp = DEFAULT_POPPER_GUTTER,
		isDisabled: isDisabledProp = DEFAULT_POPPER_IS_DISABLED,
		placement: placementProp = DEFAULT_POPPER_PLACEMENT,
		radius: radiusProp = DEFAULT_RADIUS
	} = props;

	const closeDelay = useGetResponsiveValue<number>(closeDelayProp);
	const openDelay = useGetResponsiveValue<number>(openDelayProp);

	const closeOnClickOutside = useGetResponsiveValue<boolean>(closeOnClickOutsideProp);
	const closeOnEsc = useGetResponsiveValue<boolean>(closeOnEscProp);

	const gutter = useGetResponsiveValue<number>(gutterProp);

	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);

	const placement = useGetResponsiveValue<PopperPlacement>(placementProp);
	const radius = useGetResponsiveValue<ThemeRadius>(radiusProp);

	return { closeDelay, openDelay, closeOnClickOutside, closeOnEsc, gutter, isDisabled, placement, radius };
};

export default usePopperResponsiveValues;
