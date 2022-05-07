import { IconButtonProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'size' | 'variant';

export type SpinnerProps = Pick<IconButtonProps, Picked>;
