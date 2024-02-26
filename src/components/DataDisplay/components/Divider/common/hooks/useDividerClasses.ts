import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_WIDTH, DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetClass, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { checkColorType } from '@common/utils';

import { DEFAULT_DIVIDER_ORIENTATION, DEFAULT_DIVIDER_PLACEMENT, DEFAULT_DIVIDER_VARIANT } from '../constants';
import type { DividerElement, DividerProps } from '../types';

import useDividerResponsiveValues from './useDividerResponsiveValues';

type PickedDividerProps = 'color' | 'colorMode' | 'orientation' | 'placement' | 'size' | 'variant';
type UseDividerClassesProps<Element extends DividerElement> = Pick<DividerProps<Element>, PickedDividerProps>;
type UseDividerClassesReturn = ClassName;

const useDividerClasses = <Element extends DividerElement>(
	props: UseDividerClassesProps<Element>
): UseDividerClassesReturn => {
	const { colorMode: DEFAULT_DIVIDER_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_DIVIDER_COLORMODE,
		orientation: orientationProp = DEFAULT_DIVIDER_ORIENTATION,
		placement: placementProp = DEFAULT_DIVIDER_PLACEMENT,
		size: sizeProp = DEFAULT_BORDER_WIDTH,
		variant: variantProp = DEFAULT_DIVIDER_VARIANT
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
