import { IconButtonProps } from '../../../../../../Clickable/IconButtons/OriginalIconButton/common/types';

export type HorizontalGridArrowDirection = 'left' | 'right';

export type HorizontalGridArrowProps = Omit<IconButtonProps, 'children' | 'aria-label'> & {
	direction: HorizontalGridArrowDirection;
};

export type HorizontalGridArrowsProps = {
	isLeftDisabled: boolean;
	isRightDisabled: boolean;
	onLeftClick: () => void;
	onRightClick: () => void;
	arrowProps?: Omit<HorizontalGridArrowProps, 'direction' | 'isDisabled' | 'onClick'>;
};
