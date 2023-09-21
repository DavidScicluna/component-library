import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';

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

const AlertDescription = forwardRef(function AlertDescription<
	Element extends AlertDescriptionElement = AlertDescriptionDefaultElement
>(props: AlertDescriptionProps<Element>, ref: AlertDescriptionRef<Element>): ReactElement {
	const { color, colorMode, status, variant } = useAlertContext();

	const __DEFAULT_ALERT_DESCRIPTION_COLOR__ = useGetColor({
		color: getStatusColor(status, color),
		colorMode,
		colorType: 'color',
		hueType: status !== 'default' ? 'color' : 'text.secondary',
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
