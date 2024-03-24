import { useGetResponsiveValue } from '@common/hooks';

import type { ButtonGroupNonResponsiveValueProps, ButtonGroupResponsiveValueProps } from '../types';

type UseButtonGroupResponsiveValuesProps = Partial<ButtonGroupResponsiveValueProps>;
type UseButtonGroupResponsiveValuesReturn = ButtonGroupNonResponsiveValueProps;

const useButtonGroupResponsiveValues = (
	props: UseButtonGroupResponsiveValuesProps
): UseButtonGroupResponsiveValuesReturn => {
	const {
		direction: directionProp,
		isAttached: isAttachedProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isFullWidth: isFullWidthProp,
		isRound: isRoundProp,
		spacing: spacingProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const direction = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['direction']>(directionProp);

	const isAttached = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['isAttached']>(isAttachedProp);
	const isCompact = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['isFullWidth']>(isFullWidthProp);
	const isRound = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['isRound']>(isRoundProp);

	const spacing = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['spacing']>(spacingProp);

	const size = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<ButtonGroupNonResponsiveValueProps['variant']>(variantProp);

	return { direction, isAttached, isCompact, isDisabled, isFullWidth, isRound, spacing, size, variant };
};

export default useButtonGroupResponsiveValues;
