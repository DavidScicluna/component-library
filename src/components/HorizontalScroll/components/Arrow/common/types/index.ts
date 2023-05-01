import { MouseEvent } from 'react';

import { IconButtonProps } from '../../../../../Clickable/IconButtons/OriginalIconButton/common/types';

export type Event = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

type Direction = 'left' | 'right';

export type ArrowProps = Omit<IconButtonProps, 'children' | 'aria-label'> & {
	direction: Direction;
	isVisible?: boolean;
};
