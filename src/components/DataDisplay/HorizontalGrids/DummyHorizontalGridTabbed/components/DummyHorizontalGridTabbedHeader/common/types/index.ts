import { StackProps } from '@chakra-ui/react';

import {
	BoxBackground,
	BoxBorderRadius,
	BoxBorders,
	BoxColor,
	BoxFilter,
	BoxFlexbox,
	BoxGradient,
	BoxGrid,
	BoxLayout,
	BoxMargin,
	BoxOther,
	BoxPosition,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../../../../../common/types/box';
import { Space } from '../../../../../../../../theme/types';
import { DummyTabListProps } from '../../../../../../../Navigation/Tabs/DummyTabs/components/DummyTabList/common/types';
import { DummyCardHeaderProps } from '../../../../../../Cards/DummyCard/components/DummyCardHeader/common/types';
import { DummyHorizontalGridArrowsProps } from '../../../../../components/DummyHorizontalGridArrows/common/types';

type Omitted =
	| BoxMargin
	| BoxColor
	| BoxGradient
	| BoxTypography
	| BoxLayout
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
	| 'as'
	| 'children'
	| 'direction'
	| 'spacing';

export type DummyHorizontalGridTabbedHeaderProps = Omit<StackProps, Omitted> & {
	dummyCardHeaderProps: DummyCardHeaderProps;
	dummyTabListProps: DummyTabListProps;
	spacing?: Space;
} & Pick<DummyHorizontalGridArrowsProps, 'dummyArrowProps'>;
