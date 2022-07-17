import { NavItemStyleProps as AllNavItemStyleProps } from '../types';

type Picked = 'theme' | 'isActive' | 'mode';

export type NavItemStyleProps = Pick<AllNavItemStyleProps, Picked>;
