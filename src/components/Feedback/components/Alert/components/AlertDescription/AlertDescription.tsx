import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type { PolymorphicComponentWithRef, ThemeColor } from '@common/types';

import { Text } from '@components/Typography';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { __KEYS_ALERT_DESCRIPTION_CLASS__ } from './common/keys';
import type {
	AlertDescriptionDefaultElement,
	AlertDescriptionElement,
	AlertDescriptionProps,
	AlertDescriptionRef
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const AlertDescription: PolymorphicComponentWithRef = forwardRef(function AlertDescription<
	Element extends AlertDescriptionElement = AlertDescriptionDefaultElement
>(props: AlertDescriptionProps<Element>, ref: AlertDescriptionRef<Element>): ReactElement {
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
		<Text<Element>
			{...rest}
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

AlertDescription.displayName = 'AlertDescription';

export default AlertDescription;
