import type { Required } from 'utility-types';

import { useGetResponsiveValue } from '@common/hooks';

import { DEFAULT_STATE_OVERLAY_STATE } from '../constants';
import type { StateOverlayNonResponsiveValueProps, StateOverlayResponsiveValueProps } from '../types';

type UseStateOverlayResponsiveValuesProps = Partial<StateOverlayResponsiveValueProps>;
type UseStateOverlayResponsiveValuesReturn = Required<StateOverlayNonResponsiveValueProps, 'state'>;

const useStateOverlayResponsiveValues = (
	props: UseStateOverlayResponsiveValuesProps
): UseStateOverlayResponsiveValuesReturn => {
	const {
		// children: childrenProp,
		renderSuccess: renderSuccessProp,
		renderEmpty: renderEmptyProp,
		renderError: renderErrorProp,
		renderSpinner: renderSpinnerProp,
		hasGlass: hasGlassProp,
		isAlwaysVisible: isAlwaysVisibleProp,
		state: stateProp = DEFAULT_STATE_OVERLAY_STATE
	} = props;

	// const children = useGetResponsiveValue<StateOverlayRenderType>(childrenProp);

	const renderSuccess =
		useGetResponsiveValue<StateOverlayNonResponsiveValueProps['renderSuccess']>(renderSuccessProp);
	const renderEmpty = useGetResponsiveValue<StateOverlayNonResponsiveValueProps['renderEmpty']>(renderEmptyProp);
	const renderError = useGetResponsiveValue<StateOverlayNonResponsiveValueProps['renderError']>(renderErrorProp);
	const renderSpinner =
		useGetResponsiveValue<StateOverlayNonResponsiveValueProps['renderSpinner']>(renderSpinnerProp);

	const hasGlass = useGetResponsiveValue<StateOverlayNonResponsiveValueProps['hasGlass']>(hasGlassProp);
	const isAlwaysVisible =
		useGetResponsiveValue<StateOverlayNonResponsiveValueProps['isAlwaysVisible']>(isAlwaysVisibleProp);

	const state = useGetResponsiveValue<StateOverlayNonResponsiveValueProps['state']>(stateProp);

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
