import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import {
	BoxFlexbox,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxShadow,
	BoxTypography
} from '../../../../../../../common/types/box';
import { ButtonProps } from '../../../../../../Clickable/Buttons/OriginalButton/common/types';
import { StateLabelContext } from '../../../../common/types';

export type StateLabelActionsRenderActionsProps = StateLabelContext & Pick<ButtonProps, 'variant'>;

type Omitted =
	// CUI Box Props
	| BoxTypography
	| BoxFlexbox
	| BoxGrid
	| BoxPosition
	| BoxShadow
	| BoxOther
	// CUI Stack Props
	| 'as'
	| 'children'
	| 'direction';

export type StateLabelActionsProps = Omit<StackProps, Omitted> & {
	renderActions: (props: StateLabelActionsRenderActionsProps) => ReactNode;
};
