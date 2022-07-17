import { NavItemStyleProps } from '../../types';

type Picked = 'theme' | 'color';

export type NavItemLightActiveStylingProps = Pick<NavItemStyleProps, Picked>;
