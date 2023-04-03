import { ModalBodyProps as CUIModalBodyProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';

type Omitted = BoxTypography | BoxFlexbox | BoxGrid | BoxPosition | BoxShadow | BoxOther;

export type ModalBodyProps = Omit<CUIModalBodyProps, Omitted>;
