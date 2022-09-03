import { Color } from '../../../../../../theme/types';
import { LinkStyleProps as AllLinkStyleProps } from '../types';

export type LinkLightStylingProps = { color: Exclude<Color, 'transparent'> } & Pick<AllLinkStyleProps, 'theme'>;
