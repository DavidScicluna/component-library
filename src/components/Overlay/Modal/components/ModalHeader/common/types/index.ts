import { ReactNode } from 'react';

import { ModalHeaderProps as CUIModalHeaderProps, TextProps } from '@chakra-ui/react';

import {
	BoxFlexbox,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxShadow,
	BoxTypography
} from '../../../../../../../common/types/box';
import { Space } from '../../../../../../../theme/types';
import { CloseIconButtonProps } from '../../../../../../Clickable/IconButtons/CloseIconButton/common/types';
import { IconProps } from '../../../../../../Icon/common/types';

type IconPropsPicked = 'icon' | 'category';
type IconButtonPropsPicked = 'aria-label' | 'color' | 'colorMode' | 'onClick' | 'size' | 'variant';

export type ModalHeaderRenderCancelProps = Pick<IconProps, IconPropsPicked> &
	Pick<CloseIconButtonProps, IconButtonPropsPicked>;

type Omitted =
	// CUI Box Props
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxOther
	// CUI Modal Header Props
	| 'children';

export type ModalHeaderProps = Omit<CUIModalHeaderProps, Omitted> & {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	renderCancel?: (props: ModalHeaderRenderCancelProps) => ReactNode;
	spacing?: Space;
};
