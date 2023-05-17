import { StackProps } from '@chakra-ui/react';

import { IconType, Nullable } from '../../../../..';
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
import { FormControlProps } from '../../../FormControl/common/types';

export type RatingIcons = Record<'default' | 'active' | 'hover', IconType>;

type Omitted =
	// CUI Box Props
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
	| BoxOther
	| 'as'
	| 'children';

type Picked =
	| 'color'
	| 'colorMode'
	| 'isDisabled'
	| 'isError'
	| 'isReadOnly'
	| 'isRequired'
	| 'isSuccess'
	| 'isWarning'
	| 'size';

export type RatingProps = Pick<FormControlProps, Picked> & {
	icons?: RatingIcons;
	count?: number;
	hasTrailingHover?: boolean;
	onChange?: (rating: number) => void;
	value?: number;
} & Omit<StackProps, Omitted>;

export type RatingRef = Nullable<HTMLDivElement>;
