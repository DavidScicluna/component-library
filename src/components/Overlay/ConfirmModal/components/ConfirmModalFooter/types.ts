import { ReactNode } from 'react';

import { ModalFooterProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';
import { Space } from '../../../../../theme/types';
import { ButtonProps } from '../../../../Clickable/Buttons/common/types';

type ButtonPropsPicked = 'color' | 'colorMode' | 'isFullWidth' | 'size' | 'variant';

type RenderProps = Pick<ButtonProps, ButtonPropsPicked>;

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
	renderCancel?: (props: RenderProps) => ReactNode;
	renderAction?: (props: RenderProps) => ReactNode;
	spacing?: Space;
} & Omit<ModalFooterProps, Omitted>;
