import { IconCategory, IconType } from '../../../../../..';
import { PickFrom } from '../../../../../../common/types';
import { TooltipProps } from '../../../../../Overlay/Tooltip/common/types';
import { IconButtonProps, IconButtonRef } from '../../../OriginalIconButton/common/types';

type Picked = 'clear' | 'backspace' | 'delete' | 'delete_forever' | 'delete_outline';

export type ClearIconButtonIconType = PickFrom<IconType, Picked>;

export type ClearIconButtonProps = Omit<IconButtonProps, 'children'> & {
	hasTooltip?: boolean;
	icon?: ClearIconButtonIconType;
	category?: IconCategory;
} & Pick<TooltipProps, 'label' | 'placement'>;

export type ClearIconButtonRef = IconButtonRef;
