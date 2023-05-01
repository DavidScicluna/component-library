import { StackProps } from '@chakra-ui/react';

import {
	BoxFlexbox,
	BoxGrid,
	BoxOther,
	BoxPosition,
	BoxShadow,
	BoxTypography
} from '../../../../../../../common/types/box';

type Omitted = BoxTypography | BoxFlexbox | BoxGrid | BoxPosition | BoxShadow | BoxOther | 'as' | 'direction';

export type StateLabelBodyProps = Omit<StackProps, Omitted>;
