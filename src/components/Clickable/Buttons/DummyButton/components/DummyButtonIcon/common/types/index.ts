import { BoxLayout, BoxMargin, BoxPadding, BoxTypography } from '../../../../../../../../common/types/box';
import { IconProps, IconRef } from '../../../../../../../DataDisplay/Icon/common/types';

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

export type DummyButtonIconProps = Omit<IconProps, Omitted>;

export type DummyButtonIconRef = IconRef;
