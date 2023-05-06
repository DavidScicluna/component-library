import { IconCategory, IconType } from '../../../../..';
import { PickFrom } from '../../../../../common/types';
import { TooltipProps } from '../../../../Overlay/Tooltip/common/types';
import { IconButtonProps, IconButtonRef } from '../../../IconButtons/OriginalIconButton/common/types';

export type ScrollToTopIconType = PickFrom<IconType, 'keyboard_double_arrow_up'>;

export type ScrollToTopProps = Omit<IconButtonProps, 'children'> & {
	hasTooltip?: boolean;
	icon?: ScrollToTopIconType;
	category?: IconCategory;
} & Pick<TooltipProps, 'label' | 'placement'>;

export type ScrollToTopRef = IconButtonRef;
