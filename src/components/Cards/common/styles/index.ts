import memoize from 'micro-memoize';

import {
	isClickable as defaultIsClickable,
	isDisabled as defaultIsDisabled,
	isFixed as defaultIsFixed
} from '../default/props';

import active from './active';
import card from './card';
import disabled from './disabled';
import { CardStyleProps, CardStyleReturn } from './types';

export default memoize((props: CardStyleProps): CardStyleReturn => {
	const { theme, isClickable = defaultIsClickable, isDisabled = defaultIsDisabled, isFixed = defaultIsFixed } = props;

	return {
		card: card({ theme, isClickable, isFixed }),
		active: isClickable && !isFixed ? active() : {},
		disabled: isClickable && isDisabled ? disabled() : {}
	};
});
