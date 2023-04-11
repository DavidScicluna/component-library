import { StackProps } from '@chakra-ui/react';

import {
	BoxMargin,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from '../../../../../../common/types/box';
import { DummyCardHeaderProps } from '../../../../../Cards/DummyCard/components/DummyCardHeader/types';
import { DummyTabListProps } from '../../../../../Navigation/Tabs/DummyTabs/components/DummyTabList/types';
import { DummyHorizontalGridArrowsProps } from '../../../components/DummyHorizontalGridArrows/types';

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
	| 'direction';

export type DummyHorizontalGridTabbedHeaderProps = Omit<StackProps, Omitted> & {
	dummyCardHeaderProps: DummyCardHeaderProps;
	dummyTabListProps: DummyTabListProps;
} & Pick<DummyHorizontalGridArrowsProps, 'dummyArrowProps'>;
