import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_WIDTH, DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetClass } from '@common/hooks';
import type { ClassName } from '@common/types';
import { getColorHue } from '@common/utils';

import { DEFAULT_MESSAGE_RADIUS, DEFAULT_MESSAGE_VARIANT } from '../constants';
import type { MessageElement, MessageProps } from '../types';

import useMessageResponsiveValues from './useMessageResponsiveValues';

type UseMessageClassesProps<Element extends MessageElement> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'radius' | 'variant'
>;
type UseMessageClassesReturn = ClassName;

const useMessageClasses = <Element extends MessageElement>(
	props: UseMessageClassesProps<Element>
): UseMessageClassesReturn => {
	const { colorMode: DEFAULT_ICON_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_ICON_COLORMODE,
		radius: radiusProp = DEFAULT_MESSAGE_RADIUS,
		variant: variantProp = DEFAULT_MESSAGE_VARIANT
	} = props;

	const { radius, variant } = useMessageResponsiveValues<Element>({ radius: radiusProp, variant: variantProp });

	const borderWidthClassName = useGetClass((classes) => classes.borders.border_width[DEFAULT_BORDER_WIDTH]);
	const borderStyleClassName = useGetClass(
		(classes) => classes.borders.border_style[variant === 'transparent' ? 'none' : variant]
	);
	const borderRadiusClassName = useGetClass((classes) => classes.borders.border_radius[radius]);

	const colorClasses = useMemo<ClassName>(() => {
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(
			classes.borders.border_color[color][borderHue],
			classes.backgrounds.background_color.transparent
		);
	}, [color, colorMode]);

	return classNames(borderWidthClassName, borderStyleClassName, borderRadiusClassName, colorClasses);
};

export default useMessageClasses;
