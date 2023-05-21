import { CommonThemeProps } from '../../../../../../../common/types';
import { AccordionsProps } from '../../../../common/types';

export type QuickTogglesSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type QuickTogglesProps<D> = Pick<AccordionsProps<D>, 'isDisabled' | 'spacing'> & {
	size?: QuickTogglesSize;
} & Pick<CommonThemeProps, 'color'>;
