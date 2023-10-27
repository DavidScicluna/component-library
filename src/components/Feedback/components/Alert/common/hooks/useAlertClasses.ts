import { type ElementType, useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeColor } from '@common/types';
import { getColorHue } from '@common/utils';

import { __DEFAULT_ALERT_STATUS__ } from '../constants';
import type { AlertProps, AlertStatus } from '../types';
import { getStatusColor } from '../utils';

type UseAlertClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	AlertProps<Element>,
	'color' | 'colorMode' | 'status'
>;
type UseAlertClassesReturn = ClassName;

const useAlertClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseAlertClassesProps<Element>
): UseAlertClassesReturn => {
	const { colorMode: __DEFAULT_ALERT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ALERT_COLORMODE__,
		status: st = __DEFAULT_ALERT_STATUS__
	} = props;

	const status = useGetResponsiveValue<AlertStatus>(st);
	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const backgroundClassName = useGetColor({
		color: statusColor,
		colorMode,
		colorType: 'color',
		hueType: 'background',
		classType: 'bg'
	});

	const borderColorClassName = useGetColor({
		color: statusColor,
		colorMode,
		colorType: 'color',
		hueType: status === 'default' && statusColor === 'gray' ? 'divider' : 'color',
		classType: 'border'
	});

	const shadowClassName = useMemo<ClassName>(() => {
		const shadowHue = getColorHue({
			colorMode,
			type: status === 'default' && statusColor === 'gray' ? 'divider' : 'color'
		});

		switch (statusColor) {
			case 'transparent':
			case 'white':
			case 'black':
				return classNames(classes.effects.shadow_color.opacity[statusColor][10]);
			default:
				return classNames(classes.effects.shadow_color.opacity[statusColor][shadowHue][10]);
		}
	}, [colorMode, status, statusColor]);

	return classNames(
		classes.effects.shadow.xl,
		classes.borders.border_width[__DEFAULT_BORDER_WIDTH__],
		classes.borders.border_style[__DEFAULT_BORDER_STYLE__],
		classes.borders.border_radius.base,
		borderColorClassName,
		backgroundClassName,
		shadowClassName
	);
};

export default useAlertClasses;
