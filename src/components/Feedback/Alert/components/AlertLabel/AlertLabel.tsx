import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

import { Text } from '@components/Typography';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { __KEYS_ALERT_LABEL_CLASS__ } from './common/keys';
import type { AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef } from './common/types';

const AlertLabel = forwardRef(function AlertLabel<Element extends AlertLabelElement = AlertLabelDefaultElement>(
	props: AlertLabelProps<Element>,
	ref: AlertLabelRef<Element>
): ReactElement {
	const { color, colorMode, status, variant } = useAlertContext();

	const __DEFAULT_ALERT_LABEL_COLOR__ = useGetColor({
		color: getStatusColor(status, color),
		colorMode,
		colorType: 'color',
		hueType: status !== 'default' ? 'color' : 'text.primary',
		classType: 'text'
	});

	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		align = 'left',
		color: c = __DEFAULT_ALERT_LABEL_COLOR__,
		fontSize = 'xl',
		fontWeight = 'semibold',
		lineHeight = __DEFAULT_ALERT_LINE_HEIGHT_SIZE__,
		lineClamp = variant === 'horizontal' ? 1 : 'none',
		...rest
	} = props;

	return (
		<Text<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_ALERT_LABEL_CLASS__, { [className]: !!className })}
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

AlertLabel.displayName = 'AlertLabel';

export default AlertLabel;
