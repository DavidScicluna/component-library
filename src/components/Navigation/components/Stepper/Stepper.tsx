import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import {
	DEFAULT_APP_COLOR,
	DEFAULT_APP_COLORMODE,
	DEFAULT_CLASSNAME,
	DEFAULT_METHOD,
	DEFAULT_SPACING
} from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	DEFAULT_STEPPER_ALIGN,
	DEFAULT_STEPPER_AS,
	DEFAULT_STEPPER_ID,
	DEFAULT_STEPPER_INDEX,
	DEFAULT_STEPPER_IS_CONSECUTIVELY,
	DEFAULT_STEPPER_IS_DISABLED,
	DEFAULT_STEPPER_IS_FITTED,
	DEFAULT_STEPPER_ORIENTATION,
	DEFAULT_STEPPER_SIZE,
	DEFAULT_STEPPER_TOTAL,
	DEFAULT_STEPPER_VARIANT
} from './common/constants';
import { useStepperResponsiveValues } from './common/hooks';
import { KEYS_STEPPER_CLASS } from './common/keys';
import type {
	StepperContext as StepperContextType,
	StepperDefaultElement,
	StepperElement,
	StepperProps,
	StepperRef
} from './common/types';

export const StepperContext = createContext<StepperContextType<StepperDefaultElement>>({
	color: DEFAULT_APP_COLOR,
	colorMode: DEFAULT_APP_COLORMODE,
	align: DEFAULT_STEPPER_ALIGN,
	id: DEFAULT_STEPPER_ID,
	index: DEFAULT_STEPPER_INDEX,
	total: DEFAULT_STEPPER_TOTAL,
	isConsecutively: DEFAULT_STEPPER_IS_CONSECUTIVELY,
	isDisabled: DEFAULT_STEPPER_IS_DISABLED,
	isFitted: DEFAULT_STEPPER_IS_FITTED,
	onChange: DEFAULT_METHOD,
	orientation: DEFAULT_STEPPER_ORIENTATION,
	size: DEFAULT_STEPPER_SIZE,
	spacing: DEFAULT_SPACING,
	variant: DEFAULT_STEPPER_VARIANT
});

const Stepper = forwardRef(function Stepper<Element extends StepperElement>(
	props: StepperProps<Element>,
	ref: StepperRef<Element>
): JSX.Element {
	const {
		children,
		id = DEFAULT_STEPPER_ID,
		as = DEFAULT_STEPPER_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		align: alignProp = DEFAULT_STEPPER_ALIGN,
		index: indexProp = DEFAULT_STEPPER_INDEX,
		total: totalProp = DEFAULT_STEPPER_TOTAL,
		isConsecutively: isConsecutivelyProp = DEFAULT_STEPPER_IS_CONSECUTIVELY,
		isDisabled: isDisabledProp = DEFAULT_STEPPER_IS_DISABLED,
		isFitted: isFittedProp = DEFAULT_STEPPER_IS_FITTED,
		onChange = DEFAULT_METHOD,
		orientation: orientationProp = DEFAULT_STEPPER_ORIENTATION,
		size: sizeProp = DEFAULT_STEPPER_SIZE,
		spacing: spacingProp = DEFAULT_SPACING,
		variant: variantProp = DEFAULT_STEPPER_VARIANT,
		...rest
	} = props;

	const { align, index, total, isConsecutively, isDisabled, isFitted, orientation, size, spacing, variant } =
		useStepperResponsiveValues<Element>({
			align: alignProp,
			index: indexProp,
			total: totalProp,
			isConsecutively: isConsecutivelyProp,
			isDisabled: isDisabledProp,
			isFitted: isFittedProp,
			orientation: orientationProp,
			size: sizeProp,
			spacing: spacingProp,
			variant: variantProp
		});

	return (
		<StepperContext.Provider
			value={{
				color,
				colorMode,
				id,
				align,
				index,
				total,
				isConsecutively,
				isDisabled,
				isFitted,
				onChange,
				orientation,
				size,
				spacing,
				variant
			}}
		>
			<Box
				{...(rest as BoxProps<Element>)}
				as={as}
				ref={ref}
				className={classNames(KEYS_STEPPER_CLASS, { [className]: !!className })}
			>
				{children}
			</Box>
		</StepperContext.Provider>
	);
});

// Stepper.displayName = 'Stepper';

export default Stepper;
