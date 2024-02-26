import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst, useGetColor } from '@common/hooks';
import type { IconKey, ThemeColor } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { __DEFAULT_ALERT_ICON_AS__, __DEFAULT_ALERT_ICON_VARIANT__ } from './common/constants';
import { __KEYS_ALERT_ICON_CLASS__ } from './common/keys';
import type { AlertIconElement, AlertIconProps, AlertIconRef } from './common/types';

const AlertIcon = forwardRef(function AlertIcon<Element extends AlertIconElement>(
	props: AlertIconProps<Element>,
	ref: AlertIconRef<Element>
): JSX.Element {
	const {
		color: __DEFAULT_ALERT_ICON_COLOR__,
		colorMode: __DEFAULT_ALERT_ICON_COLORMODE__,
		status
	} = useAlertContext();

	const {
		as = __DEFAULT_ALERT_ICON_AS__,
		className = __DEFAULT_CLASSNAME__,
		color: c = __DEFAULT_ALERT_ICON_COLOR__,
		colorMode = __DEFAULT_ALERT_ICON_COLORMODE__,
		icon,
		variant = __DEFAULT_ALERT_ICON_VARIANT__,
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
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			// TODO: Maybe create a function that generates class names
			className={classNames(__KEYS_ALERT_ICON_CLASS__, { [className]: !!className })}
			w={`${size}px`}
			h={`${size}px`}
			color={c}
			colorMode={colorMode}
			icon={icon || statusIcon}
			size={`${size}px`}
			variant={variant}
			sx={{ color }}
		/>
	);
});

// AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
