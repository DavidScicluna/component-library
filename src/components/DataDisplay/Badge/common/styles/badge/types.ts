import { BadgeStyleProps as AllBadgeStyleProps } from '../types';

type Picked = 'theme' | 'size';

export type BadgeStyleProps = Pick<AllBadgeStyleProps, Picked>;
