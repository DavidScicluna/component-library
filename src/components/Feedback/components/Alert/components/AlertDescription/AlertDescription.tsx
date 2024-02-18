import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { ThemeColor } from '@common/types';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { __DEFAULT_ALERT_DESCRIPTION_AS__ } from './common/constants';
import { __KEYS_ALERT_DESCRIPTION_CLASS__ } from './common/keys';
import type { AlertDescriptionElement, AlertDescriptionProps, AlertDescriptionRef } from './common/types';

const AlertDescription = forwardRef(function AlertDescription<Element extends AlertDescriptionElement>(
	props: AlertDescriptionProps<Element>,
	ref: AlertDescriptionRef<Element>
): JSX.Element {
	const { color, colorMode, status, variant } = useAlertContext();

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const __DEFAULT_ALERT_DESCRIPTION_COLOR__ = useGetColor({
		color: statusColor,
		colorMode,
		colorType: 'color',
		hueType:
			status !== 'default'
				? 'color'
				: statusColor === 'gray'
					? 'text.secondary'
					: colorMode === 'light'
						? 'dark'
						: 'light',
		classType: 'text'
	});

	const {
		children,
		as = __DEFAULT_ALERT_DESCRIPTION_AS__,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color: c = __DEFAULT_ALERT_DESCRIPTION_COLOR__,
		fontSize = variant === 'horizontal' ? 'xl' : 'sm',
		fontWeight = 'normal',
		lineHeight = __DEFAULT_ALERT_LINE_HEIGHT_SIZE__,
		lineClamp = variant === 'horizontal' ? 1 : 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_ALERT_DESCRIPTION_CLASS__, { [className]: !!className })}
			align={align}
			color={c}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			lineClamp={lineClamp}
		>
			{children}
		</Text>
	);
});

// AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
