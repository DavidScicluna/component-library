import { Style } from '../../../../../../../common/types';
import { Theme } from '../../../../../../../theme/types';
import { DummyAccordionsProps } from '../../../../types';
import { DummyAccordionProps } from '../../types';

export type DummyAccordionStyleProps = Pick<DummyAccordionProps, 'isLight'> & {
	theme: Theme;
} & Pick<DummyAccordionsProps, 'color' | 'colorMode' | 'isFullWidth'>;

export type DummyAccordionStyleReturn = {
	accordion: Style;
};
