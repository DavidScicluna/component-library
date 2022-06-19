import { Accordion, AccordionsColor, AccordionsProps } from '../../types';

export type QuickTogglesSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type OnToggleProps = { id: Accordion['id'] };

export type QuickTogglesProps = {
	color?: AccordionsColor;
	opened: number;
	isLoading?: boolean;
	onToggle: (props?: OnToggleProps) => void;
	size?: QuickTogglesSize;
} & Pick<AccordionsProps, 'isDisabled' | 'spacing'>;
