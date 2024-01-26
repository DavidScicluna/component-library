import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { FlexDirectionClass, ThemeSpacing, Undefinable } from '@common/types';

import {
	__DEFAULT_BUTTON_IS_COMPACT__,
	__DEFAULT_BUTTON_IS_DISABLED__,
	__DEFAULT_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_BUTTON_IS_ROUND__,
	__DEFAULT_BUTTON_SIZE__,
	__DEFAULT_BUTTON_VARIANT__
} from '@components/Buttons/components/Button/common/constants';
import type { ButtonSize, ButtonVariant } from '@components/Buttons/components/Button/common/types';
import { __DEFAULT_STACK_DIRECTION__ } from '@components/Layout/components/Stacks/Stack/common/constants';

import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
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
		direction: directionProp = __DEFAULT_STACK_DIRECTION__,
		isAttached: isAttachedProp = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact: isCompactProp = __DEFAULT_BUTTON_IS_COMPACT__,
		isDisabled: isDisabledProp = __DEFAULT_BUTTON_IS_DISABLED__,
		isFullWidth: isFullWidthProp = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_BUTTON_IS_ROUND__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_BUTTON_VARIANT__
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
