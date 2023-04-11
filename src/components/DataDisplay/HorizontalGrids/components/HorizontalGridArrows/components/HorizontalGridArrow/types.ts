import { IconButtonProps } from '../../../../../../Clickable/IconButtons/OriginalIconButton/types';

export type HorizontalGridArrowDirection = 'left' | 'right';

export type HorizontalGridArrowProps = Omit<IconButtonProps, 'children' | 'aria-label'> & {
	direction: HorizontalGridArrowDirection;
};
