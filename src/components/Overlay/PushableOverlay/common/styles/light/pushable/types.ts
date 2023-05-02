import { PushableOverlayStyleProps } from '../../types';

type Picked = 'theme' | 'color' | 'isFixed' | 'isPushable';

export type PushableOverlayLightStylingProps = Pick<PushableOverlayStyleProps, Picked>;
