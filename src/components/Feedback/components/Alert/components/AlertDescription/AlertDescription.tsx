import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { ThemeColor } from '@common/types';

import { Text } from '@components/Typography';

import { DEFAULT_ALERT_LINE_HEIGHT_SIZE } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { DEFAULT_ALERT_DESCRIPTION_AS } from './common/constants';
import { KEYS_ALERT_DESCRIPTION_CLASS } from './common/keys';
import type { AlertDescriptionElement, AlertDescriptionProps, AlertDescriptionRef } from './common/types';

const AlertDescription = forwardRef(function AlertDescription<Element extends AlertDescriptionElement>(
	props: AlertDescriptionProps<Element>,
	ref: AlertDescriptionRef<Element>
): JSX.Element {
	const { color, colorMode, status, variant } = useAlertContext();

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const DEFAULT_ALERT_DESCRIPTION_COLOR = useGetColor({
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
		as = DEFAULT_ALERT_DESCRIPTION_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color: c = DEFAULT_ALERT_DESCRIPTION_COLOR,
		fontSize = variant === 'horizontal' ? 'xl' : 'sm',
		fontWeight = 'normal',
		lineHeight = DEFAULT_ALERT_LINE_HEIGHT_SIZE,
		lineClamp = variant === 'horizontal' ? 1 : 'none',
		...rest
	} = props;

	return (
		<Text
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_ALERT_DESCRIPTION_CLASS, { [className]: !!className })}
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
