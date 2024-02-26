import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
	DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_BUTTON_SIZE,
	DEFAULT_DUMMY_BUTTON_VARIANT
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
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_BUTTON_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_BUTTON_IS_COMPACT,
		isFullWidth: isFullWidthProp = DEFAULT_DUMMY_BUTTON_IS_FULLWIDTH,
		isRound: isRoundProp = DEFAULT_DUMMY_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_DUMMY_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_BUTTON_VARIANT
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
