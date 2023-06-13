import { BoxProps } from '@chakra-ui/react';

import { CommonThemeProps, Nullable } from '../../../../../common/types';
import { BoxFlexbox, BoxGrid, BoxOther, BoxPseudo, BoxShadow, BoxTypography } from '../../../../../common/types/box';

type Omitted = BoxTypography | BoxFlexbox | BoxGrid | BoxShadow | BoxPseudo | BoxOther | 'children';

export type BackdropOverlayProps = Omit<BoxProps, Omitted> & CommonThemeProps;

export type BackdropOverlayRef = Nullable<HTMLDivElement>;
