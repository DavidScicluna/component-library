import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useConst } from '@common/hooks';
import { getFontSizeHeight } from '@common/utils';

import { Icon } from '@components/DataDisplay';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor, getStatusIcon } from '../../common/utils';

import { __KEYS_ALERT_ICON_CLASS__ } from './common/keys';
import type { AlertIconDefaultElement, AlertIconElement, AlertIconProps, AlertIconRef } from './common/types';

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
		color = __DEFAULT_ALERT_ICON_COLOR__,
		colorMode = __DEFAULT_ALERT_ICON_COLORMODE__,
		icon,
		...rest
	} = props;

	const c = useMemo(() => getStatusColor(status, color), [status, color]);
	const i = useMemo(() => getStatusIcon(status), [status]);

	const size = useConst(getFontSizeHeight('xl', __DEFAULT_ALERT_LINE_HEIGHT_SIZE__));

	return (
		<Icon
			{...rest}
			ref={ref}
			// TODO: Maybe create a function that generates class names
			className={classNames(__KEYS_ALERT_ICON_CLASS__, { [className]: !!className })}
			w={`${size}px`}
			h={`${size}px`}
			color={c !== 'gray' && c !== 'transparent' && c !== 'black' && c !== 'white' ? c : undefined}
			colorMode={colorMode}
			icon={icon || i}
			size={`${size}px`}
			variant='transparent'
		/>
	);
});

AlertIcon.displayName = 'AlertIcon';

export default AlertIcon;
