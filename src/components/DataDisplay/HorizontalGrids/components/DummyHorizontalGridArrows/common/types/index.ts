import { DummyIconButtonProps } from '../../../../../../Clickable/IconButtons/DummyIconButton/common/types';

export type DummyHorizontalGridArrowDirection = 'left' | 'right';

export type DummyHorizontalGridArrowProps = Omit<DummyIconButtonProps, 'children' | 'aria-label'> & {
	direction: DummyHorizontalGridArrowDirection;
};

export type DummyHorizontalGridArrowsProps = { dummyArrowProps?: Omit<DummyHorizontalGridArrowProps, 'direction'> };
