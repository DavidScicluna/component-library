import { ModeButton } from '../../../../common/types';

export type ModeButtonProps<I, V> = {
	isSelected?: boolean;
	isDisabled?: boolean;
	onSelect?: () => void;
} & ModeButton<I, V>;
