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
	BoxTypography} from '../../../../../../common/types/box';
import { CardHeaderProps } from '../../../../../Cards/OriginalCard/components/CardHeader/types';
import { TabListProps } from '../../../../../Navigation/Tabs/OriginalTabs/components/TabList/types';
import { HorizontalGridArrowsProps } from '../../../components/HorizontalGridArrows/types';

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

export type HorizontalGridTabbedHeaderProps = Omit<StackProps, Omitted> & {
	cardHeaderProps: CardHeaderProps;
	tabListProps: TabListProps;
} & Pick<HorizontalGridArrowsProps, 'arrowProps'>;
