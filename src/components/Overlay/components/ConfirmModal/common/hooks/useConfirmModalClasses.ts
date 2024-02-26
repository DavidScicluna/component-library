import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_COLOR, DEFAULT_SPACING } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';

import { DEFAULT_CONFIRM_MODAL_SIZE, DEFAULT_CONFIRM_MODAL_SPACING } from '../constants';
import type { ConfirmModalElement, ConfirmModalProps } from '../types';

import useConfirmModalResponsiveValues from './useConfirmModalResponsiveValues';

type UseGetConfirmModalClassesProps<Element extends ConfirmModalElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode' | 'size' | 'spacing'
>;
type UseGetConfirmModalClassesReturn = Record<'container' | 'backdrop' | 'content' | 'cancel', ClassName>;

const useGetConfirmModalClasses = <Element extends ConfirmModalElement>(
	props: UseGetConfirmModalClassesProps<Element>
): UseGetConfirmModalClassesReturn => {
	const { colorMode: DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE,
		spacing: spacingProp = DEFAULT_CONFIRM_MODAL_SPACING,
		size: sizeProp = DEFAULT_CONFIRM_MODAL_SIZE
	} = props;

	const { size, spacing } = useConfirmModalResponsiveValues<Element>({ spacing: spacingProp, size: sizeProp });

	const widthClassName = useGetClass((classes) => classes.sizing.width.full);
	const maxWidthClassName = useGetClass((classes) => classes.sizing.max_width[size]);
	const heightClassName = useGetClass((classes) => classes.sizing.height.fit);
	const maxHeightClassName = useGetClass((classes) => classes.sizing.max_height.full);

	const backgroundClassName = useGetColor({
		color,
		colorMode,
		colorType: color ? 'color' : 'default',
		hueType: 'background',
		classType: 'bg'
	});

	const shadowClassName = useGetClass((classes) => classes.effects.shadow.xl);

	const borderRadiusClassName = useGetClass((classes) => classes.borders.border_radius.xl);
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
			classes.layout.top[DEFAULT_SPACING],
			classes.layout.right[DEFAULT_SPACING]
		)
	};
};

export default useGetConfirmModalClasses;
