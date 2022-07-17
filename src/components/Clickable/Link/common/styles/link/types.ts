import { LinkStyleProps as AllLinkStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth' | 'isString';

export type LinkStyleProps = Pick<AllLinkStyleProps, Picked>;
