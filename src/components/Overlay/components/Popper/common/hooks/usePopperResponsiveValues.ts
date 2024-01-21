import { __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, ThemeRadius } from '@common/types';

import {
	__DEFAULT_POPPER_CLOSE_DELAY__,
	__DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
	__DEFAULT_POPPER_CLOSE_ON_ESC__,
	__DEFAULT_POPPER_GUTTER__,
	__DEFAULT_POPPER_IS_DISABLED__,
	__DEFAULT_POPPER_OPEN_DELAY__,
	__DEFAULT_POPPER_PLACEMENT__
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
		closeDelay: closeDelayProp = __DEFAULT_POPPER_CLOSE_DELAY__,
		openDelay: openDelayProp = __DEFAULT_POPPER_OPEN_DELAY__,
		closeOnClickOutside: closeOnClickOutsideProp = __DEFAULT_POPPER_CLOSE_ON_CLICK_OUTSIDE__,
		closeOnEsc: closeOnEscProp = __DEFAULT_POPPER_CLOSE_ON_ESC__,
		gutter: gutterProp = __DEFAULT_POPPER_GUTTER__,
		isDisabled: isDisabledProp = __DEFAULT_POPPER_IS_DISABLED__,
		placement: placementProp = __DEFAULT_POPPER_PLACEMENT__,
		radius: radiusProp = __DEFAULT_RADIUS__
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
