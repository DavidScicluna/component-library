import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { ArrowProps } from '../../types';

export type ArrowStyleProps = {
	theme: Theme;
} & Pick<ArrowProps, 'colorMode' | 'direction'>;

export type ArrowStyleReturn = {
	arrow: Style;
	before: Style;
	after: Style;
};
