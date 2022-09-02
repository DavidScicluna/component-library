import { TagStyleProps as AllTagStyleProps } from '../types';

type Picked = 'theme' | 'isClickable' | 'isFullWidth' | 'size';

export type TagStyleProps = Pick<AllTagStyleProps, Picked>;
