import { IconButtonStyleProps } from '../types';

type Picked = 'theme' | 'isLoading' | 'size';

export type IconButtonDisabledStylingProps = Pick<IconButtonStyleProps, Picked>;
