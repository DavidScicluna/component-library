import { useGetResponsiveValue } from '@common/hooks';

import type { ButtonNonResponsiveValueProps, ButtonResponsiveValueProps } from '../types';

type UseButtonResponsiveValuesProps = Partial<ButtonResponsiveValueProps>;
type UseButtonResponsiveValuesReturn = ButtonNonResponsiveValueProps;

const useButtonResponsiveValues = (props: UseButtonResponsiveValuesProps): UseButtonResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFocused: isFocusedProp,
		isFullWidth: isFullWidthProp,
		isLoading: isLoadingProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isActive = useGetResponsiveValue<ButtonNonResponsiveValueProps['isActive']>(isActiveProp);
	const isCompact = useGetResponsiveValue<ButtonNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<ButtonNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFocused = useGetResponsiveValue<ButtonNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isFullWidth = useGetResponsiveValue<ButtonNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isLoading = useGetResponsiveValue<ButtonNonResponsiveValueProps['isLoading']>(isLoadingProp);
	const isRound = useGetResponsiveValue<ButtonNonResponsiveValueProps['isRound']>(isRoundProp);
	const isOutlined = useGetResponsiveValue<ButtonNonResponsiveValueProps['isOutlined']>(isOutlinedProp);

	const size = useGetResponsiveValue<ButtonNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<ButtonNonResponsiveValueProps['variant']>(variantProp);

	return { isActive, isCompact, isDisabled, isFocused, isFullWidth, isLoading, isRound, isOutlined, size, variant };
};

export default useButtonResponsiveValues;
