import { AccordionsColor, AccordionsProps } from '../../types';

export type QuickTogglesSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type QuickTogglesProps = {
	color?: AccordionsColor;
	isLoading?: boolean;
	size?: QuickTogglesSize;
} & Pick<AccordionsProps, 'isDisabled' | 'spacing'>;
