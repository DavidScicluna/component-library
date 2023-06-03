import { FormLabelProps as CUIFormLabelProps } from '@chakra-ui/react';

import { Nullable } from '../../../../../common/types';
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
	| BoxOther
	| 'children'
	| 'as'
	| 'htmlFor';

type Picked = 'colorMode' | 'isRequired' | 'isError' | 'isSuccess' | 'isWarning' | 'size';

export type FormLabelProps = Omit<CUIFormLabelProps, Omitted> & {
	children?: Nullable<string>;
	htmlFor: string;
} & Pick<FormControlProps, Picked>;

export type FormLabelRef = Nullable<HTMLLabelElement>;
