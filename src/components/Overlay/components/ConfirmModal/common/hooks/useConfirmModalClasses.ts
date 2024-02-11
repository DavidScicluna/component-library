import classes from '@common/classes';
import { __DEFAULT_COLOR__, __DEFAULT_SPACING__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName } from '@common/types';

import { __DEFAULT_CONFIRM_MODAL_SIZE__, __DEFAULT_CONFIRM_MODAL_SPACING__ } from '../constants';
import type { ConfirmModalElement, ConfirmModalProps } from '../types';

import useConfirmModalResponsiveValues from './useConfirmModalResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseGetConfirmModalClassesProps<Element extends ConfirmModalElement> = Pick<
	ConfirmModalProps<Element>,
	'color' | 'colorMode' | 'size' | 'spacing'
>;
type UseGetConfirmModalClassesReturn = Record<'container' | 'backdrop' | 'content' | 'cancel', ClassName>;

const useGetConfirmModalClasses = <Element extends ConfirmModalElement>(
	props: UseGetConfirmModalClassesProps<Element>
): UseGetConfirmModalClassesReturn => {
	const { colorMode: __DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_CONFIRM_MODAL_CONTAINER_COLORMODE__,
		spacing: spacingProp = __DEFAULT_CONFIRM_MODAL_SPACING__,
		size: sizeProp = __DEFAULT_CONFIRM_MODAL_SIZE__
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
			classes.layout.top[__DEFAULT_SPACING__],
			classes.layout.right[__DEFAULT_SPACING__]
		)
	};
};

export default useGetConfirmModalClasses;
