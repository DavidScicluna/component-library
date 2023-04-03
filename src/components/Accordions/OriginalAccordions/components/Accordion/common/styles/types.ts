import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { AccordionsProps } from '../../../../types';
import { AccordionProps } from '../../types';

export type AccordionStyleProps = Pick<AccordionProps<unknown>, 'isFixed' | 'isLight'> & {
	theme: Theme;
	isOpen?: boolean;
} & Pick<AccordionsProps<unknown>, 'color' | 'colorMode' | 'isFullWidth'>;

export type AccordionStyleReturn = {
	accordion: Style;
	active: Style;
	disabled: {
		accordion: Style;
		header: Style;
	};
};
