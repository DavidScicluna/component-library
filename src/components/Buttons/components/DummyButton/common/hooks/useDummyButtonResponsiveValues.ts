import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
	__DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_BUTTON_SIZE__,
	__DEFAULT_DUMMY_BUTTON_VARIANT__
} from '../constants';
import type { DummyButtonElement, DummyButtonProps, DummyButtonSize, DummyButtonVariant } from '../types';

type UseDummyButtonResponsiveValuesProps<Element extends DummyButtonElement> = Partial<
	Pick<
		DummyButtonProps<Element>,
		'isAnimated' | 'isCompact' | 'isFullWidth' | 'isRound' | 'isOutlined' | 'size' | 'variant'
	>
>;

const useDummyButtonResponsiveValues = <Element extends DummyButtonElement>(
	props: UseDummyButtonResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_BUTTON_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_BUTTON_IS_COMPACT__,
		isFullWidth: isFullWidthProp = __DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH__,
		isRound: isRoundProp = __DEFAULT_DUMMY_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_DUMMY_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_BUTTON_VARIANT__
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isFullWidth = useGetResponsiveValue<boolean>(isFullWidthProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const size = useGetResponsiveValue<DummyButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<DummyButtonVariant>(variantProp);

	return {
		isAnimated,
		isCompact,
		isFullWidth,
		isRound,
		isOutlined,
		size,
		variant
	};
};

export default useDummyButtonResponsiveValues;
