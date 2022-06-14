import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { AccordionsProps } from '../../../../types';
import { AccordionProps } from '../../types';

type Picked = 'color' | 'colorMode' | 'isFullWidth';

export type AccordionStyleProps = Pick<AccordionProps, 'isOpen'> & {
	theme: Theme;
} & Pick<AccordionsProps, Picked>;

export type AccordionStyleReturn = {
	accordion: Style;
	active: Style;
	disabled: {
		accordion: Style;
		header: Style;
	};
};
