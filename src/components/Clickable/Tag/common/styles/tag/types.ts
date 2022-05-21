import { TagStyleProps as AllTagStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'isClickable' | 'size';

export type TagStyleProps = Pick<AllTagStyleProps, Picked>;
