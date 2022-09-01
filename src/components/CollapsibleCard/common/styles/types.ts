import { Style } from '../../../../common/types';
import { Theme } from '../../../../theme/types';
import { CollapsibleCardProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth' | 'isFixed' | 'isLight' | 'isOpen';

export type CollapsibleCardStyleProps = Pick<CollapsibleCardProps, Picked> & {
	theme: Theme;
};

export type CollapsibleCardStyleReturn = {
	card: Style;
	active: Style;
	disabled: {
		card: Style;
		header: Style;
	};
};
