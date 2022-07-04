import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { AccordionsProps } from '../../../../types';
import { AccordionProps } from '../../types';

export type AccordionStyleProps<D> = Pick<AccordionProps<D>, 'isLight'> & {
	theme: Theme;
	isOpen?: boolean;
} & Pick<AccordionsProps<D>, 'color' | 'colorMode' | 'isFullWidth'>;

export type AccordionStyleReturn = {
	accordion: Style;
	active: Style;
	disabled: {
		accordion: Style;
		header: Style;
	};
};
