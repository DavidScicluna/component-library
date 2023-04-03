import { ReactNode } from 'react';

import { ModalHeaderProps as CUIModalHeaderProps, TextProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';
import { Space } from '../../../../../theme/types';
import { IconButtonProps } from '../../../../Clickable/IconButtons/OriginalIconButton/types';
import { IconProps } from '../../../../Icon/types';

type IconPropsPicked = 'icon' | 'category';

type IconButtonPropsPicked = 'aria-label' | 'color' | 'colorMode' | 'onClick' | 'size' | 'variant';

type RenderCancelProps = Pick<IconProps, IconPropsPicked> & Pick<IconButtonProps, IconButtonPropsPicked>;

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

export type ModalHeaderProps = {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	renderCancel?: (props: RenderCancelProps) => ReactNode;
	spacing?: Space;
} & Omit<CUIModalHeaderProps, Omitted>;
