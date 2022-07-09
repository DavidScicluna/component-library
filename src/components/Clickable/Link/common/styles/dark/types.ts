import { Color } from '../../../../../../theme/types';
import { LinkStyleProps as AllLinkStyleProps } from '../types';

type Picked = 'theme';

export type LinkDarkStylingProps = { color: Exclude<Color, 'transparent'> } & Pick<AllLinkStyleProps, Picked>;
