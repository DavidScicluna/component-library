import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { StateLabelContext } from '../../../../common/types';
import { StateLabelIconProps } from '../types';

export type StateLabelIconStyleProps = Pick<StateLabelContext, 'color' | 'colorMode'> & {
	theme: Theme;
} & Pick<StateLabelIconProps, 'variant'>;

export type StateLabelIconStyleReturn = {
	icon: Style;
};
