import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_SPACING } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_MODAL_SIZE } from '../constants';
import type { ModalElement, ModalProps } from '../types';

import useModalResponsiveValues from './useModalResponsiveValues';

type PickedModalProps = 'color' | 'colorMode' | 'size' | 'spacing';
type UseModalClassesProps<Element extends ModalElement> = Pick<ModalProps<Element>, PickedModalProps>;
type UseModalClassesReturn = Record<'container' | 'backdrop' | 'content', ClassName>;

const useModalClasses = <Element extends ModalElement>(props: UseModalClassesProps<Element>): UseModalClassesReturn => {
	const { colorMode: DEFAULT_MODAL_CONTAINER_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_MODAL_CONTAINER_COLORMODE,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_MODAL_SIZE
	} = props;

	const { size, spacing } = useModalResponsiveValues<Element>({ spacing: spacingProp, size: sizeProp });

	const widthClassName = useGetClass((classes) => classes.sizing.width.full);
	const maxWidthClassName = useGetClass((classes) => classes.sizing.max_width[size]);
	const heightClassName = useGetClass((classes) => classes.sizing.height[size === 'full' ? 'full' : 'fit']);
	const maxHeightClassName = useGetClass((classes) => classes.sizing.max_height.full);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass((classes) => classes.effects.shadow.xl);

	const borderRadiusClassName = useGetClass(
		(classes) => classes.borders.border_radius[size === 'full' ? 'none' : 'xl']
	);
	const paddingClassName = useGetClass((classes) => classes.spacing.p[spacing]);
	const marginClassName = useGetClass((classes) => classes.spacing.m[spacing]);

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
