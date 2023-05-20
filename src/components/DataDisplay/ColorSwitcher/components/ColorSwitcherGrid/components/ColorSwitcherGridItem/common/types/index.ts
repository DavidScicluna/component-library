import { BoxLayout, BoxMargin, BoxPadding, BoxPseudo } from '../../../../../../../../../common/types/box';
import { CardProps, CardRef } from '../../../../../../../Cards/OriginalCard/common/types';
import { ColorSwitcherContext } from '../../../../../../common/types';

type Omitted =
	| BoxMargin
	| BoxPadding
	| BoxLayout
	| BoxPseudo
	| 'color'
	| 'colorMode'
	| 'isClickable'
	| 'onChange'
	| 'variant';

export type ColorSwitcherGridItemProps = Pick<ColorSwitcherContext, 'color' | 'colorMode' | 'onChange'> & {
	isActive?: boolean;
} & Omit<CardProps, Omitted>;

export type ColorSwitcherGridItemRef = CardRef;
