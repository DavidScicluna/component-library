import { MouseEvent } from 'react';

import { IconButtonProps } from '../../../../Clickable/IconButton/types';

export type TagEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

type Omitted = 'aria-label' | 'children' | 'colorMode' | 'onClick' | 'size' | 'variant';

export type TagDeleteIconButtonProps = {
	onDelete: (event: TagEvent) => void;
} & Omit<IconButtonProps, Omitted>;
