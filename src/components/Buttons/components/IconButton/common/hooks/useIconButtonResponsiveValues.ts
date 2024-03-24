import { useGetResponsiveValue } from '@common/hooks';

import type { IconButtonNonResponsiveValueProps, IconButtonResponsiveValueProps } from '../types';

type UseIconButtonResponsiveValuesProps = Partial<IconButtonResponsiveValueProps>;
type UseIconButtonResponsiveValuesReturn = IconButtonNonResponsiveValueProps;

const useIconButtonResponsiveValues = (
	props: UseIconButtonResponsiveValuesProps
): UseIconButtonResponsiveValuesReturn => {
	const {
		isActive: isActiveProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFocused: isFocusedProp,
		isLoading: isLoadingProp,
		isRound: isRoundProp,
		isOutlined: isOutlinedProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const isActive = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isActive']>(isActiveProp);
	const isCompact = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFocused = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isFocused']>(isFocusedProp);
	const isLoading = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isLoading']>(isLoadingProp);
	const isRound = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isRound']>(isRoundProp);
	const isOutlined = useGetResponsiveValue<IconButtonNonResponsiveValueProps['isOutlined']>(isOutlinedProp);

	const size = useGetResponsiveValue<IconButtonNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<IconButtonNonResponsiveValueProps['variant']>(variantProp);

	return { isActive, isCompact, isDisabled, isFocused, isLoading, isRound, isOutlined, size, variant };
};

export default useIconButtonResponsiveValues;
