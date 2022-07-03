import { AccordionsColor } from '../../../common/types';
import { AccordionsProps } from '../../types';

export type QuickTogglesSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type QuickTogglesProps = {
	color?: AccordionsColor;
	size?: QuickTogglesSize;
} & Pick<AccordionsProps, 'isDisabled' | 'spacing'>;
