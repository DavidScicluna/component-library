import type { ElementType } from 'react';
import { useContext } from 'react';

import { ButtonGroupContext } from '../../ButtonGroup';
import { __DEFAULT_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { ButtonGroupContext as ButtonGroupContextType } from '../types';

const useButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAttached = __DEFAULT_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isFullWidth,
		isRound,
		size,
		variant
	} = useContext<ButtonGroupContextType<Element>>(ButtonGroupContext);

	return { color, colorMode, isAttached, isCompact, isDisabled, isFullWidth, isRound, size, variant };
};

export default useButtonGroupContext;
