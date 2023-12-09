import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_BUTTON_IS_ACTIVE__,
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FOCUSED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_LOADING__,
	__DEFAULT_BUTTON_IS_OUTLINED__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '../constants';
import type { ButtonProps, ButtonSize, ButtonVariant } from '../types';

type UseButtonResponsiveValuesProps = Pick<
	ButtonProps,
	| 'isActive'
	| 'isCompact'
	| 'isDisabled'
	| 'isFocused'
	| 'isFullWidth'
	| 'isLoading'
	| 'isRound'
	| 'isOutlined'
	| 'size'
	| 'variant'
>;

const useButtonResponsiveValues = (props: UseButtonResponsiveValuesProps) => {
	const {
		isActive: isActiveProp = __DEFAULT_BUTTON_IS_ACTIVE__,
		isCompact: isCompactProp = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BUTTON_IS_DISABLED__,
		isFocused: isFocusedProp = __DEFAULT_BUTTON_IS_FOCUSED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isLoading: isLoadingProp = __DEFAULT_BUTTON_IS_LOADING__,
		isRound: isRoundProp = __DEFAULT_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_VARIANT__
	} = props;

	const isActive = useGetResponsiveValue<boolean>(isActiveProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFocused = useGetResponsiveValue<boolean>(isFocusedProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isLoading = useGetResponsiveValue<boolean>(isLoadingProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const size = useGetResponsiveValue<ButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<ButtonVariant>(variantProp);

	return {
		isActive,
		isCompact,
		isDisabled,
		isFocused,
		isFullWidth,
		isLoading,
		isRound,
		isOutlined,
		size,
		variant
	};
};

export default useButtonResponsiveValues;
