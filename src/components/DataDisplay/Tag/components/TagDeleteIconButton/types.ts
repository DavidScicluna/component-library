import { MouseEvent } from 'react';

import { IconButtonProps } from '../../../../Clickable/IconButtons/OriginalIconButton/types';

export type TagEvent = MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

export type TagDeleteIconButtonProps = {
	onDelete: (event: TagEvent) => void;
} & Omit<IconButtonProps, 'aria-label' | 'children' | 'colorMode' | 'onClick' | 'size' | 'variant'>;
