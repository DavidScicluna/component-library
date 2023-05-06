import { Icon as IconType } from '../../../../../../../../../../common/types/icons';

export type Tool = {
	title: string;
	icon: IconType;
};

export type ToolProps = {
	isDisabled?: boolean;
	isSelected?: boolean;
	onSelect: () => void;
} & Tool;
