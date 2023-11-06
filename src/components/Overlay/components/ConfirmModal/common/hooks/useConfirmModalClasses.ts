import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_SPACING__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type {
	BoxShadowClass,
	ClassName,
	HeightClass,
	MaxHeightClass,
	MaxWidthClass,
	ThemeRadius,
	ThemeSpacing,
	WidthClass
} from '@common/types';

import { __DEFAULT_CONFIRM_MODAL_SIZE__, __DEFAULT_CONFIRM_MODAL_SPACING__ } from '../constants';
import type { ConfirmModalDefaultElement, ConfirmModalElement, ConfirmModalProps, ConfirmModalSize } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseGetConfirmModalClassesProps<Element extends ConfirmModalElement = ConfirmModalDefaultElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode' | 'size' | 'spacing'
>;
type UseGetConfirmModalClassesReturn = Record<'container' | 'backdrop' | 'content' | 'cancel', ClassName>;

const useGetConfirmModalClasses = <Element extends ConfirmModalElement = ConfirmModalDefaultElement>(
	props: UseGetConfirmModalClassesProps<Element>
): UseGetConfirmModalClassesReturn => {
	const { colorMode: __DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE__,
		size: si = __DEFAULT_CONFIRM_MODAL_SIZE__,
		spacing: sp = __DEFAULT_CONFIRM_MODAL_SPACING__
	} = props;

	const size = useGetResponsiveValue<ConfirmModalSize>(si);
	const spacing = useGetResponsiveValue<ThemeSpacing>(sp);

	const widthClassName = useGetClass<WidthClass>('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidthClass>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass<HeightClass>('fit', ['sizing', 'height']);
	const maxHeightClassName = useGetClass<MaxHeightClass>('full', ['sizing', 'max_height']);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass<BoxShadowClass>('xl', ['effects', 'shadow']);

	// TODO: Replace all useGetClass that have a fixed value with classes.
	const borderRadiusClassName = useGetClass<ThemeRadius>('xl', ['borders', 'border_radius']);
	const paddingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'p']);
	const marginClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'm']);

	return {
		container: classNames(
			classes.layout.position.fixed,
			classes.layout.top[0],
			classes.layout.left[0],
			classes.layout.z_index.modal
		),
		backdrop: classNames(classes.sizing.width.full, classes.sizing.height.full),
		content: classNames(
			classes.layout.position.relative,
			widthClassName,
			maxWidthClassName,
			heightClassName,
			maxHeightClassName,
			shadowClassName,
			backgroundClassName,
			borderRadiusClassName,
			paddingClassName,
			marginClassName
		),
		cancel: classNames(
			classes.layout.position.absolute,
			classes.layout.top[__DEFAULT_SPACING__],
			classes.layout.right[__DEFAULT_SPACING__]
		)
	};
};

export default useGetConfirmModalClasses;
