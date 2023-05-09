import {
	IconButtonProps,
	IconButtonRef
} from '../../../../../../Clickable/IconButtons/OriginalIconButton/common/types';
import { HorizontalScrollArrowDirection } from '../../../../common/types';

type Omitted = 'children' | 'aria-label' | 'color' | 'colorMode' | 'variant';

export type ArrowProps = Omit<IconButtonProps, Omitted> & {
	direction: HorizontalScrollArrowDirection;
};

export type ArrowRef = IconButtonRef;
