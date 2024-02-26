import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_BUTTON_IS_ACTIVE,
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FOCUSED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_LOADING,
	DEFAULT_BUTTON_IS_OUTLINED,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from '../constants';
import type { ButtonElement, ButtonProps, ButtonSize, ButtonVariant } from '../types';

type PickedButtonProps =
	| 'isActive'
	| 'isCompact'
	| 'isDisabled'
	| 'isFocused'
	| 'isFullWidth'
	| 'isLoading'
	| 'isRound'
	| 'isOutlined'
	| 'size'
	| 'variant';
type UseButtonResponsiveValuesProps<Element extends ButtonElement> = Partial<
	Pick<ButtonProps<Element>, PickedButtonProps>
>;

const useButtonResponsiveValues = <Element extends ButtonElement>(props: UseButtonResponsiveValuesProps<Element>) => {
	const {
		isActive: isActiveProp = DEFAULT_BUTTON_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BUTTON_IS_DISABLED,
		isFocused: isFocusedProp = DEFAULT_BUTTON_IS_FOCUSED,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_IS_FULLWIDTH,
		isLoading: isLoadingProp = DEFAULT_BUTTON_IS_LOADING,
		isRound: isRoundProp = DEFAULT_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT
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
