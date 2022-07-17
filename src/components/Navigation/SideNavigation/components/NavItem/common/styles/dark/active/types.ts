import { NavItemStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type NavItemDarkActiveStylingProps = Pick<NavItemStyleProps, Picked>;
