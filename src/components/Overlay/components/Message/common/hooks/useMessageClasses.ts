import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants/props';
import { useAppTheme } from '@common/hooks';
import type { ClassName } from '@common/types';
import type { BorderStyle } from '@common/types/classes';
import type { BorderWidth, Radius } from '@common/types/theme';
import { getClass } from '@common/utils/classes';
import { getColorHue } from '@common/utils/color';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_SIZE__, __DEFAULT_MESSAGE_VARIANT__ } from '../constants';
import type { MessageProps } from '../types';

type UseMessageClassesProps<Element extends ElementType> = Pick<
	MessageProps<Element>,
	'color' | 'colorMode' | 'radius' | 'size' | 'variant'
>;
type UseMessageClassesReturn = ClassName;

const useMessageClasses = <Element extends ElementType>(
	props: UseMessageClassesProps<Element>
): UseMessageClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		radius = __DEFAULT_MESSAGE_RADIUS__,
		size = __DEFAULT_MESSAGE_SIZE__,
		variant = __DEFAULT_MESSAGE_VARIANT__
	} = props;

	const borderWidthClassName = getClass<BorderWidth>(size, ['borders', 'borderWidth']);
	const borderStyleClassName = getClass<BorderStyle>(variant === 'transparent' ? 'none' : variant, [
		'borders',
		'borderStyle'
	]);
	const borderRadiusClassName = getClass<Radius>(radius, ['borders', 'borderRadius']);

	const colorClasses = useMemo<ClassName>(() => {
		const borderHue = getColorHue({ colorMode, type: 'divider' });

		return classNames(classes.borders.border_color[color][borderHue], classes.backgrounds.color.transparent);
	}, [color, colorMode]);

	return classNames(borderWidthClassName, borderStyleClassName, borderRadiusClassName, colorClasses);
};

export default useMessageClasses;
