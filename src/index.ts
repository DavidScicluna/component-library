import fallback from './common/assets/fallback';
import { useOs, useTheme } from './common/hooks';
import {
	getOS,
	getColorMode,
	checkIsTouchDevice,
	convertREMToPixels,
	convertStringToNumber,
	convertEasingsToArray
} from './common/utils';
import { getHue, getColor } from './common/utils/color';
import { AccordionsColor } from './components/Accordions/common/types';
import DummyAccordions from './components/Accordions/DummyAccordions';
import DummyAccordion from './components/Accordions/DummyAccordions/components/DummyAccordion';
import DummyAccordionHeader from './components/Accordions/DummyAccordions/components/DummyAccordion/components/DummyAccordionHeader';
import { DummyAccordionHeaderProps } from './components/Accordions/DummyAccordions/components/DummyAccordion/components/DummyAccordionHeader/types';
import { DummyAccordionProps } from './components/Accordions/DummyAccordions/components/DummyAccordion/types';
import DummyAccordionsPanel from './components/Accordions/DummyAccordions/components/DummyAccordionsPanel';
import { DummyAccordionsPanelProps } from './components/Accordions/DummyAccordions/components/DummyAccordionsPanel/types';
import DummyAccordionsQuickToggles from './components/Accordions/DummyAccordions/components/DummyQuickToggles';
import { DummyQuickTogglesProps as DummyAccordionsQuickTogglesProps } from './components/Accordions/DummyAccordions/components/DummyQuickToggles/types';
import { DummyAccordionsContext, DummyAccordionsProps } from './components/Accordions/DummyAccordions/types';
import Accordions from './components/Accordions/OriginalAccordions';
import Accordion from './components/Accordions/OriginalAccordions/components/Accordion';
import AccordionBody from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionBody';
import { AccordionBodyProps } from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionBody/types';
import AccordionDivider from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionDivider';
import AccordionFooter from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionFooter';
import { AccordionFooterProps } from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionFooter/types';
import AccordionHeader from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionHeader';
import { AccordionHeaderProps } from './components/Accordions/OriginalAccordions/components/Accordion/components/AccordionHeader/types';
import {
	AccordionContext,
	AccordionProps
} from './components/Accordions/OriginalAccordions/components/Accordion/types';
import AccordionsPanel from './components/Accordions/OriginalAccordions/components/AccordionsPanel';
import { AccordionsPanelProps } from './components/Accordions/OriginalAccordions/components/AccordionsPanel/types';
import AccordionsQuickToggles from './components/Accordions/OriginalAccordions/components/QuickToggles';
import {
	QuickTogglesProps as AccordionsQuickTogglesProps,
	QuickTogglesSize as AccordionsQuickTogglesSize
} from './components/Accordions/OriginalAccordions/components/QuickToggles/types';
import {
	Accordion as AccordionType,
	AccordionsContext,
	AccordionsProps
} from './components/Accordions/OriginalAccordions/types';
import { CardColor, CardVariant } from './components/Cards/common/types';
import CardBody from './components/Cards/components/CardBody';
import { CardBodyProps } from './components/Cards/components/CardBody/types';
import CardFooter from './components/Cards/components/CardFooter';
import { CardFooterProps } from './components/Cards/components/CardFooter/types';
import DummyCard from './components/Cards/DummyCard';
import DummyCardDivider from './components/Cards/DummyCard/components/DummyCardDivider';
import { DummyCardDividerProps } from './components/Cards/DummyCard/components/DummyCardDivider/types';
import DummyCardHeader from './components/Cards/DummyCard/components/DummyCardHeader';
import { DummyCardHeaderProps } from './components/Cards/DummyCard/components/DummyCardHeader/types';
import { DummyCardContext, DummyCardProps, DummyCardRef } from './components/Cards/DummyCard/types';
import Card from './components/Cards/OriginalCard';
import CardDivider from './components/Cards/OriginalCard/components/CardDivider';
import { CardDividerProps } from './components/Cards/OriginalCard/components/CardDivider/types';
import CardHeader from './components/Cards/OriginalCard/components/CardHeader';
import { CardHeaderProps } from './components/Cards/OriginalCard/components/CardHeader/types';
import { CardContext, CardProps, CardRef } from './components/Cards/OriginalCard/types';
import ButtonGroup from './components/Clickable/ButtonGroup';
import { ButtonGroupProps, ButtonGroupRef, ButtonGroupSize } from './components/Clickable/ButtonGroup/types';
import ButtonGroupItem from './components/Clickable/ButtonGroup/components/ButtonGroupItem';
import { ButtonGroupItemProps } from './components/Clickable/ButtonGroup/components/ButtonGroupItem/types';
import { ButtonColor, ButtonSize, ButtonVariant } from './components/Clickable/Buttons/common/types';
import DummyButton from './components/Clickable/Buttons/DummyButton';
import { DummyButtonProps } from './components/Clickable/Buttons/DummyButton/types';
import Button from './components/Clickable/Buttons/OriginalButton';
import {
	ButtonProps,
	ButtonRef,
	RenderProps as ButtonRenderProps
} from './components/Clickable/Buttons/OriginalButton/types';
import { IconButtonColor, IconButtonSize, IconButtonVariant } from './components/Clickable/IconButtons/common/types';
import DummyIconButton from './components/Clickable/IconButtons/DummyIconButton';
import { DummyIconButtonProps } from './components/Clickable/IconButtons/DummyIconButton/types';
import IconButton from './components/Clickable/IconButtons/OriginalIconButton';
import IconButtonIcon from './components/Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon';
import { IconButtonIconProps } from './components/Clickable/IconButtons/OriginalIconButton/components/IconButtonIcon/types';
import { IconButtonProps, IconButtonRef } from './components/Clickable/IconButtons/OriginalIconButton/types';
import { LinkProps } from './components/Clickable/Link/common/types';
import ExternalLink from './components/Clickable/Link/External';
import InternalLink from './components/Clickable/Link/Internal';
import { InternalProps as InternalLinkProps } from './components/Clickable/Link/Internal/types';
import CollapsibleCard from './components/Clickable/CollapsibleCard';
import {
	CollapsibleCardColor,
	CollapsibleCardContext,
	CollapsibleCardProps
} from './components/Clickable/CollapsibleCard/types';
import CollapsibleCardBody from './components/Clickable/CollapsibleCard/components/CollapsibleCardBody';
import { CollapsibleCardBodyProps } from './components/Clickable/CollapsibleCard/components/CollapsibleCardBody/types';
import CollapsibleCardDivider from './components/Clickable/CollapsibleCard/components/CollapsibleCardDivider';
import CollapsibleCardFooter from './components/Clickable/CollapsibleCard/components/CollapsibleCardFooter';
import { CollapsibleCardFooterProps } from './components/Clickable/CollapsibleCard/components/CollapsibleCardFooter/types';
import CollapsibleCardHeader from './components/Clickable/CollapsibleCard/components/CollapsibleCardHeader';
import { CollapsibleCardHeaderProps } from './components/Clickable/CollapsibleCard/components/CollapsibleCardHeader/types';
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
import TagDeleteIconButton from './components/DataDisplay/Tag/components/TagDeleteIconButton';
import { TagDeleteIconButtonProps } from './components/DataDisplay/Tag/components/TagDeleteIconButton/types';
import TagLabel from './components/DataDisplay/Tag/components/TagLabel';
import { TagLabelProps } from './components/DataDisplay/Tag/components/TagLabel/types';
import { TagColor, TagContext, TagProps, TagRef, TagSize, TagVariant } from './components/DataDisplay/Tag/types';
import Divider from './components/Divider';
import { DividerProps } from './components/Divider/types';
import DSCLProvider from './components/Provider';
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
import Form from './components/Forms/Form';
import ImageEditor from './components/ImageEditor';
import { ImageEditorColor, ImageEditorContext, ImageEditorProps } from './components/ImageEditor/types';
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
import Tabs from './components/Navigation/Tabs';
import {
	TabsColor,
	TabsContext,
	TabsProps,
	TabsRef,
	TabsSize,
	OnChangeProps as TabsOnChangeProps
} from './components/Navigation/Tabs/types';
import DummyTabList from './components/Navigation/Tabs/components/DummyTabList';
import { DummyTabListProps } from './components/Navigation/Tabs/components/DummyTabList/types';
import TabList from './components/Navigation/Tabs/components/TabList';
import { TabListProps } from './components/Navigation/Tabs/components/TabList/types';
import { Tab as TabListTab } from './components/Navigation/Tabs/components/TabList/components/Tab/types';
import TabPanels from './components/Navigation/Tabs/components/TabPanels';
import { TabPanelsProps } from './components/Navigation/Tabs/components/TabPanels/types';
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
import SideNavigation from './components/Navigation/SideNavigation';
import NavGroup from './components/Navigation/SideNavigation/components/NavGroup';
import { NavGroupProps } from './components/Navigation/SideNavigation/components/NavGroup/types';
import NavItem from './components/Navigation/SideNavigation/components/NavItem';
import { NavItem as NavItemType, NavItemProps } from './components/Navigation/SideNavigation/components/NavItem/types';
import {
	SideNavigationColor,
	SideNavigationContext,
	SideNavigationMode,
	SideNavigationProps,
	SideNavigationRef
} from './components/Navigation/SideNavigation/types';
import Stepper from './components/Navigation/Stepper';
import StepList from './components/Navigation/Stepper/components/StepList';
import { StepListProps, Step } from './components/Navigation/Stepper/components/StepList/types';
import StepPanel from './components/Navigation/Stepper/components/StepPanel';
import { StepPanelProps } from './components/Navigation/Stepper/components/StepPanel/types';
import StepPanels from './components/Navigation/Stepper/components/StepPanels';
import { StepPanelsProps } from './components/Navigation/Stepper/components/StepPanels/types';
import {
	StepperColor,
	StepperContext,
	StepperProps,
	StepperRef,
	OnChangeProps as StepperOnChangeProps
} from './components/Navigation/Stepper/types';
import TabBar from './components/Navigation/TabBar';
import { Tab as TabBarTab } from './components/Navigation/TabBar/components/Tab/types';
import {
	TabBarColor,
	TabBarContext,
	TabBarDirection,
	TabBarProps,
	TabBarRef
} from './components/Navigation/TabBar/types';
import ConfirmModal from './components/Overlay/ConfirmModal';
import ConfirmModalBody from './components/Overlay/ConfirmModal/components/ConfirmModalBody';
import { ConfirmModalBodyProps } from './components/Overlay/ConfirmModal/components/ConfirmModalBody/types';
import ConfirmModalFooter from './components/Overlay/ConfirmModal/components/ConfirmModalFooter';
import { ConfirmModalFooterProps } from './components/Overlay/ConfirmModal/components/ConfirmModalFooter/types';
import ConfirmModalIcon from './components/Overlay/ConfirmModal/components/ConfirmModalIcon';
import {
	ConfirmModalIconColor,
	ConfirmModalIconProps,
	ConfirmModalIconVariant
} from './components/Overlay/ConfirmModal/components/ConfirmModalIcon/types';
import ConfirmModalStack from './components/Overlay/ConfirmModal/components/ConfirmModalStack';
import { ConfirmModalStackProps } from './components/Overlay/ConfirmModal/components/ConfirmModalStack/types';
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
import { TooltipColor, TooltipProps, TooltipRef } from './components/Overlay/Tooltip/types';
import Skeleton from './components/Skeleton';
import { SkeletonColor, SkeletonProps, SkeletonVariant } from './components/Skeleton/types';
import Collapse from './components/Transitions/Collapse';
import { CollapseProps } from './components/Transitions/Collapse/types';
import {
	getDelay as getTransitionDelay,
	getDuration as getTransitionDuration,
	getEasings as getTransitionEasings,
	getConfig as getTransitionConfig
} from './components/Transitions/common/utils';
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
	LineHeight,
	LineHeights,
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
export type { Undefinable, Nullable, NonNullable, NoUndefinedField, Style, Orientation } from './common/types';

