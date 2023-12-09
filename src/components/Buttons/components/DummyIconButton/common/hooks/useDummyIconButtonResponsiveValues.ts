import { useGetResponsiveValue } from '@common/hooks';

import {
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
	__DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
	__DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
	__DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
} from '../constants';
import type { DummyIconButtonProps, DummyIconButtonSize, DummyIconButtonVariant } from '../types';

type UseDummyIconButtonResponsiveValuesProps = Pick<
	DummyIconButtonProps,
	'isAnimated' | 'isCompact' | 'isRound' | 'isOutlined' | 'size' | 'variant'
>;

const useDummyIconButtonResponsiveValues = (props: UseDummyIconButtonResponsiveValuesProps) => {
	const {
		isAnimated: isAnimatedProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_ANIMATED__,
		isCompact: isCompactProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_COMPACT__,
		isRound: isRoundProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_ROUND__,
		isOutlined: isOutlinedProp = __DEFAULT_DUMMY_ICON_BUTTON_IS_OUTLINED__,
		size: sizeProp = __DEFAULT_DUMMY_ICON_BUTTON_SIZE__,
		variant: variantProp = __DEFAULT_DUMMY_ICON_BUTTON_VARIANT__
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
