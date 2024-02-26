import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_ICON_BUTTON_IS_ACTIVE,
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_FOCUSED,
	DEFAULT_ICON_BUTTON_IS_LOADING,
	DEFAULT_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '../constants';
import type { IconButtonElement, IconButtonProps, IconButtonSize, IconButtonVariant } from '../types';

type PickedIconButtonProps =
	| 'isActive'
	| 'isCompact'
	| 'isDisabled'
	| 'isFocused'
	| 'isLoading'
	| 'isRound'
	| 'isOutlined'
	| 'size'
	| 'variant';
type UseIconButtonResponsiveValuesProps<Element extends IconButtonElement> = Partial<
	Pick<IconButtonProps<Element>, PickedIconButtonProps>
>;

const useIconButtonResponsiveValues = <Element extends IconButtonElement>(
	props: UseIconButtonResponsiveValuesProps<Element>
) => {
	const {
		isActive: isActiveProp = DEFAULT_ICON_BUTTON_IS_ACTIVE,
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_ICON_BUTTON_IS_DISABLED,
		isFocused: isFocusedProp = DEFAULT_ICON_BUTTON_IS_FOCUSED,
		isLoading: isLoadingProp = DEFAULT_ICON_BUTTON_IS_LOADING,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_ICON_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
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
