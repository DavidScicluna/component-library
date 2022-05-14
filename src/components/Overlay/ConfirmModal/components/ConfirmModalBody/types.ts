import { ModalBodyProps } from '@chakra-ui/react';

import { BoxTypography, BoxFlexbox, BoxGrid, BoxPosition, BoxShadow, BoxOther } from '../../../../../common/types/box';

type Omitted =
	// CUI Box Props
	BoxTypography | BoxFlexbox | BoxGrid | BoxPosition | BoxShadow | BoxOther;

export type ConfirmModalBodyProps = Omit<ModalBodyProps, Omitted>;
