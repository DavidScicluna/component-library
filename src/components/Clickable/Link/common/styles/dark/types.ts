import { Color } from '../../../../../../theme/types';
import { LinkStyleProps as AllLinkStyleProps } from '../types';

export type LinkDarkStylingProps = { color: Exclude<Color, 'transparent'> } & Pick<AllLinkStyleProps, 'theme'>;
