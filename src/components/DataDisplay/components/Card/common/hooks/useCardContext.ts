import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';

import { CardContext } from '../../Card';
import {
	__DEFAULT_CARD_IS_COLLAPSABLE__,
	__DEFAULT_CARD_IS_DISABLED__,
	__DEFAULT_CARD_IS_DIVISIBLE__,
	__DEFAULT_CARD_IS_OPEN__,
	__DEFAULT_CARD_VARIANT__
} from '../constants';
import type { CardContext as CardContextType } from '../types';

import useCardResponsiveValues from './useCardResponsiveValues';

const useCardContext = () => {
	const {
		color,
		colorMode,
		isCollapsable: isCollapsableProp = __DEFAULT_CARD_IS_COLLAPSABLE__,
		isDisabled: isDisabledProp = __DEFAULT_CARD_IS_DISABLED__,
		isDivisible: isDivisibleProp = __DEFAULT_CARD_IS_DIVISIBLE__,
		isHovering,
		isOpen: isOpenProp = __DEFAULT_CARD_IS_OPEN__,
		onHover,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_CARD_VARIANT__
	} = useContext<CardContextType>(CardContext);

	const { isCollapsable, isDisabled, isDivisible, isOpen, spacing, variant } = useCardResponsiveValues({
		isCollapsable: isCollapsableProp,
		isDisabled: isDisabledProp,
		isDivisible: isDivisibleProp,
		isOpen: isOpenProp,
		spacing: spacingProp,
		variant: variantProp
	});

	return { color, colorMode, isCollapsable, isDisabled, isDivisible, isHovering, isOpen, onHover, spacing, variant };
};

export default useCardContext;
