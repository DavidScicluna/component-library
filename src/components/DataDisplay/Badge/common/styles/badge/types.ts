import { BadgeStyleProps as AllBadgeStyleProps } from '../types';

export type BadgeStyleProps = Pick<AllBadgeStyleProps, 'theme' | 'isClickable' | 'isFullWidth'>;
