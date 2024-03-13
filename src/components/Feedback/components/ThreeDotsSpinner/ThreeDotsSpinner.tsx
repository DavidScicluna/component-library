import { forwardRef, useMemo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicElementType, ThemeFontSize } from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import { Box } from '@components/Box';

import { DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE, DEFAULT_THREE_DOTS_SPINNER_SIZE } from './common/constants';
import { useThreeDotsSpinnerResponsiveValues } from './common/hooks';
import { KEYS_THREE_DOTS_SPINNER_CLASS, KEYS_THREE_DOTS_SPINNER_WRAPPER_CLASS } from './common/keys';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerRef, ThreeDotsSpinnerSize } from './common/types';

const ThreeDotsSpinner = forwardRef(function ThreeDotsSpinner<Element extends PolymorphicElementType>(
	props: ThreeDotsSpinnerProps<Element>,
	ref: ThreeDotsSpinnerRef<Element>
): JSX.Element {
	const theme = useTheme();

	const DEFAULT_THREE_DOTS_SPINNER_COLOR = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_THREE_DOTS_SPINNER_COLOR,
		isVisible: isVisibleProp = DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_THREE_DOTS_SPINNER_SIZE,
		...rest
	} = props;

	const { isVisible, radius, size } = useThreeDotsSpinnerResponsiveValues<Element>({
		isVisible: isVisibleProp,
		radius: radiusProp,
		size: sizeProp
	});

	const dimensions = useMemo<ThreeDotsSpinnerSize>(() => {
		return checkFontSizeType(size) === 'theme'
			? convertREMToPixels(convertStringToNumber(theme.fontSizes[size as ThemeFontSize], 'rem'))
			: size;
	}, [size]);

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_THREE_DOTS_SPINNER_CLASS, { [className]: !!className })}>
			<ThreeDots
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={KEYS_THREE_DOTS_SPINNER_WRAPPER_CLASS}
				visible={isVisible}
			/>
		</Box>
	);
});

// ThreeDotsSpinner.displayName = 'ThreeDotsSpinner';

export default ThreeDotsSpinner;
