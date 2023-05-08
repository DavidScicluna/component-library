import { IconButtonProps, IconButtonRef } from '../../../../../Clickable/IconButtons/OriginalIconButton/common/types';

type ArrowDirection = 'left' | 'right';

type Omitted = 'children' | 'aria-label' | 'color' | 'colorMode' | 'variant';

export type ArrowProps = Omit<IconButtonProps, Omitted> & {
	direction: ArrowDirection;
};

export type ArrowRef = IconButtonRef;
