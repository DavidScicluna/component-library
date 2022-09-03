import { TagStyleProps as AllTagStyleProps } from '../types';

export type TagStyleProps = Pick<AllTagStyleProps, 'theme' | 'isClickable' | 'isFullWidth' | 'size'>;
