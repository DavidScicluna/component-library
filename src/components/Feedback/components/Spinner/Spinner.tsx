import type { ElementType, ReactElement } from 'react';
import { forwardRef, useMemo } from 'react';
import {
	Bars,
	// ColorRing,
	//  Oval,
	Puff,
	Rings,
	//  RotatingLines,
	TailSpin,
	ThreeDots
} from 'react-loader-spinner';

import {
	// __DEFAULT_BORDER_WIDTH__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement, ThemeFontSize } from '@common/types';
import {
	checkFontSizeType,
	convertREMToPixels,
	convertStringToNumber
	// getAnimationDuration
} from '@common/utils';

import { Box } from '@components/Box';

import {
	__DEFAULT_SPINNER_IS_VISIBLE__,
	__DEFAULT_SPINNER_SIZE__,
	__DEFAULT_SPINNER_VARIANT__
} from './common/constants';
import {
	__KEYS_SPINNER_BARS_CLASS__,
	__KEYS_SPINNER_CLASS__,
	// __KEYS_SPINNER_COLOR_RING_CLASS__,
	// __KEYS_SPINNER_OVAL_CLASS__,
	__KEYS_SPINNER_PUFF_CLASS__,
	__KEYS_SPINNER_RINGS_CLASS__,
	__KEYS_SPINNER_TAIL_SPIN_CLASS__,
	__KEYS_SPINNER_THREE_DOTS_CLASS__
} from './common/keys';
import type {
	// SpinnerBarsVariant,
	// SpinnerColorRingVariant,
	// SpinnerOvalVariant,
	SpinnerProps,
	SpinnerPuffVariant,
	SpinnerRef,
	SpinnerRingsVariant,
	// SpinnerRotatingLinesVariant,
	SpinnerSize,
	SpinnerTailSpinVariant,
	SpinnerThreeDotsVariant
} from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Spinner: PolymorphicComponentWithRef = forwardRef(function Spinner<
	Element extends ElementType = PolymorphicDefaultElement
>(props: SpinnerProps<Element>, ref: SpinnerRef<Element>): ReactElement {
	const theme = useTheme();

	const __DEFAULT_SPINNER_COLOR__ = useGetColor({ colorType: 'default', hueType: 'default' });

	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_SPINNER_COLOR__,
		isVisible = __DEFAULT_SPINNER_IS_VISIBLE__,
		wrapperStyle,
		size = __DEFAULT_SPINNER_SIZE__,
		variant = __DEFAULT_SPINNER_VARIANT__,
		...rest
	} = props;

	const dimensions = useMemo<SpinnerSize>(() => {
		return checkFontSizeType(size) === 'theme'
			? convertREMToPixels(convertStringToNumber(theme.fontSizes[size as ThemeFontSize], 'rem'))
			: size;
	}, [size]);

	const spinner = useMemo<ReactElement>(() => {
		switch (variant) {
			case 'bars': {
				return (
					<Bars
						width={dimensions}
						height={dimensions}
						color={color}
						wrapperStyle={wrapperStyle}
						wrapperClass={__KEYS_SPINNER_BARS_CLASS__}
						visible={isVisible}
					/>
				);
			}
			// case 'color_ring': {
			// 	const { colors } = props as SpinnerColorRingVariant;
			// 	return (
			// 		<ColorRing
			// 			width={dimensions}
			// 			height={dimensions}
			// 			colors={colors}
			// 			wrapperStyle={wrapperStyle}
			// 			wrapperClass={__KEYS_SPINNER_COLOR_RING_CLASS__}
			// 			visible={isVisible}
			// 		/>
			// 	);
			// }
			// case 'oval': {
			// 	const {
			// 		color,
			// 		secondaryColor,
			// 		strokeWidth = __DEFAULT_BORDER_WIDTH__,
			// 		strokeWidthSecondary = __DEFAULT_BORDER_WIDTH__
			// 	} = props as SpinnerOvalVariant;
			// 	return (
			// 		<Oval
			// 			width={dimensions}
			// 			height={dimensions}
			// 			color={color}
			// 			secondaryColor={secondaryColor}
			// 			strokeWidth={strokeWidth}
			// 			strokeWidthSecondary={strokeWidthSecondary}
			// 			wrapperStyle={wrapperStyle}
			// 			wrapperClass={__KEYS_SPINNER_OVAL_CLASS__}
			// 			visible={isVisible}
			// 		/>
			// 	);
			// }
			case 'puff': {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerPuffVariant;
				return (
					<Puff
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={__KEYS_SPINNER_PUFF_CLASS__}
						visible={isVisible}
					/>
				);
			}
			case 'rings': {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerRingsVariant;
				return (
					<Rings
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={__KEYS_SPINNER_RINGS_CLASS__}
						visible={isVisible}
					/>
				);
			}
			// case 'rotating_lines': {
			// 	const { strokeColor, strokeWidth = __DEFAULT_BORDER_WIDTH__ } = props as SpinnerRotatingLinesVariant;
			// 	return (
			// 		<RotatingLines
			// 			ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-rotating-lines-spinner`}
			// 			width={dimensions as unknown as string}
			// 			strokeColor={strokeColor}
			// 			strokeWidth={strokeWidth as string}
			// 			animationDuration={`${getAnimationDuration('ultra-slow')}`}
			// 			visible={isVisible}
			// 		/>
			// 	);
			// }
			case 'tail_spin': {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerTailSpinVariant;
				return (
					<TailSpin
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={__KEYS_SPINNER_TAIL_SPIN_CLASS__}
						visible={isVisible}
					/>
				);
			}
			default: {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerThreeDotsVariant;
				return (
					<ThreeDots
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={__KEYS_SPINNER_THREE_DOTS_CLASS__}
						visible={isVisible}
					/>
				);
			}
		}
	}, [props]);

	return (
		<Box<Element> {...rest} ref={ref} className={classNames(__KEYS_SPINNER_CLASS__, { [className]: !!className })}>
			{spinner}
		</Box>
	);
});

Spinner.displayName = 'Spinner';

export default Spinner;
