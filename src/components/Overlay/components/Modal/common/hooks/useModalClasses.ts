import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_SPACING__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
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

import { __DEFAULT_MODAL_SIZE__ } from '../constants';
import type { ModalProps } from '../types';

import useModalResponsiveValues from './useModalResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseModalClassesProps = Pick<ModalProps, 'color' | 'colorMode' | 'size' | 'spacing'>;
type UseModalClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useModalClasses = (props: UseModalClassesProps): UseModalClassesReturn => {
	const { colorMode: __DEFAULT_MODAL_CONTAINER_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_MODAL_CONTAINER_COLORMODE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_MODAL_SIZE__
	} = props;

	const { size, spacing } = useModalResponsiveValues({ spacing: spacingProp, size: sizeProp });

	const widthClassName = useGetClass<WidthClass>('full', ['sizing', 'width']);
	const maxWidthClassName = useGetClass<MaxWidthClass>(size, ['sizing', 'max_width']);
	const heightClassName = useGetClass<HeightClass>(size === 'full' ? 'full' : 'fit', ['sizing', 'height']);
	const maxHeightClassName = useGetClass<MaxHeightClass>('full', ['sizing', 'max_height']);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass<BoxShadowClass>('xl', ['effects', 'shadow']);

	const borderRadiusClassName = useGetClass<ThemeRadius>(size === 'full' ? 'none' : 'xl', [
		'borders',
		'border_radius'
	]);
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
			widthClassName,
			maxWidthClassName,
			heightClassName,
			maxHeightClassName,
			shadowClassName,
			backgroundClassName,
			borderRadiusClassName,
			paddingClassName,
			{ [marginClassName]: size !== 'full' }
		)
	};
};

export default useModalClasses;
