import { StackProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';

type Omitted = BoxTypography | BoxFlexbox | BoxGrid | BoxPosition | BoxShadow | BoxOther | 'as' | 'direction';

export type StateLabelBodyProps = Omit<StackProps, Omitted>;
