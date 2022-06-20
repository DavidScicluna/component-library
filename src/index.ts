import fallback from './common/assets/fallback';
import { useTheme } from './common/hooks';
import { checkIsTouchDevice, convertREMToPixels, convertStringToNumber } from './common/utils';
import { getHue, getColor } from './common/utils/color';
import Accordions from './components/Accordions';
import Accordion from './components/Accordions/components/Accordion';
import AccordionBody from './components/Accordions/components/Accordion/components/AccordionBody';
import { AccordionBodyProps } from './components/Accordions/components/Accordion/components/AccordionBody/types';
import AccordionFooter from './components/Accordions/components/Accordion/components/AccordionFooter';
import { AccordionFooterProps } from './components/Accordions/components/Accordion/components/AccordionFooter/types';
import AccordionHeader from './components/Accordions/components/Accordion/components/AccordionHeader';
import { AccordionHeaderProps } from './components/Accordions/components/Accordion/components/AccordionHeader/types';
import { AccordionContext, AccordionProps } from './components/Accordions/components/Accordion/types';
import AccordionsPanel from './components/Accordions/components/AccordionsPanel';
import { AccordionsPanelProps } from './components/Accordions/components/AccordionsPanel/types';
import DummyAccordion from './components/Accordions/components/DummyAccordion';
import DummyAccordionHeader from './components/Accordions/components/DummyAccordion/components/DummyAccordionHeader';
import { DummyAccordionHeaderProps } from './components/Accordions/components/DummyAccordion/components/DummyAccordionHeader/types';
import { DummyAccordionProps } from './components/Accordions/components/DummyAccordion/types';
import QuickToggles from './components/Accordions/components/QuickToggles';
import { QuickTogglesProps } from './components/Accordions/components/QuickToggles/types';
import {
	Accordion as AccordionType,
	AccordionsColor,
	AccordionsContext,
	AccordionsProps,
	AccordionsRef
} from './components/Accordions/types';
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
import Checkbox from './components/Forms/Checkbox';
import CheckboxSubtitle from './components/Forms/Checkbox/components/CheckboxSubtitle';
import { CheckboxSubtitleProps } from './components/Forms/Checkbox/components/CheckboxSubtitle/types';
import CheckboxTitle from './components/Forms/Checkbox/components/CheckboxTitle';
import { CheckboxTitleProps } from './components/Forms/Checkbox/components/CheckboxTitle/types';
import {
	CheckboxColor,
	CheckboxContext,
	CheckboxPanelRenderProps,
	CheckboxProps,
	CheckboxRef,
	CheckboxSize,
	CheckboxVariant
} from './components/Forms/Checkbox/types';
import Input from './components/Forms/Input';
import {
	InputAutoComplete,
	InputColor,
	InputPanelRenderProps,
	InputProps,
	InputRef,
	InputSize
} from './components/Forms/Input/types';
import Radio from './components/Forms/Radio';
import RadioSubtitle from './components/Forms/Radio/components/RadioSubtitle';
import { RadioSubtitleProps } from './components/Forms/Radio/components/RadioSubtitle/types';
import RadioTitle from './components/Forms/Radio/components/RadioTitle';
import { RadioTitleProps } from './components/Forms/Radio/components/RadioTitle/types';
import {
	RadioColor,
	RadioContext,
	RadioPanelRenderProps,
	RadioProps,
	RadioRef,
	RadioSize,
	RadioVariant
} from './components/Forms/Radio/types';
import Textarea from './components/Forms/Textarea';
import {
	TextareaAutoComplete,
	TextareaColor,
	TextareaPanelRenderProps,
	TextareaProps,
	TextareaRef,
	TextareaResize,
	TextareaSize
} from './components/Forms/Textarea/types';
import HorizontalScroll from './components/HorizontalScroll';
import HorizontalScrollArrow from './components/HorizontalScroll/components/Arrow';
import { ArrowProps as HorizontalScrollArrowProps } from './components/HorizontalScroll/components/Arrow/types';
import {
	HorizontalScrollContext,
	HorizontalScrollProps,
	HorizontalScrollRef
} from './components/HorizontalScroll/types';
import Icon from './components/Icon';
import { IconProps, IconCategory } from './components/Icon/types';
import ConfirmModal from './components/Overlay/ConfirmModal';
import ConfirmModalBody from './components/Overlay/ConfirmModal/components/ConfirmModalBody';
import { ConfirmModalBodyProps } from './components/Overlay/ConfirmModal/components/ConfirmModalBody/types';
import ConfirmModalFooter from './components/Overlay/ConfirmModal/components/ConfirmModalFooter';
import { ConfirmModalFooterProps } from './components/Overlay/ConfirmModal/components/ConfirmModalFooter/types';
import ConfirmModalSubtitle from './components/Overlay/ConfirmModal/components/ConfirmModalSubtitle';
import { ConfirmModalSubtitleProps } from './components/Overlay/ConfirmModal/components/ConfirmModalSubtitle/types';
import ConfirmModalTitle from './components/Overlay/ConfirmModal/components/ConfirmModalTitle';
import { ConfirmModalTitleProps } from './components/Overlay/ConfirmModal/components/ConfirmModalTitle/types';
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
import Skeleton from './components/Skeleton';
import { SkeletonColor, SkeletonProps, SkeletonType } from './components/Skeleton/types';
import TabBar from './components/TabBar';
import Collapse from './components/Transitions/Collapse';
import { CollapseProps } from './components/Transitions/Collapse/types';
import Fade from './components/Transitions/Fade';
import { FadeProps } from './components/Transitions/Fade/types';
import ScaleFade from './components/Transitions/ScaleFade';
import { ScaleFadeProps } from './components/Transitions/ScaleFade/types';
import Slide from './components/Transitions/Slide';
import { SlideProps } from './components/Transitions/Slide/types';
import SlideFade from './components/Transitions/SlideFade';
import { SlideFadeProps } from './components/Transitions/SlideFade/types';
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
export const utils = {
	checkIsTouchDevice,
	convertREMToPixels,
	convertStringToNumber,
	getHue,
	getColor
};

