import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxGradient,
	BoxMargin,
	BoxPadding,
	BoxPosition,
	BoxShadow,
	BoxTypography} from '../../../../../common/types/box';
import { IconProps } from '../../../../Icon/types';

type Omitted =
	// CUI Box Props
	| BoxMargin
	| BoxPadding
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxBackground
	| BoxBorders
	| BoxBorderRadius
	| BoxPosition
	| BoxShadow
	| BoxFilter
	// CUI Icon Props
	| 'colorMode';

export type BadgeIconProps = Omit<IconProps, Omitted>;
