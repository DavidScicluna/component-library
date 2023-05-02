import { PushableOverlayStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isFixed' | 'isPushable';

export type PushableOverlayDarkStylingProps = Pick<PushableOverlayStyleProps, Picked>;
