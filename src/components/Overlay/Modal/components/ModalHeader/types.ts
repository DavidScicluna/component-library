import { ReactNode } from 'react';

import { ModalHeaderProps as CUIModalHeaderProps, TextProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';
import { Space } from '../../../../../theme/types';
import { IconButtonProps } from '../../../../Clickable/IconButton/types';
import { IconProps } from '../../../../Icon/types';

type IconPropsPicked = 'icon' | 'type';

type ButtonPropsPicked = 'aria-label' | 'color' | 'colorMode' | 'size' | 'variant';

type RenderProps = Pick<IconProps, IconPropsPicked> & Pick<IconButtonProps, ButtonPropsPicked>;

type Omitted =
	// CUI Box Props
	BoxTypography | BoxFlexbox | BoxGrid | BoxPosition | BoxShadow | BoxOther;

export type ModalHeaderProps = {
	renderTitle: (props: TextProps) => ReactNode;
	renderSubtitle?: (props: TextProps) => ReactNode;
	renderCancel?: (props: RenderProps) => ReactNode;
	spacing?: Space;
} & Omit<CUIModalHeaderProps, Omitted>;
