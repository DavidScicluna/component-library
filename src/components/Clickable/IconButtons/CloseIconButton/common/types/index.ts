import { IconCategory, IconType } from '../../../../../..';
import { PickFrom } from '../../../../../../common/types';
import { TooltipProps } from '../../../../../Overlay/Tooltip/common/types';
import { IconButtonProps, IconButtonRef } from '../../../OriginalIconButton/common/types';

type Picked = 'close' | 'cancel' | 'highlight_off' | 'disabled_by_default' | 'cancel_presentation';

export type CloseIconButtonIconType = PickFrom<IconType, Picked>;

export type CloseIconButtonProps = Omit<IconButtonProps, 'children'> & {
	hasTooltip?: boolean;
	icon?: CloseIconButtonIconType;
	category?: IconCategory;
} & Pick<TooltipProps, 'label' | 'placement'>;

export type CloseIconButtonRef = IconButtonRef;
