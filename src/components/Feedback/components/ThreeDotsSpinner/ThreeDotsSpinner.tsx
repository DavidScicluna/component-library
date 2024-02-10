import { forwardRef, useMemo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicElementType, ThemeFontSize } from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__, __DEFAULT_THREE_DOTS_SPINNER_SIZE__ } from './common/constants';
import { useThreeDotsSpinnerResponsiveValues } from './common/hooks';
import { __KEYS_THREE_DOTS_SPINNER_CLASS__, __KEYS_THREE_DOTS_SPINNER_WRAPPER_CLASS__ } from './common/keys';
import type { ThreeDotsSpinnerProps, ThreeDotsSpinnerRef, ThreeDotsSpinnerSize } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const ThreeDotsSpinner = forwardRef(function ThreeDotsSpinner<Element extends PolymorphicElementType>(
	props: ThreeDotsSpinnerProps<Element>,
	ref: ThreeDotsSpinnerRef<Element>
): JSX.Element {
	const theme = useTheme();

	const __DEFAULT_THREE_DOTS_SPINNER_COLOR__ = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_THREE_DOTS_SPINNER_COLOR__,
		isVisible: isVisibleProp = __DEFAULT_THREE_DOTS_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_THREE_DOTS_SPINNER_SIZE__,
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
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_THREE_DOTS_SPINNER_CLASS__, { [className]: !!className })}
		>
			<ThreeDots
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={__KEYS_THREE_DOTS_SPINNER_WRAPPER_CLASS__}
				visible={isVisible}
			/>
		</Box>
	);
});

// ThreeDotsSpinner.displayName = 'ThreeDotsSpinner';

export default ThreeDotsSpinner;
