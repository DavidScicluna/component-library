import { Style } from '../../../../../common/types';
import { Theme } from '../../../../../theme/types';
import { PushableOverlayProps } from '../types';

type Picked = 'borderRadius' | 'color' | 'colorMode' | 'variant';

export type PushableOverlayStyleProps = Pick<PushableOverlayProps, Picked> & {
	theme: Theme;
};

export type PushableOverlayStyleReturn = {
	pushable: Style;
	active: Style;
	disabled: Style;
};
