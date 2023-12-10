import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_ICON_BUTTON_IS_ACTIVE__,
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_FOCUSED__,
	__DEFAULT_ICON_BUTTON_IS_LOADING__,
	__DEFAULT_ICON_BUTTON_IS_OUTLINED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '../constants';
import type { IconButtonProps, IconButtonSize, IconButtonVariant } from '../types';

type UseIconButtonResponsiveValuesProps = Partial<
	Pick<
		IconButtonProps,
		| 'isActive'
		| 'isCompact'
		| 'isDisabled'
		| 'isFocused'
		| 'isLoading'
		| 'isRound'
		| 'isOutlined'
		| 'size'
		| 'variant'
	>
>;

const useIconButtonResponsiveValues = (props: UseIconButtonResponsiveValuesProps) => {
	const {
		isActive: isActiveProp = __DEFAULT_ICON_BUTTON_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_ICON_BUTTON_IS_DISABLED__,
		isFocused: isFocusedProp = __DEFAULT_ICON_BUTTON_IS_FOCUSED__,
		isLoading: isLoadingProp = __DEFAULT_ICON_BUTTON_IS_LOADING__,
		isRound: isRoundProp = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_ICON_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isLoading = useGetResponsiveValue<boolean>(isLoadingProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const size = useGetResponsiveValue<IconButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<IconButtonVariant>(variantProp);

	return {
		isActive,
		isCompact,
		isDisabled,
		isFocused,
		isLoading,
		isRound,
		isOutlined,
		size,
		variant
	};
};

export default useIconButtonResponsiveValues;
