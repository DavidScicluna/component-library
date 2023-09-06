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

import classNames from 'classnames';

import {
	// __DEFAULT_BORDER_WIDTH__,
	__DEFAULT_CLASS_PREFIX__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_RADIUS__
} from '@common/constants';
import { useGetColor, useTheme } from '@common/hooks';
import type { ThemeFontSize } from '@common/types';
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

const Spinner = forwardRef(function Spinner<Element extends ElementType>(
	props: SpinnerProps<Element>,
	ref: SpinnerRef<Element>
): ReactElement {
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
						ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-bars-spinner`}
						width={dimensions}
						height={dimensions}
						color={color}
						wrapperStyle={wrapperStyle}
						wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-bars-spinner-wrapper`}
						visible={isVisible}
					/>
				);
			}
			// case 'color_ring': {
			// 	const { colors } = props as SpinnerColorRingVariant;
			// 	return (
			// 		<ColorRing
			// 			ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-color-ring-spinner`}
			// 			width={dimensions}
			// 			height={dimensions}
			// 			colors={colors}
			// 			wrapperStyle={wrapperStyle}
			// 			wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-color-ring-spinner-wrapper`}
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
			// 			ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-oval-spinner`}
			// 			width={dimensions}
			// 			height={dimensions}
			// 			color={color}
			// 			secondaryColor={secondaryColor}
			// 			strokeWidth={strokeWidth}
			// 			strokeWidthSecondary={strokeWidthSecondary}
			// 			wrapperStyle={wrapperStyle}
			// 			wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-oval-spinner-wrapper`}
			// 			visible={isVisible}
			// 		/>
			// 	);
			// }
			case 'puff': {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerPuffVariant;
				return (
					<Puff
						ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-puff-spinner`}
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-puff-spinner-wrapper`}
						visible={isVisible}
					/>
				);
			}
			case 'rings': {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerRingsVariant;
				return (
					<Rings
						ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-rings-spinner`}
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-rings-spinner-wrapper`}
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
						ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-tail-spin-spinner`}
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-tail-spin-spinner-wrapper`}
						visible={isVisible}
					/>
				);
			}
			default: {
				const { radius = __DEFAULT_RADIUS__ } = props as SpinnerThreeDotsVariant;
				return (
					<ThreeDots
						ariaLabel={`${__DEFAULT_CLASS_PREFIX__}-three-dots-spinner`}
						width={dimensions}
						height={dimensions}
						color={color}
						radius={theme.borderRadius[radius]}
						wrapperStyle={wrapperStyle}
						wrapperClass={`${__DEFAULT_CLASS_PREFIX__}-three-dots-spinner-wrapper`}
						visible={isVisible}
					/>
				);
			}
		}
	}, [props]);

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-spinner-container`, { [className]: !!className })}
		>
			{spinner}
		</Box>
	);
});

export default Spinner;
