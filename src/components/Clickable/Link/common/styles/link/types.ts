import { LinkStyleProps as AllLinkStyleProps } from '../types';

type Picked = 'theme' | 'isFullWidth';

export type LinkStyleProps = Pick<AllLinkStyleProps, Picked>;
