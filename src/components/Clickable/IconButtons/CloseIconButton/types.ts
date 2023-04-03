import { IconCategory, IconType, PickEnum } from '../../../..';
import { TooltipProps } from '../../../Overlay/Tooltip/types';
import { IconButtonProps } from '../OriginalIconButton/types';

type Picked = 'close' | 'cancel' | 'highlight_off' | 'disabled_by_default' | 'cancel_presentation';

export type CloseIconButtonIconType = PickEnum<IconType, Picked>;

export type CloseIconButtonProps = Omit<IconButtonProps, 'children'> & {
	hasTooltip?: boolean;
	icon?: CloseIconButtonIconType;
	category?: IconCategory;
} & Pick<TooltipProps, 'label' | 'placement'>;
