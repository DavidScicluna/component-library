import type { ElementType } from 'react';
import { useContext } from 'react';

import { IconButtonGroupContext } from '../../IconButtonGroup';
import { __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__ } from '../constants';
import type { IconButtonGroupContext as IconButtonGroupContextType } from '../types';

const useIconButtonGroupContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isAttached = __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__,
		isCompact,
		isDisabled,
		isRound,
		size,
		variant
	} = useContext<IconButtonGroupContextType<Element>>(IconButtonGroupContext);

	return { color, colorMode, isAttached, isCompact, isDisabled, isRound, size, variant };
};

export default useIconButtonGroupContext;
