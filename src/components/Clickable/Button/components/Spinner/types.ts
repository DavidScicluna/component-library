import { ButtonProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'size' | 'variant';

export type SpinnerProps = {
	hasChildren?: boolean;
} & Pick<ButtonProps, Picked>;
