import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetClass, useGetResponsiveValue } from '@common/hooks';
import type { BorderStyleClass, ClassName, ThemeBorderWidth, ThemeRadius } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_SIZE__, __DEFAULT_MESSAGE_VARIANT__ } from '../constants';
import type { MessageProps, MessageVariant } from '../types';

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
		variant: v = __DEFAULT_MESSAGE_VARIANT__
	} = props;

	const variant = useGetResponsiveValue<MessageVariant>(v);

	const borderWidthClassName = useGetClass<ThemeBorderWidth>(size, ['borders', 'border_width']);
	const borderStyleClassName = useGetClass<BorderStyleClass>(variant === 'transparent' ? 'none' : variant, [
		'borders',
		'border_style'
	]);
	const borderRadiusClassName = useGetClass<ThemeRadius>(radius, ['borders', 'border_radius']);

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
