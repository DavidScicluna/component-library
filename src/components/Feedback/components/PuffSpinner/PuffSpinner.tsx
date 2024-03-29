import { forwardRef, useMemo } from 'react';
import { Puff } from 'react-loader-spinner';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicElementType, ThemeFontSize } from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import { Box } from '@components/Box';

import { DEFAULT_PUFF_SPINNER_IS_VISIBLE, DEFAULT_PUFF_SPINNER_SIZE } from './common/constants';
import { usePuffSpinnerResponsiveValues } from './common/hooks';
import { KEYS_PUFF_SPINNER_CLASS, KEYS_PUFF_SPINNER_WRAPPER_CLASS } from './common/keys';
import type { PuffSpinnerProps, PuffSpinnerRef, PuffSpinnerSize } from './common/types';

const PuffSpinner = forwardRef(function PuffSpinner<Element extends PolymorphicElementType>(
	props: PuffSpinnerProps<Element>,
	ref: PuffSpinnerRef<Element>
): JSX.Element {
	const theme = useTheme();

	const DEFAULT_PUFFS_PINNER_COLOR = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = DEFAULT_CLASSNAME,
		color = DEFAULT_PUFFS_PINNER_COLOR,
		isVisible: isVisibleProp = DEFAULT_PUFF_SPINNER_IS_VISIBLE,
		radius: radiusProp = DEFAULT_RADIUS,
		size: sizeProp = DEFAULT_PUFF_SPINNER_SIZE,
		...rest
	} = props;

	const { isVisible, radius, size } = usePuffSpinnerResponsiveValues<Element>({
		isVisible: isVisibleProp,
		radius: radiusProp,
		size: sizeProp
	});

	const dimensions = useMemo<PuffSpinnerSize>(() => {
		return checkFontSizeType(size) === 'theme'
			? convertREMToPixels(convertStringToNumber(theme.fontSizes[size as ThemeFontSize], 'rem'))
			: size;
	}, [size]);

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_PUFF_SPINNER_CLASS, { [className]: !!className })}>
			<Puff
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={KEYS_PUFF_SPINNER_WRAPPER_CLASS}
				visible={isVisible}
			/>
		</Box>
	);
});

// PuffSpinner.displayName = 'PuffSpinner';

export default PuffSpinner;
