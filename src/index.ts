import fallback from './common/assets/fallback';
import { useTheme } from './common/hooks';
import { checkIsTouchDevice, convertREMToPixels, convertStringToNumber } from './common/utils';
import { getHue, getColor } from './common/utils/color';
import Card from './components/Card';
import CardBody from './components/Card/components/CardBody';
import { CardBodyProps } from './components/Card/components/CardBody/types';
import CardFooter from './components/Card/components/CardFooter';
import { CardFooterProps } from './components/Card/components/CardFooter/types';
import CardHeader from './components/Card/components/CardHeader';
import { CardHeaderProps } from './components/Card/components/CardHeader/types';
import { CardColor, CardContext, CardProps, CardRef, CardVariant } from './components/Card/types';
import Button from './components/Clickable/Button';
import { ButtonColor, ButtonProps, ButtonRef, ButtonSize, ButtonVariant } from './components/Clickable/Button/types';
import ButtonGroup from './components/Clickable/ButtonGroup';
import { ButtonGroupProps, ButtonGroupRef, ButtonGroupSize } from './components/Clickable/ButtonGroup/types';
import IconButton from './components/Clickable/IconButton';
import {
	IconButtonColor,
	IconButtonProps,
	IconButtonRef,
	IconButtonSize,
	IconButtonVariant
} from './components/Clickable/IconButton/types';
import { LinkProps } from './components/Clickable/Link/common/types';
import ExternalLink from './components/Clickable/Link/External';
import InternalLink from './components/Clickable/Link/Internal';
import { InternalProps } from './components/Clickable/Link/Internal/types';
import Badge from './components/DataDisplay/Badge';
import BadgeIcon from './components/DataDisplay/Badge/components/BadgeIcon';
import { BadgeIconProps } from './components/DataDisplay/Badge/components/BadgeIcon/types';
import BadgeLabel from './components/DataDisplay/Badge/components/BadgeLabel';
import { BadgeLabelProps } from './components/DataDisplay/Badge/components/BadgeLabel/types';
import {
	BadgeColor,
	BadgeContext,
	BadgeProps,
	BadgeRef,
	BadgeSize,
	BadgeVariant
} from './components/DataDisplay/Badge/types';
import Tag from './components/DataDisplay/Tag';
import TagDeleteButton from './components/DataDisplay/Tag/components/TagDeleteButton';
import { TagDeleteIconButtonProps } from './components/DataDisplay/Tag/components/TagDeleteButton/types';
import TagLabel from './components/DataDisplay/Tag/components/TagLabel';
import { TagLabelProps } from './components/DataDisplay/Tag/components/TagLabel/types';
import { TagColor, TagContext, TagProps, TagRef, TagSize, TagVariant } from './components/DataDisplay/Tag/types';
import Divider from './components/Divider';
import { DividerProps } from './components/Divider/types';
import Input from './components/Forms/Input';
import { InputColor, InputProps, InputRef, InputSize } from './components/Forms/Input/types';
import Textarea from './components/Forms/Textarea';
import { TextareaColor, TextareaProps, TextareaRef, TextareaSize } from './components/Forms/Textarea/types';
import Icon from './components/Icon';
import { IconProps, IconCategory } from './components/Icon/types';
import ConfirmModal from './components/Overlay/ConfirmModal';
import ConfirmModalBody from './components/Overlay/ConfirmModal/components/ConfirmModalBody';
import { ConfirmModalBodyProps } from './components/Overlay/ConfirmModal/components/ConfirmModalBody/types';
import ConfirmModalFooter from './components/Overlay/ConfirmModal/components/ConfirmModalFooter';
import { ConfirmModalFooterProps } from './components/Overlay/ConfirmModal/components/ConfirmModalFooter/types';
import { ConfirmModalProps } from './components/Overlay/ConfirmModal/types';
import Modal from './components/Overlay/Modal';
import ModalBody from './components/Overlay/Modal/components/ModalBody';
import { ModalBodyProps } from './components/Overlay/Modal/components/ModalBody/types';
import ModalFooter from './components/Overlay/Modal/components/ModalFooter';
import { ModalFooterProps } from './components/Overlay/Modal/components/ModalFooter/types';
import ModalHeader from './components/Overlay/Modal/components/ModalHeader';
import { ModalHeaderProps } from './components/Overlay/Modal/components/ModalHeader/types';
import { ModalProps } from './components/Overlay/Modal/types';
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

// Icon Types
export type { Icon as IconType } from './common/types/icons';

// Hooks
export { useTheme };

// Assets
export const assets = { fallback };

// Utils
export const utils = { checkIsTouchDevice, convertREMToPixels, convertStringToNumber, getHue, getColor };

// Components
export {
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
	Badge,
	BadgeIcon,
	BadgeLabel,
	Tag,
	TagDeleteButton,
	TagLabel,
	Divider,
	Input,
	Textarea,
	Icon,
	ConfirmModal,
	ConfirmModalBody,
	ConfirmModalFooter,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	TabBar,
	Tooltip
};

// Components Types
export type {
	CardBodyProps,
	CardFooterProps,
	CardHeaderProps,
	CardColor,
	CardContext,
	CardProps,
	CardRef,
	CardVariant,
	LinkProps,
	InternalProps,
	ButtonColor,
	ButtonProps,
	ButtonRef,
	ButtonSize,
	ButtonVariant,
	ButtonGroupProps,
	ButtonGroupRef,
	ButtonGroupSize,
	IconButtonColor,
	IconButtonProps,
	IconButtonRef,
	IconButtonSize,
	IconButtonVariant,
	BadgeIconProps,
	BadgeLabelProps,
	BadgeColor,
	BadgeContext,
	BadgeProps,
	BadgeRef,
	BadgeSize,
	BadgeVariant,
	TagDeleteIconButtonProps,
	TagLabelProps,
	TagColor,
	TagContext,
	TagProps,
	TagRef,
	TagSize,
	TagVariant,
	DividerProps,
	InputColor,
	InputProps,
	InputRef,
	InputSize,
	TextareaColor,
	TextareaProps,
	TextareaRef,
	TextareaSize,
	IconProps,
	IconCategory,
	ConfirmModalProps,
	ConfirmModalBodyProps,
	ConfirmModalFooterProps,
	ModalBodyProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalProps,
	TooltipProps
};
