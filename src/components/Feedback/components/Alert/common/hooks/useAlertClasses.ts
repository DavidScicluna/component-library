import type { ElementType } from 'react';

import classNames from 'classnames';

import classes from '@common/classes';
import { __DEFAULT_BORDER_STYLE__, __DEFAULT_BORDER_WIDTH__, __DEFAULT_COLOR__ } from '@common/constants';
import { useAppTheme, useGetColor, useGetResponsiveValue } from '@common/hooks';
import type { ClassName } from '@common/types';

import { __DEFAULT_ALERT_STATUS__ } from '../constants';
import type { AlertProps, AlertStatus } from '../types';
import { getStatusColor } from '../utils';

type UseAlertClassesProps<Element extends ElementType> = Pick<AlertProps<Element>, 'color' | 'colorMode' | 'status'>;
type UseAlertClassesReturn = ClassName;

const useAlertClasses = <Element extends ElementType>(props: UseAlertClassesProps<Element>): UseAlertClassesReturn => {
	const { colorMode: __DEFAULT_ALERT_COLORMODE__ } = useAppTheme();

	const {
		color = __DEFAULT_COLOR__,
		colorMode = __DEFAULT_ALERT_COLORMODE__,
		status: st = __DEFAULT_ALERT_STATUS__
	} = props;

	const status = useGetResponsiveValue<AlertStatus>(st);

	const backgroundClassName = useGetColor({
		color: getStatusColor(status, color),
		colorMode,
		colorType: colorMode === 'dark' ? 'default' : 'color',
		hueType: status === 'default' || colorMode === 'dark' ? 'background' : 'light',
		classType: 'bg'
	});

	const borderColorClassName = useGetColor({
		color: getStatusColor(status, color),
		colorMode,
		colorType: colorMode === 'dark' ? 'default' : 'color',
		hueType: status === 'default' || colorMode === 'dark' ? 'divider' : 'color',
		classType: 'border'
	});

	const shadowClassName = useGetColor({
		color: getStatusColor(status, color),
		colorMode,
		colorType: colorMode === 'dark' ? 'default' : 'color',
		hueType: status === 'default' || colorMode === 'dark' ? 'background' : 'light',
		classType: 'shadow'
	});

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
