import fallback from './common/assets/fallback';
import { useTheme } from './common/hooks';
import { Icon as IconType } from './common/types/icons';
import { checkIsTouchDevice, convertREMToPixels, convertStringToNumber } from './common/utils';
import { getHue, getColor } from './common/utils/color';
import Card from './components/Card';
import CardBody from './components/Card/components/CardBody';
import { CardBodyProps } from './components/Card/components/CardBody/types';
import CardFooter from './components/Card/components/CardFooter';
import { CardFooterProps } from './components/Card/components/CardFooter/types';
import CardHeader from './components/Card/components/CardHeader';
import { CardHeaderProps } from './components/Card/components/CardHeader/types';
import { CardProps } from './components/Card/types';
import Button from './components/Clickable/Button';
import { ButtonProps } from './components/Clickable/Button/types';
import ButtonGroup from './components/Clickable/ButtonGroup';
import { ButtonGroupProps } from './components/Clickable/ButtonGroup/types';
import IconButton from './components/Clickable/IconButton';
import { IconButtonProps } from './components/Clickable/IconButton/types';
import { LinkProps } from './components/Clickable/Link/common/types';
import ExternalLink from './components/Clickable/Link/External';
import InternalLink from './components/Clickable/Link/Internal';
import { InternalProps } from './components/Clickable/Link/Internal/types';
import Divider from './components/Divider';
import { DividerProps } from './components/Divider/types';
import Icon from './components/Icon';
import { IconProps } from './components/Icon/types';
import Tooltip from './components/Overlay/Tooltip';
import { TooltipProps } from './components/Overlay/Tooltip/types';
import TabBar from './components/TabBar';
import theme from './theme';

// Theme Types
export type {
	ColorHues,
	Color,
	Colors,
	Font,
	Fonts,
	FontSize,
	FontSizes,
	Radius,
	Radii,
	Space,
	Spacing,
	Ease,
	Easings,
	Duration,
	Durations,
	Transition,
	Theme
} from './theme/types';

// Box Types
export type {
	BoxMargin,
	BoxPadding,
	BoxColor,
	BoxGradient,
	BoxTypography,
	BoxLayout,
	BoxFlexbox,
	BoxGrid,
	BoxBackground,
	BoxBorders,
	BoxBorderRadius,
	BoxPosition,
	BoxShadow,
	BoxFilter,
	BoxPseudo,
	BoxOther
} from './common/types/box';

// Common Types
export type { NonNullable, Style, Orientation } from './common/types';

const assets = {
	fallback
};

// Hooks
export { useTheme };

// Utils
export { checkIsTouchDevice, convertREMToPixels, convertStringToNumber, getHue, getColor };

export {
	assets,
	theme,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	ExternalLink,
	InternalLink,
	Button,
	ButtonGroup,
	IconButton,
	Divider,
	Icon,
	TabBar,
	Tooltip
};
export type {
	CardBodyProps,
	CardFooterProps,
	CardHeaderProps,
	CardProps,
	LinkProps,
	InternalProps,
	ButtonProps,
	ButtonGroupProps,
	IconButtonProps,
	DividerProps,
	IconProps,
	IconType,
	TooltipProps
};
