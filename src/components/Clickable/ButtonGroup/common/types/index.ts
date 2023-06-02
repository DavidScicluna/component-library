import { ButtonGroupProps as CUIButtonGroupProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxOther,
	BoxPadding,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

type Omitted =
	// CUI Box Props
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	// CUI Button Group Props
	| 'as'
	| 'colorScheme'
	| 'isDisabled'
	| 'size'
	| 'variant';

export type ButtonGroupProps = Omit<CUIButtonGroupProps, Omitted> & {
	isCompact?: boolean;
	isRound?: boolean;
};

export type ButtonGroupRef = Nullable<HTMLDivElement>;

export type ButtonGroupContext = Pick<ButtonGroupProps, 'isAttached' | 'isCompact' | 'isRound'>;
