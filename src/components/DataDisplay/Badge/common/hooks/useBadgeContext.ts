import { useContext } from 'react';

import { color as defaultColor, colorMode as defaultColorMode } from '../../../../../common/default/props';
import { NoUndefinedField } from '../../../../../common/types';
import { BadgeContext } from '../..';
import { size as defaultSize, variant as defaultVariant } from '../default/props';
import { BadgeContext as BadgeContextType } from '../types';

const useBadgeContext = (): NoUndefinedField<BadgeContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		size = defaultSize,
		variant = defaultVariant
	} = useContext<BadgeContextType>(BadgeContext);

	return {
		color,
		colorMode,
		size,
		variant
	};
};

export default useBadgeContext;
