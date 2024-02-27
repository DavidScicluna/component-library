import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import { useConst, useGetColor } from '@common/hooks';
import type { IconKey, ThemeColor } from '@common/types';
import { getFontSizeHeight } from '@common/utils';

import type { IconProps } from '@components/DataDisplay';
import { Icon } from '@components/DataDisplay';

import { DEFAULT_ALERT_LINE_HEIGHT_SIZE } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { DEFAULT_ALERT_ICON_AS, DEFAULT_ALERT_ICON_VARIANT } from './common/constants';
import { KEYS_ALERT_ICON_CLASS } from './common/keys';
import type { AlertIconElement, AlertIconProps, AlertIconRef } from './common/types';

const AlertIcon = forwardRef(function AlertIcon<Element extends AlertIconElement>(
	props: AlertIconProps<Element>,
	ref: AlertIconRef<Element>
): JSX.Element {
	const { color: DEFAULT_ALERT_ICON_COLOR, colorMode: DEFAULT_ALERT_ICON_COLORMODE, status } = useAlertContext();

	const {
		as = DEFAULT_ALERT_ICON_AS,
		className = DEFAULT_CLASSNAME,
		color: c = DEFAULT_ALERT_ICON_COLOR,
		colorMode = DEFAULT_ALERT_ICON_COLORMODE,
		icon,
		variant = DEFAULT_ALERT_ICON_VARIANT,
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

	const size = useConst(getFontSizeHeight('xl', DEFAULT_ALERT_LINE_HEIGHT_SIZE));

	return (
		<Icon
			{...(rest as IconProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(KEYS_ALERT_ICON_CLASS, { [className]: !!className })}
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
