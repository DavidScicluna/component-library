import { forwardRef, useMemo } from 'react';
import { Puff } from 'react-loader-spinner';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicElementType, ThemeFontSize } from '@common/types';
import { checkFontSizeType, convertREMToPixels, convertStringToNumber } from '@common/utils';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_PUFF_SPINNER_IS_VISIBLE__, __DEFAULT_PUFF_SPINNER_SIZE__ } from './common/constants';
import { usePuffSpinnerResponsiveValues } from './common/hooks';
import { __KEYS_PUFF_SPINNER_CLASS__, __KEYS_PUFF_SPINNER_WRAPPER_CLASS__ } from './common/keys';
import type { PuffSpinnerProps, PuffSpinnerRef, PuffSpinnerSize } from './common/types';

const PuffSpinner = forwardRef(function PuffSpinner<Element extends PolymorphicElementType>(
	props: PuffSpinnerProps<Element>,
	ref: PuffSpinnerRef<Element>
): JSX.Element {
	const theme = useTheme();

	const __DEFAULT_PUFFS_PINNER_COLOR__ = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_PUFFS_PINNER_COLOR__,
		isVisible: isVisibleProp = __DEFAULT_PUFF_SPINNER_IS_VISIBLE__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		size: sizeProp = __DEFAULT_PUFF_SPINNER_SIZE__,
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
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_PUFF_SPINNER_CLASS__, { [className]: !!className })}
		>
			<Puff
				width={dimensions}
				height={dimensions}
				color={color}
				radius={theme.borderRadius[radius]}
				// wrapperStyle={wrapperStyle}
				wrapperClass={__KEYS_PUFF_SPINNER_WRAPPER_CLASS__}
				visible={isVisible}
			/>
		</Box>
	);
});

// PuffSpinner.displayName = 'PuffSpinner';

export default PuffSpinner;
