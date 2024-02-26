import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, ThemeSpacing, Undefinable } from '@common/types';

import {
	DEFAULT_ICON_BUTTON_IS_COMPACT,
	DEFAULT_ICON_BUTTON_IS_DISABLED,
	DEFAULT_ICON_BUTTON_IS_ROUND,
	DEFAULT_ICON_BUTTON_SIZE,
	DEFAULT_ICON_BUTTON_VARIANT
} from '@components/Buttons/components/IconButton/common/constants';
import type { IconButtonSize, IconButtonVariant } from '@components/Buttons/components/IconButton/common/types';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED } from '../constants';
import type { IconButtonGroupElement, IconButtonGroupProps } from '../types';

type PickedIconButtonGroupProps =
	| 'direction'
	| 'isAttached'
	| 'isCompact'
	| 'isDisabled'
	| 'isRound'
	| 'spacing'
	| 'size'
	| 'variant';

type UseIconButtonGroupResponsiveValuesProps<Element extends IconButtonGroupElement> = Partial<
	Pick<IconButtonGroupProps<Element>, PickedIconButtonGroupProps>
>;

const useIconButtonGroupResponsiveValues = <Element extends IconButtonGroupElement>(
	props: UseIconButtonGroupResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_ICON_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_ICON_BUTTON_IS_DISABLED,
		isRound: isRoundProp = DEFAULT_ICON_BUTTON_IS_ROUND,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_ICON_BUTTON_VARIANT
	} = props;

	const direction = useGetResponsiveValue<Undefinable<FlexDirectionClass>>(directionProp);

	const isAttached = useGetResponsiveValue<boolean>(isAttachedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);

	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

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
