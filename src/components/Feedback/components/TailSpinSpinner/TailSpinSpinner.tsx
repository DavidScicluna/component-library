import { forwardRef, useMemo } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicElementType, ThemeFontSize } from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import { Box } from '@components/Box';

import { DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE, DEFAULT_TAIL_SPIN_SPINNER_SIZE } from './common/constants';
import { useTailSpinSpinnerResponsiveValues } from './common/hooks';
import { KEYS_TAIL_SPIN_SPINNER_CLASS, KEYS_TAIL_SPIN_SPINNER_WRAPPER_CLASS } from './common/keys';
import type { TailSpinSpinnerProps, TailSpinSpinnerRef, TailSpinSpinnerSize } from './common/types';

const TailSpinSpinner = forwardRef(function TailSpinSpinner<Element extends PolymorphicElementType>(
	props: TailSpinSpinnerProps<Element>,
	ref: TailSpinSpinnerRef<Element>
): JSX.Element {
	const theme = useTheme();

	const DEFAULT_TAIL_SPIN_SPINNER_COLOR = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_TAIL_SPIN_SPINNER_COLOR,
		isVisible: isVisibleProp = DEFAULT_TAIL_SPIN_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_TAIL_SPIN_SPINNER_SIZE,
		...rest
	} = props;

	const { isVisible, radius, size } = useTailSpinSpinnerResponsiveValues<Element>({
		isVisible: isVisibleProp,
		radius: radiusProp,
		size: sizeProp
	});

	const dimensions = useMemo<TailSpinSpinnerSize>(() => {
		return checkFontSizeType(size) === 'theme'
			? convertREMToPixels(convertStringToNumber(theme.fontSizes[size as ThemeFontSize], 'rem'))
			: size;
	}, [size]);

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_TAIL_SPIN_SPINNER_CLASS, { [className]: !!className })}>
			<ThreeDots
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={KEYS_TAIL_SPIN_SPINNER_WRAPPER_CLASS}
				visible={isVisible}
			/>
		</Box>
	);
});

// TailSpinSpinner.displayName = 'TailSpinSpinner';

export default TailSpinSpinner;
