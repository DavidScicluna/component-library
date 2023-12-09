import type { ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import { useGetColor } from '@common/hooks';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultProps,
	ThemeColor
} from '@common/types';

import { Text } from '@components/Typography';

import { __DEFAULT_ALERT_LINE_HEIGHT_SIZE__ } from '../../common/constants';
import { useAlertContext } from '../../common/hooks';
import { getStatusColor } from '../../common/utils';

import { __KEYS_ALERT_LABEL_CLASS__ } from './common/keys';
import type { AlertLabelDefaultElement, AlertLabelElement, AlertLabelProps, AlertLabelRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const AlertLabel: PolymorphicComponentWithRef = forwardRef(function AlertLabel<
	Element extends AlertLabelElement = AlertLabelDefaultElement
>(props: AlertLabelProps<Element>, ref: AlertLabelRef<Element>): ReactElement {
	const { color, colorMode, status, variant } = useAlertContext();

	const statusColor = useMemo<ThemeColor>(() => getStatusColor(status, color), [status, color]);

	const __DEFAULT_ALERT_LABEL_COLOR__ = useGetColor({
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

export default <Element extends AlertLabelElement = AlertLabelDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <AlertLabel<Element> {...props} />;