// Icon Types
export type { Icon as IconType } from './common/types/icons';

// Hooks
export { useOs, useTheme };

// Assets
export const assets = { fallback };

// Utils
export const utils = {
	getOS,
	getColorMode,
	checkIsTouchDevice,
	convertREMToPixels,
	convertStringToNumber,
	convertEasingsToArray,
	getHue,
	getColor,
	getTransitionDelay,
	getTransitionDuration,
	getTransitionEasings,
	getTransitionConfig
};

// Theme
export { theme };

// Components
export {
	DummyAccordions,
	DummyAccordion,
	DummyAccordionHeader,
	DummyAccordionsPanel,
	DummyAccordionsQuickToggles,
	Accordions,
	Accordion,
	AccordionBody,
	AccordionDivider,
	AccordionFooter,
	AccordionHeader,
	AccordionsPanel,
	AccordionsQuickToggles,
	DummyCard,
	DummyCardDivider,
	DummyCardHeader,
	Card,
	CardBody,
	CardDivider,
	CardHeader,
	CardFooter,
	DummyIconButton,
	IconButton,
	IconButtonIcon,
	ExternalLink,
	InternalLink,
	DummyButton,
	Button,
	ButtonGroup,
	ButtonGroupItem,
	CollapsibleCard,
	CollapsibleCardBody,
	CollapsibleCardDivider,
	CollapsibleCardFooter,
	CollapsibleCardHeader,
	Badge,
	BadgeIcon,
	BadgeLabel,
	Tag,
	TagDeleteIconButton,
	TagLabel,
	Divider,
	DSCLProvider,
	Checkbox,
	CheckboxSubtitle,
	CheckboxTitle,
	Stepper,
	StepList,
	StepPanel,
	StepPanels,
	Form,
	ImageEditor,
	Input,
	Radio,
	RadioSubtitle,
	RadioTitle,
	Tabs,
	DummyTabList,
	TabList,
	TabPanels,
	Textarea,
	HorizontalScroll,
	HorizontalScrollArrow,
	Icon,
	ConfirmModal,
	ConfirmModalIcon,
	ConfirmModalBody,
	ConfirmModalFooter,
	ConfirmModalStack,
	ConfirmModalSubtitle,
	ConfirmModalTitle,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Skeleton,
	SideNavigation,
	NavGroup,
	NavItem,
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
	AccordionsColor,
	DummyAccordionHeaderProps,
	DummyAccordionProps,
	DummyAccordionsPanelProps,
	DummyAccordionsQuickTogglesProps,
	DummyAccordionsContext,
	DummyAccordionsProps,
	AccordionBodyProps,
	AccordionFooterProps,
	AccordionHeaderProps,
	AccordionContext,
	AccordionProps,
	AccordionsPanelProps,
	AccordionsQuickTogglesProps,
	AccordionsQuickTogglesSize,
	AccordionType,
	AccordionsContext,
	AccordionsProps,
	CardColor,
	CardVariant,
	CardBodyProps,
	CardFooterProps,
	DummyCardDividerProps,
	DummyCardHeaderProps,
	DummyCardContext,
	DummyCardProps,
	DummyCardRef,
	CardDividerProps,
	CardHeaderProps,
	CardContext,
	CardProps,
	CardRef,
	IconButtonColor,
	IconButtonSize,
	IconButtonVariant,
	DummyIconButtonProps,
	IconButtonProps,
	IconButtonRef,
	IconButtonIconProps,
	LinkProps,
	InternalLinkProps,
	ButtonColor,
	DummyButtonProps,
	ButtonProps,
	ButtonRef,
	ButtonSize,
	ButtonVariant,
	ButtonRenderProps,
	ButtonGroupProps,
	ButtonGroupRef,
	ButtonGroupSize,
	ButtonGroupItemProps,
	CollapsibleCardColor,
	CollapsibleCardContext,
	CollapsibleCardProps,
	CollapsibleCardBodyProps,
	CollapsibleCardFooterProps,
	CollapsibleCardHeaderProps,
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
	StepperColor,
	StepperContext,
	StepperProps,
	StepperRef,
	StepperOnChangeProps,
	StepListProps,
	Step,
	StepPanelProps,
	StepPanelsProps,
	ImageEditorColor,
	ImageEditorContext,
	ImageEditorProps,
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
	TabsColor,
	TabsContext,
	TabsProps,
	TabsRef,
	TabsSize,
	TabsOnChangeProps,
	DummyTabListProps,
	TabListProps,
	TabListTab,
	TabPanelsProps,
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
	ConfirmModalIconColor,
	ConfirmModalIconProps,
	ConfirmModalIconVariant,
	ConfirmModalBodyProps,
	ConfirmModalFooterProps,
	ConfirmModalStackProps,
	ConfirmModalSubtitleProps,
	ConfirmModalTitleProps,
	ConfirmModalProps,
	ModalBodyProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalProps,
	TooltipColor,
	TooltipProps,
	TooltipRef,
	SkeletonColor,
	SkeletonProps,
	SkeletonVariant,
	NavGroupProps,
	NavItemType,
	NavItemProps,
	SideNavigationColor,
	SideNavigationContext,
	SideNavigationMode,
	SideNavigationProps,
	SideNavigationRef,
	TabBarTab,
	TabBarColor,
	TabBarContext,
	TabBarDirection,
	TabBarProps,
	TabBarRef,
	CollapseProps,
	FadeProps,
	ScaleFadeProps,
	SlideProps,
	SlideFadeProps
};
