import classes from '@common/classes';
import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { checkColorType } from '@common/utils';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from '../constants';
import type { DividerElement, DividerProps } from '../types';

import useDividerResponsiveValues from './useDividerResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type PickedDividerProps = 'color' | 'colorMode' | 'orientation' | 'placement' | 'size' | 'variant';
type UseDividerClassesProps<Element extends DividerElement> = Pick<DividerProps<Element>, PickedDividerProps>;
type UseDividerClassesReturn = ClassName;

const useDividerClasses = <Element extends DividerElement>(
	props: UseDividerClassesProps<Element>
): UseDividerClassesReturn => {
	const { colorMode: __DEFAULT_DIVIDER_OLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_DIVIDER_OLORMODE__,
		orientation: orientationProp = __DEFAULT_DIVIDER_ORIENTATION__,
		placement: placementProp = __DEFAULT_DIVIDER_PLACEMENT__,
		size: sizeProp = __DEFAULT_BORDER_WIDTH__,
		variant: variantProp = __DEFAULT_DIVIDER_VARIANT__
	} = props;

	const { orientation, placement, size, variant } = useDividerResponsiveValues<Element>({
		orientation: orientationProp,
		placement: placementProp,
		size: sizeProp,
		variant: variantProp
	});

	const borderLeftWidthClassName = useGetClass((classes) => classes.borders.border_l_width[size]);
	const borderStyleClassName = useGetClass((classes) => classes.borders.border_style[variant]);
	const borderColorClassName = useGetColor({
		color: checkColorType(color) === 'theme' ? (color as ThemeColor) : undefined,
		colorMode,
		colorType: color ? 'color' : 'default',
		classType: 'border',
		hueType: 'divider'
	});

	const justifyContentClassName = useGetClass(
		(classes) =>
			classes.grid.justify_content[
				placement === 'left' ? 'flex-start' : placement === 'right' ? 'flex-end' : 'center'
			]
	);

	return classNames(
		classes.layout.display.flex,
		classes.flex.align_items.center,
		justifyContentClassName,
		borderStyleClassName,
		{
			[color]: checkColorType(color) === 'class',
			[borderColorClassName]: checkColorType(color) === 'theme',
			[borderLeftWidthClassName]: orientation === 'vertical'
		}
	);
};

export default useDividerClasses;
