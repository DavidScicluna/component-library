import { ReactNode } from 'react';

import { ModalFooterProps as CUIModalFooterProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';
import { Space } from '../../../../../theme/types';
import { ButtonProps } from '../../../../Clickable/Buttons/OriginalButton/types';

type ButtonPropsPicked = 'color' | 'colorMode' | 'size' | 'variant';

type RenderProps = Pick<ButtonProps, ButtonPropsPicked>;

type Omitted =
	// CUI Box Props
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxOther
	// CUI Modal Footer Props
	| 'children';

export type ModalFooterProps = {
	renderCancel?: (props: RenderProps) => ReactNode;
	renderAction?: (props: RenderProps) => ReactNode;
	spacing?: Space;
} & Omit<CUIModalFooterProps, Omitted>;
