import { MouseEvent } from 'react';

import { IconButtonProps } from '../../../Clickable/IconButton/types';

export type Event = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

type Direction = 'left' | 'right';

export type ArrowProps = {
	direction: Direction;
} & Omit<IconButtonProps, 'children'>;
