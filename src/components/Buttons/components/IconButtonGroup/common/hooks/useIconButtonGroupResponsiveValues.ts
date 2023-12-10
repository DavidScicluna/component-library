import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, ThemeSpacing } from '@common/types';

import {
	__DEFAULT_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_ICON_BUTTON_IS_DISABLED__,
	__DEFAULT_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_ICON_BUTTON_SIZE__,
	__DEFAULT_ICON_BUTTON_VARIANT__
} from '@components/Buttons/components/IconButton/common/constants';
import type { IconButtonSize, IconButtonVariant } from '@components/Buttons/components/IconButton/common/types';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { IconButtonGroupProps } from '../types';

type UseIconButtonGroupResponsiveValuesProps = Partial<
	Pick<
		IconButtonGroupProps,
		'direction' | 'isAttached' | 'isCompact' | 'isDisabled' | 'isRound' | 'spacing' | 'size' | 'variant'
	>
>;

const useIconButtonGroupResponsiveValues = (props: UseIconButtonGroupResponsiveValuesProps) => {
	const {
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_ICON_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_ICON_BUTTON_IS_DISABLED__,
		isRound: isRoundProp = __DEFAULT_ICON_BUTTON_IS_ROUND__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_ICON_BUTTON_VARIANT__
	} = props;

	const direction = useGetResponsiveValue<FlexDirectionClass>(directionProp);

	const isAttached = useGetResponsiveValue<boolean>(isAttachedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);

	const spacing = useGetResponsiveValue<ThemeSpacing>(spacingProp);

	const size = useGetResponsiveValue<IconButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<IconButtonVariant>(variantProp);

	return {
		direction,
		isAttached,
		isCompact,
		isDisabled,
		isRound,
		spacing,
		size,
		variant
	};
};

export default useIconButtonGroupResponsiveValues;
