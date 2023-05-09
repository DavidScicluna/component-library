import { IconStyleProps } from '../types';

type Picked = 'theme' | 'color';

export type IconLightStylingProps = Pick<IconStyleProps, Picked>;
