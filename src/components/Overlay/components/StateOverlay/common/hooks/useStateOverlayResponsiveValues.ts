import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicElementType, Undefinable } from '@common/types';

import {
	__DEFAULT_STATE_OVERLAY_HAS_GLASS__,
	__DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
	__DEFAULT_STATE_OVERLAY_STATE__
} from '../constants';
import type { StateOverlayProps, StateOverlayRenderType, StateOverlayState } from '../types';

type PickedStateOverlayProps =
	// | 'children'
	'renderSuccess' | 'renderEmpty' | 'renderError' | 'renderSpinner' | 'hasGlass' | 'isAlwaysVisible' | 'state';
type UseStateOverlayResponsiveValuesProps<Element extends PolymorphicElementType> = Partial<
	Pick<StateOverlayProps<Element>, PickedStateOverlayProps>
>;

const useStateOverlayResponsiveValues = <Element extends PolymorphicElementType>(
	props: UseStateOverlayResponsiveValuesProps<Element>
) => {
	const {
		// children: childrenProp,
		renderSuccess: renderSuccessProp,
		renderEmpty: renderEmptyProp,
		renderError: renderErrorProp,
		renderSpinner: renderSpinnerProp,
		hasGlass: hasGlassProp = __DEFAULT_STATE_OVERLAY_HAS_GLASS__,
		isAlwaysVisible: isAlwaysVisibleProp = __DEFAULT_STATE_OVERLAY_IS_ALWAYS_VISIBLE__,
		state: stateProp = __DEFAULT_STATE_OVERLAY_STATE__
	} = props;

	// const children = useGetResponsiveValue<StateOverlayRenderType>(childrenProp);

	const renderSuccess = useGetResponsiveValue<Undefinable<StateOverlayRenderType>>(renderSuccessProp);
	const renderEmpty = useGetResponsiveValue<Undefinable<StateOverlayRenderType>>(renderEmptyProp);
	const renderError = useGetResponsiveValue<Undefinable<StateOverlayRenderType>>(renderErrorProp);
	const renderSpinner = useGetResponsiveValue<Undefinable<StateOverlayRenderType>>(renderSpinnerProp);

	const hasGlass = useGetResponsiveValue<boolean>(hasGlassProp);
	const isAlwaysVisible = useGetResponsiveValue<boolean>(isAlwaysVisibleProp);

	const state = useGetResponsiveValue<StateOverlayState>(stateProp);

	return {
		// children,
		renderSuccess,
		renderEmpty,
		renderError,
		renderSpinner,
		hasGlass,
		isAlwaysVisible,
		state
	};
};

export default useStateOverlayResponsiveValues;
