import { ReactNode } from 'react';

import { ModalFooterProps as CUIModalFooterProps } from '@chakra-ui/react';

import {
	BoxFlexbox,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxShadow,
	BoxTypography
} from '../../../../../../../common/types/box';
import { Space } from '../../../../../../../theme/types';
import { ButtonProps } from '../../../../../../Clickable/Buttons/OriginalButton/common/types';

export type ModalFooterRenderProps = Pick<ButtonProps, 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant'>;
export type ModalFooterRenderCancelProps = Pick<ButtonProps, 'onClick'> & ModalFooterRenderProps;

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

export type ModalFooterProps = Omit<CUIModalFooterProps, Omitted> & {
	renderCancel?: (props: ModalFooterRenderCancelProps) => ReactNode;
	renderAction?: (props: ModalFooterRenderProps) => ReactNode;
	spacing?: Space;
};
