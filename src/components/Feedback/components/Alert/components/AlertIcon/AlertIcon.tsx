import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst, useGetColor } from '@common/hooks';
import type { IconKey, ThemeColor } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import { Icon } from '@components/DataDisplay';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { __KEYS_ALERT_ICON_CLASS__ } from './common/keys';
import type { AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const AlertIcon = forwardRef(function AlertIcon<Element extends AlertIconElement = AlertIconDefaultElement>(
	props: AlertIconProps<Element>,
	ref: AlertIconRef<Element>
): ReactElement {
	const {
		color: __DEFAULT_ALERT_ICON_COLOR__,
		colorMode: __DEFAULT_ALERT_ICON_COLORMODE__,
		status
	} = useAlertContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		color: c = __DEFAULT_ALERT_ICON_COLOR__,
		colorMode = __DEFAULT_ALERT_ICON_COLORMODE__,
		icon,
		...rest
	} = props;

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, c), [status, c]);
	const statusIcon = useMemo<IconKey>(() => getStatusIcon(status), [status]);

	const color = useGetColor({
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
				    : 'light'
	});

	const size = useConst(getFontSizeHeight('xl', __DEFAULT_ALERT_LINE_HEIGHT_SIZE__));

	return (
		<Icon
			{...rest}
			ref={ref}
			// TODO: Maybe create a function that generates class names
			className={classNames(__KEYS_ALERT_ICON_CLASS__, { [className]: !!className })}
			w={`${size}px`}
			h={`${size}px`}
			color={c}
			colorMode={colorMode}
			icon={icon || statusIcon}
			size={`${size}px`}
			variant='unstyled'
			sx={{ color }}
		/>
	);
});

AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
