import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { ThemeColor } from '@common/types';

import type { TextProps } from '@components/Typography';
import { Text } from '@components/Typography';

import { DEFAULT_ALERT_LINE_HEIGHT_SIZE } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { DEFAULT_ALERT_LABEL_AS } from './common/constants';
import { KEYS_ALERT_LABEL_CLASS } from './common/keys';
import type { AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef } from './common/types';

const AlertLabel = forwardRef(function AlertLabel<Element extends AlertLabelElement = AlertLabelDefaultElement>(
	props: AlertLabelProps<Element>,
	ref: AlertLabelRef<Element>
): JSX.Element {
	const { color, colorMode, status, variant } = useAlertContext();

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const DEFAULT_ALERT_LABEL_COLOR = useGetColor({
		color: statusColor,
		colorMode,
		colorType: 'color',
		hueType:
			status !== 'default'
				? 'color'
				: statusColor === 'gray'
					? 'text.primary'
					: colorMode === 'light'
						? 'dark'
						: 'light',
		classType: 'text'
	});

	const {
		children,
		as = DEFAULT_ALERT_LABEL_AS,
		className = DEFAULT_CLASSNAME,
		align = 'left',
		color: c = DEFAULT_ALERT_LABEL_COLOR,
		fontSize = 'xl',
		fontWeight = 'semibold',
		lineHeight = DEFAULT_ALERT_LINE_HEIGHT_SIZE,
		lineClamp = variant === 'horizontal' ? 1 : 'none',
		...rest
	} = props;

	return (
		<Text
			{...(rest as TextProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_ALERT_LABEL_CLASS, { [className]: !!className })}
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

// AlertLabel.displayName = 'AlertLabel';

export default AlertLabel;
