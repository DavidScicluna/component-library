import { useMemo } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { DEFAULT_BORDER_STYLE, DEFAULT_BORDER_WIDTH, DEFAULT_COLOR } from '@common/constants';
import { useAppTheme, useGetColor } from '@common/hooks';
import type { ClassName, ThemeColor } from '@common/types';
import { getColorHue } from '@common/utils';

import { DEFAULT_ALERT_STATUS } from '../constants';
import type { AlertElement, AlertProps } from '../types';
import { getStatusColor } from '../utils';

import useAlertResponsiveValues from './useAlertResponsiveValues';

type UseAlertClassesProps<Element extends AlertElement> = Pick<AlertProps<Element>, 'color' | 'colorMode' | 'status'>;
type UseAlertClassesReturn = ClassName;

const useAlertClasses = <Element extends AlertElement>(props: UseAlertClassesProps<Element>): UseAlertClassesReturn => {
	const { colorMode: DEFAULT_ALERT_COLORMODE } = useAppTheme();

	const {
		color = DEFAULT_COLOR,
		colorMode = DEFAULT_ALERT_COLORMODE,
		status: statusProp = DEFAULT_ALERT_STATUS
	} = props;

	const { status } = useAlertResponsiveValues<Element>({ status: statusProp });

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
		classes.borders.border_width[DEFAULT_BORDER_WIDTH],
		classes.borders.border_style[DEFAULT_BORDER_STYLE],
		classes.borders.border_radius.base,
		borderColorClassName,
		backgroundClassName,
		shadowClassName
	);
};

export default useAlertClasses;
