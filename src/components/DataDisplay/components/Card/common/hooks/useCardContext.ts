import { useContext } from 'react';

import { DEFAULT_SPACING } from '@common/constants';

import { CardContext } from '../../Card';
import {
	DEFAULT_CARD_IS_COLLAPSABLE,
	DEFAULT_CARD_IS_DISABLED,
	DEFAULT_CARD_IS_DIVISIBLE,
	DEFAULT_CARD_IS_OPEN,
	DEFAULT_CARD_VARIANT
} from '../constants';
import type { CardContext as CardContextType, CardElement } from '../types';

import useCardResponsiveValues from './useCardResponsiveValues';

const useCardContext = <Element extends CardElement>() => {
	const {
		color,
		colorMode,
		isCollapsable: isCollapsableProp = DEFAULT_CARD_IS_COLLAPSABLE,
		isDisabled: isDisabledProp = DEFAULT_CARD_IS_DISABLED,
		isDivisible: isDivisibleProp = DEFAULT_CARD_IS_DIVISIBLE,
		isHovering,
		isOpen: isOpenProp = DEFAULT_CARD_IS_OPEN,
		onHover,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_CARD_VARIANT
	} = useContext<CardContextType<Element>>(CardContext);

	const { isCollapsable, isDisabled, isDivisible, isOpen, spacing, variant } = useCardResponsiveValues<Element>({
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
