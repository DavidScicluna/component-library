import { BoxLayout, BoxMargin, BoxPadding, BoxTypography } from '../../../../../../../../common/types/box';
import { IconProps, IconRef } from '../../../../../../../Icon/common/types';

type Omitted =
	| BoxMargin
	| BoxPadding
	| BoxTypography
	| BoxLayout
	| 'color'
	| 'colorMode'
	| 'width'
	| 'height'
	| 'fontSize'
	| 'variant';

export type IconButtonIconProps = Omit<IconProps, Omitted>;

export type IconButtonIconRef = IconRef;
