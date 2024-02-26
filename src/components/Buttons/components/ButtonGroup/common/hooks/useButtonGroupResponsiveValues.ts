import { DEFAULT_SPACING } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, ThemeSpacing, Undefinable } from '@common/types';

import {
	DEFAULT_BUTTON_IS_COMPACT,
	DEFAULT_BUTTON_IS_DISABLED,
	DEFAULT_BUTTON_IS_FULLWIDTH,
	DEFAULT_BUTTON_IS_ROUND,
	DEFAULT_BUTTON_SIZE,
	DEFAULT_BUTTON_VARIANT
} from '@components/Buttons/components/Button/common/constants';
import type { ButtonSize, ButtonVariant } from '@components/Buttons/components/Button/common/types';
import { DEFAULT_STACK_DIRECTION } from '@components/Layout/components/Stacks/Stack/common/constants';

import { DEFAULT_BUTTON_GROUP_IS_ATTACHED } from '../constants';
import type { ButtonGroupElement, ButtonGroupProps } from '../types';

type PickedButtonGroupProps =
	| 'direction'
	| 'isAttached'
	| 'isCompact'
	| 'isDisabled'
	| 'isFullWidth'
	| 'isRound'
	| 'spacing'
	| 'size'
	| 'variant';
type UseButtonGroupResponsiveValuesProps<Element extends ButtonGroupElement> = Partial<
	Pick<ButtonGroupProps<Element>, PickedButtonGroupProps>
>;

const useButtonGroupResponsiveValues = <Element extends ButtonGroupElement>(
	props: UseButtonGroupResponsiveValuesProps<Element>
) => {
	const {
		direction: directionProp = DEFAULT_STACK_DIRECTION,
		isAttached: isAttachedProp = DEFAULT_BUTTON_GROUP_IS_ATTACHED,
		isCompact: isCompactProp = DEFAULT_BUTTON_IS_COMPACT,
		isDisabled: isDisabledProp = DEFAULT_BUTTON_IS_DISABLED,
		isFullWidth: isFullWidthProp = DEFAULT_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_BUTTON_IS_ROUND,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_BUTTON_SIZE,
		variant: variantProp = DEFAULT_BUTTON_VARIANT
	} = props;

	const direction = useGetResponsiveValue<Undefinable<FlexDirectionClass>>(directionProp);

	const isAttached = useGetResponsiveValue<boolean>(isAttachedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isDisabled = useGetResponsiveValue<boolean>(isDisabledProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);

	const spacing = useGetResponsiveValue<Undefinable<ThemeSpacing>>(spacingProp);

	const size = useGetResponsiveValue<ButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<ButtonVariant>(variantProp);

	return {
		direction,
		isAttached,
		isCompact,
		isDisabled,
		isFullWidth,
		isRound,
		spacing,
		size,
		variant
	};
};

export default useButtonGroupResponsiveValues;
