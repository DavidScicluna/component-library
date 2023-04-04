import { ReactNode } from 'react';

import { StackProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';
import { StateLabelContext } from '../../types';

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
	renderActions: (props: StateLabelContext) => ReactNode;
};