// Theme
export { theme };

// Components
export {
	Accordions,
	Accordion,
	AccordionBody,
	AccordionFooter,
	AccordionHeader,
	AccordionsPanel,
	DummyAccordion,
	DummyAccordionHeader,
	QuickToggles,
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
	Checkbox,
	CheckboxSubtitle,
	CheckboxTitle,
	Input,
	Radio,
	RadioSubtitle,
	RadioTitle,
	Textarea,
	HorizontalScroll,
	HorizontalScrollArrow,
	Icon,
	ConfirmModal,
	ConfirmModalBody,
	ConfirmModalFooter,
	ConfirmModalSubtitle,
	ConfirmModalTitle,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Skeleton,
	TabBar,
	Tooltip,
	Collapse,
	Fade,
	ScaleFade,
	Slide,
	SlideFade
};

// Components Types
export type {
	AccordionBodyProps,
	AccordionFooterProps,
	AccordionHeaderProps,
	AccordionContext,
	AccordionProps,
	AccordionType,
	AccordionsPanelProps,
	QuickTogglesProps,
	DummyAccordionHeaderProps,
	DummyAccordionProps,
	AccordionsColor,
	AccordionsContext,
	AccordionsProps,
	AccordionsRef,
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
	CheckboxSubtitleProps,
	CheckboxTitleProps,
	CheckboxColor,
	CheckboxContext,
	CheckboxPanelRenderProps,
	CheckboxProps,
	CheckboxRef,
	CheckboxSize,
	CheckboxVariant,
	InputAutoComplete,
	InputColor,
	InputPanelRenderProps,
	InputProps,
	InputRef,
	InputSize,
	RadioSubtitleProps,
	RadioTitleProps,
	RadioColor,
	RadioContext,
	RadioPanelRenderProps,
	RadioProps,
	RadioRef,
	RadioSize,
	RadioVariant,
	TextareaAutoComplete,
	TextareaColor,
	TextareaPanelRenderProps,
	TextareaProps,
	TextareaRef,
	TextareaResize,
	TextareaSize,
	HorizontalScrollArrowProps,
	HorizontalScrollContext,
	HorizontalScrollProps,
	HorizontalScrollRef,
	IconProps,
	IconCategory,
	ConfirmModalBodyProps,
	ConfirmModalFooterProps,
	ConfirmModalSubtitleProps,
	ConfirmModalTitleProps,
	ConfirmModalProps,
	ModalBodyProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalProps,
	TooltipProps,
	SkeletonColor,
	SkeletonProps,
	SkeletonType,
	CollapseProps,
	FadeProps,
	ScaleFadeProps,
	SlideProps,
	SlideFadeProps
};
