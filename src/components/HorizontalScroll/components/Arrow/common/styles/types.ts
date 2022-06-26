import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { ArrowProps } from '../../types';

export type ArrowStyleProps = {
	theme: Theme;
} & Pick<ArrowProps, 'colorMode' | 'direction' | 'isDisabled'>;

export type ArrowStyleReturn = {
	arrow: Style;
	pseudo: Style;
	transition: Style;
};
