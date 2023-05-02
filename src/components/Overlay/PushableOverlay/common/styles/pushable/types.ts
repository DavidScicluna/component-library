import { PushableOverlayStyleProps as AllPushableOverlayStyleProps } from '../types';

type Picked = 'theme' | 'borderRadius' | 'isFixed' | 'isPushable';

export type PushableOverlayStyleProps = Pick<AllPushableOverlayStyleProps, Picked>;
