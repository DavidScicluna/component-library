import { ReactNode } from 'react';

import { GridProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxMargin,
	BoxOther,
	BoxPadding,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../common/types/box';

type IndicatorPositionX = 'start' | 'center' | 'end';
type IndicatorPositionY = 'top' | 'middle' | 'bottom';

export type IndicatorPosition = `${IndicatorPositionY}-${IndicatorPositionX}`;

export type IndicatorRenderIndicatorProps = Pick<IndicatorProps, 'color' | 'colorMode'>;

type Omitted =
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
	| BoxFlexbox
	| BoxGrid
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	| BoxPseudo
	| BoxOther;

export type IndicatorProps = Omit<GridProps, Omitted> & {
	renderIndicator?: (props: IndicatorRenderIndicatorProps) => ReactNode;
	position?: IndicatorPosition;
	offset?: number;
} & CommonThemeProps;

export type IndicatorRef = Nullable<HTMLDivElement>;
