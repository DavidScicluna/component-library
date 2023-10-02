import type { ElementType } from 'react';
import { useContext } from 'react';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { ThemeSpacing } from '@common/types';

import { CardContext } from '../../Card';
import {
	__DEFAULT_CARD_IS_COLLAPSABLE__,
	__DEFAULT_CARD_IS_DISABLED__,
	__DEFAULT_CARD_IS_DIVISIBLE__,
	__DEFAULT_CARD_IS_OPEN__,
	__DEFAULT_CARD_VARIANT__
} from '../constants';
import type { CardContext as CardContextType, CardVariant } from '../types';

const useCardContext = <Element extends ElementType>() => {
	const {
		color,
		colorMode,
		isCollapsable: collapsable = __DEFAULT_CARD_IS_COLLAPSABLE__,
		isDisabled: disabled = __DEFAULT_CARD_IS_DISABLED__,
		isDivisible: divisible = __DEFAULT_CARD_IS_DIVISIBLE__,
		isHovering,
		isOpen: open = __DEFAULT_CARD_IS_OPEN__,
		onHover,
		spacing: s = __DEFAULT_SPACING__,
		variant: v = __DEFAULT_CARD_VARIANT__
	} = useContext<CardContextType<Element>>(CardContext);

	const isCollapsable = useGetResponsiveValue<boolean>(collapsable);
	const isDisabled = useGetResponsiveValue<boolean>(disabled);
	const isDivisible = useGetResponsiveValue<boolean>(divisible);
	const isOpen = useGetResponsiveValue<boolean>(open);

	const spacing = useGetResponsiveValue<ThemeSpacing>(s);
	const variant = useGetResponsiveValue<CardVariant>(v);

	return { color, colorMode, isCollapsable, isDisabled, isDivisible, isHovering, isOpen, onHover, spacing, variant };
};

export default useCardContext;
