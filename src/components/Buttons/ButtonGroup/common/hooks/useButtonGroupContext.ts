import type { ElementType } from 'react';
import { useContext } from 'react';

// import { useGetResponsiveValue } from '@common/hooks';
// import type { ButtonSize, ButtonVariant } from '@components/Buttons/Button';
// import { constants } from '@components/Buttons/Button';
import { ButtonGroupContext } from '../../ButtonGroup';
import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType } from '../types';

// const {
// 	__DEFAULT_BUTTON_IS_COMPACT__,
// 	__DEFAULT_BUTTON_IS_DISABLED__,
// 	__DEFAULT_BUTTON_IS_FULLWIDTH__,
// 	__DEFAULT_BUTTON_IS_ROUND__,
// 	__DEFAULT_BUTTON_SIZE__,
// 	__DEFAULT_BUTTON_VARIANT__
// } = constants;

const useButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAttached = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		// isCompact = __DEFAULT_BUTTON_IS_COMPACT__,
		isCompact,
		// isDisabled = __DEFAULT_BUTTON_IS_DISABLED__,
		isDisabled,
		// isFullWidth = __DEFAULT_BUTTON_IS_FULLWIDTH__,
		isFullWidth,
		// isRound = __DEFAULT_BUTTON_IS_ROUND__,
		isRound,
		// size: s = __DEFAULT_BUTTON_SIZE__,
		size,
		// variant: v = __DEFAULT_BUTTON_VARIANT__
		variant
	} = useContext<ButtonGroupContextType<Element>>(ButtonGroupContext);

	// const size = useGetResponsiveValue<ButtonSize>(s);
	// const variant = useGetResponsiveValue<ButtonVariant>(v);

	return { color, colorMode, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant };
};

export default useButtonGroupContext;
