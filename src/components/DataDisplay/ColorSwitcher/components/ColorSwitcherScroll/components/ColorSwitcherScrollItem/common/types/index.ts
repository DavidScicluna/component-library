import { MouseEvent as ME } from 'react';

import { CenterProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../../../../../common/types';
import {
	BoxBackground,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxMargin,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../../../../common/types/box';
import { TooltipProps } from '../../../../../../../../Overlay/Tooltip/common/types';
import { ColorSwitcherContext } from '../../../../../../common/types';

export type ColorSwitcherScrollItemMouseEvent = ME<HTMLDivElement, globalThis.MouseEvent>;

type Omitted =
	| BoxMargin
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther
	| 'onChange';

export type ColorSwitcherScrollItemProps = Pick<ColorSwitcherContext, 'color' | 'colorMode' | 'onChange'> & {
	isActive?: boolean;
	hasTooltip?: boolean;
} & Omit<CenterProps, Omitted> &
	Pick<TooltipProps, 'label' | 'placement'>;

export type ColorSwitcherScrollItemRef = Nullable<HTMLDivElement>;
