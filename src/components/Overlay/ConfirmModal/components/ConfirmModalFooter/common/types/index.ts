import { ReactNode } from 'react';

import { ModalFooterProps } from '@chakra-ui/react';

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

type ButtonPropsPicked = 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant';

export type ConfirmModalFooterRenderProps = Pick<ButtonProps, ButtonPropsPicked>;
export type ConfirmModalFooterRenderCancelProps = Pick<ButtonProps, 'onClick'> & ConfirmModalFooterRenderProps;

type Omitted =
	// CUI Box Props
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxOther
	// CUI ConfirmModal Footer Props
	| 'children';

export type ConfirmModalFooterProps = {
	renderCancel?: (props: ConfirmModalFooterRenderCancelProps) => ReactNode;
	renderAction?: (props: ConfirmModalFooterRenderProps) => ReactNode;
	spacing?: Space;
} & Omit<ModalFooterProps, Omitted>;
