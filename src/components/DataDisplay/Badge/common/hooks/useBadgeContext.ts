import { useContext } from 'react';

import { BadgeContext } from '../..';
import { NoUndefinedField } from '../../../../../common/types';
import { BadgeContext as BadgeContextType } from '../../types';
import {
	color as defaultColor,
	colorMode as defaultColorMode,
	isLight as defaultIsLight,
	size as defaultSize,
	variant as defaultVariant
} from '../data/defaultPropValues';

const useBadgeContext = (): NoUndefinedField<BadgeContextType> => {
	const {
		color = defaultColor,
		colorMode = defaultColorMode,
		isLight = defaultIsLight,
		size = defaultSize,
		variant = defaultVariant
	} = useContext<BadgeContextType>(BadgeContext);

	return { color, colorMode, isLight, size, variant };
};

export default useBadgeContext;
