import { BoxProps, ColorMode } from '@chakra-ui/react';

import { Nullable, Orientation } from '../../../../common/types';
import {
	BoxBorders,
	BoxFilter,
	BoxFlexbox,
	BoxGrid,
	BoxOther,
	BoxPseudo,
	BoxShadow,
	BoxTypography
} from '../../../../common/types/box';

type Omitted = BoxTypography | BoxFlexbox | BoxGrid | BoxBorders | BoxShadow | BoxFilter | BoxPseudo | BoxOther;

export type DividerProps = {
	colorMode?: ColorMode;
	orientation?: Orientation;
} & Omit<BoxProps, Omitted>;

export type DividerRef = Nullable<HTMLHRElement>;
