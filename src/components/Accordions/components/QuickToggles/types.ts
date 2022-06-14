import { Accordion } from '../../types';

type OnToggleProps = { id: Accordion['id'] };

export type QuickTogglesProps = {
	opened: number;
	isDisabled?: boolean;
	isLoading?: boolean;
	onToggle: (props?: OnToggleProps) => void;
};
