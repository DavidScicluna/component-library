import { ReactNode } from 'react';

import { CenterProps } from '@chakra-ui/react';

import { AppColor } from '../../../../../../../common/types';
import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../../common/types/box';
import { ConfirmModalProps } from '../../../../common/types';

export type ConfirmModalIconVariant = 'contained' | 'outlined' | 'transparent';

export type ConfirmModalIconRenderIconProps = Pick<ConfirmModalProps, 'colorMode'>;

type Omitted =
	| BoxColor
	| BoxGradient
	| BoxTypography
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
	| 'as';

export type ConfirmModalIconProps = Omit<CenterProps, Omitted> & {
	renderIcon: (props: ConfirmModalIconRenderIconProps) => ReactNode;
	color: AppColor;
	variant?: ConfirmModalIconVariant;
};
