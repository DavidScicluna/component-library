import { useGetResponsiveValue } from '@common/hooks';

import {
	DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
	DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
	DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
	DEFAULT_DUMMY_ICON_BUTTON_SIZE,
	DEFAULT_DUMMY_ICON_BUTTON_VARIANT
} from '../constants';
import type {
	DummyIconButtonElement,
	DummyIconButtonProps,
	DummyIconButtonSize,
	DummyIconButtonVariant
} from '../types';

type UseDummyIconButtonResponsiveValuesProps<Element extends DummyIconButtonElement> = Partial<
	Pick<DummyIconButtonProps<Element>, 'isAnimated' | 'isCompact' | 'isRound' | 'isOutlined' | 'size' | 'variant'>
>;

const useDummyIconButtonResponsiveValues = <Element extends DummyIconButtonElement>(
	props: UseDummyIconButtonResponsiveValuesProps<Element>
) => {
	const {
		isAnimated: isAnimatedProp = DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED,
		isCompact: isCompactProp = DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT,
		isRound: isRoundProp = DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND,
		isOutlined: isOutlinedProp = DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED,
		size: sizeProp = DEFAULT_DUMMY_ICON_BUTTON_SIZE,
		variant: variantProp = DEFAULT_DUMMY_ICON_BUTTON_VARIANT
	} = props;

	const isAnimated = useGetResponsiveValue<boolean>(isAnimatedProp);
	const isCompact = useGetResponsiveValue<boolean>(isCompactProp);
	const isRound = useGetResponsiveValue<boolean>(isRoundProp);
	const isOutlined = useGetResponsiveValue<boolean>(isOutlinedProp);

	const size = useGetResponsiveValue<DummyIconButtonSize>(sizeProp);
	const variant = useGetResponsiveValue<DummyIconButtonVariant>(variantProp);

	return { isAnimated, isCompact, isRound, isOutlined, size, variant };
};

export default useDummyIconButtonResponsiveValues;
