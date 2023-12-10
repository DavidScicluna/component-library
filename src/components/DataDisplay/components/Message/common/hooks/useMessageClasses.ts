import { useMemo } from 'react';

import classes from '@common/classes';
import { __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetClass } from '@common/hooks';
import type { BorderStyleClass, ClassName, ThemeBorderWidth, ThemeRadius } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_MESSAGE_RADIUS__, __DEFAULT_MESSAGE_VARIANT__ } from '../constants';
import type { MessageProps } from '../types';

import useMessageResponsiveValues from './useMessageResponsiveValues';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseMessageClassesProps = Pick<MessageProps, 'color' | 'colorMode' | 'radius' | 'variant'>;
type UseMessageClassesReturn = ClassName;

const useMessageClasses = (props: UseMessageClassesProps): UseMessageClassesReturn => {
	const { colorMode: __DEFAULT_ICON_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ICON_COLORMODE__,
		radius: radiusProp = __DEFAULT_MESSAGE_RADIUS__,
		variant: variantProp = __DEFAULT_MESSAGE_VARIANT__
	} = props;

	const { radius, variant } = useMessageResponsiveValues({ radius: radiusProp, variant: variantProp });

	const borderWidthClassName = useGetClass<ThemeBorderWidth>(__DEFAULT_BORDER_WIDTH__, ['borders', 'border_width']);
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
