import { Style } from '../../../../../../common/types';
import { Theme } from '../../../../../../theme/types';
import { AccordionsProps } from '../../../../types';
import { AccordionProps } from '../../types';

export type AccordionStyleProps = Pick<AccordionProps, 'isLight' | 'isOpen'> & {
	theme: Theme;
} & Pick<AccordionsProps, 'color' | 'colorMode' | 'isFullWidth'>;

export type AccordionStyleReturn = {
	accordion: Style;
	active: Style;
	disabled: {
		accordion: Style;
		header: Style;
	};
};
