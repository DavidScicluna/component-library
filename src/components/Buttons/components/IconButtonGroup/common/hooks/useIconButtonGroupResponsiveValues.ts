import { useGetResponsiveValue } from '@common/hooks';

import type { IconButtonGroupNonResponsiveValueProps, IconButtonGroupResponsiveValueProps } from '../types';

type UseIconButtonGroupResponsiveValuesProps = Partial<IconButtonGroupResponsiveValueProps>;
type UseIconButtonGroupResponsiveValuesReturn = IconButtonGroupNonResponsiveValueProps;

const useIconButtonGroupResponsiveValues = (
	props: UseIconButtonGroupResponsiveValuesProps
): UseIconButtonGroupResponsiveValuesReturn => {
	const {
		direction: directionProp,
		isAttached: isAttachedProp,
		isCompact: isCompactProp,
		isDisabled: isDisabledProp,
		isRound: isRoundProp,
		spacing: spacingProp,
		size: sizeProp,
		variant: variantProp
	} = props;

	const direction = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['direction']>(directionProp);

	const isAttached = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['isAttached']>(isAttachedProp);
	const isCompact = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['isCompact']>(isCompactProp);
	const isDisabled = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['isDisabled']>(isDisabledProp);
	const isRound = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['isRound']>(isRoundProp);

	const spacing = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['spacing']>(spacingProp);

	const size = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['size']>(sizeProp);
	const variant = useGetResponsiveValue<IconButtonGroupNonResponsiveValueProps['variant']>(variantProp);

	return { direction, isAttached, isCompact, isDisabled, isRound, spacing, size, variant };
};

export default useIconButtonGroupResponsiveValues;
