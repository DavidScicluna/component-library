import { DummyIconButtonProps } from '../../../../../../Clickable/IconButtons/DummyIconButton/types';

export type DummyHorizontalGridArrowDirection = 'left' | 'right';

export type DummyHorizontalGridArrowProps = Omit<DummyIconButtonProps, 'children' | 'aria-label'> & {
	direction: DummyHorizontalGridArrowDirection;
};
