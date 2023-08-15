import {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_DOWN__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_UP__,
	__DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
	__DEFAULT_TOOLTIP_DURATION__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
} from './common/constants';
import { useGetTooltipClasses, useTooltip } from './common/hooks';
import type { TooltipOtherProps, TooltipPlacement, TooltipProps, TooltipRef } from './common/types';
import Tooltip from './Tooltip';

// Constants
export const constants = {
	__DEFAULT_TOOLTIP_CLOSE_DELAY__,
	__DEFAULT_TOOLTIP_CLOSE_ON_CLICK__,
	__DEFAULT_TOOLTIP_CLOSE_ON_ESC__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_DOWN__,
	__DEFAULT_TOOLTIP_CLOSE_ON_MOUSE_UP__,
	__DEFAULT_TOOLTIP_DEFAULT_IS_OPEN__,
	__DEFAULT_TOOLTIP_DURATION__,
	__DEFAULT_TOOLTIP_GUTTER__,
	__DEFAULT_TOOLTIP_IS_DISABLED__,
	__DEFAULT_TOOLTIP_IS_OPEN__,
	__DEFAULT_TOOLTIP_LABEL__,
	__DEFAULT_TOOLTIP_OPEN_DELAY__,
	__DEFAULT_TOOLTIP_PLACEMENT__
};

// Hooks
export { useGetTooltipClasses, useTooltip };

// Components
export { Tooltip };

// Component Types
export type { TooltipOtherProps, TooltipPlacement, TooltipProps, TooltipRef };
