import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_METHOD__, __DEFAULT_SPACING__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_STEPPER_ALIGN__,
	__DEFAULT_STEPPER_ID__,
	__DEFAULT_STEPPER_INDEX__,
	__DEFAULT_STEPPER_IS_CONSECUTIVELY__,
	__DEFAULT_STEPPER_IS_DISABLED__,
	__DEFAULT_STEPPER_IS_FITTED__,
	__DEFAULT_STEPPER_ORIENTATION__,
	__DEFAULT_STEPPER_SIZE__,
	__DEFAULT_STEPPER_TOTAL__,
	__DEFAULT_STEPPER_VARIANT__
} from './common/constants';
import { useStepperResponsiveValues } from './common/hooks';
import { __KEYS_STEPPER_CLASS__ } from './common/keys';
import type { StepperContext as StepperContextType, StepperProps, StepperRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const StepperContext = createContext<StepperContextType>({
	align: __DEFAULT_STEPPER_ALIGN__,
	id: __DEFAULT_STEPPER_ID__,
	index: __DEFAULT_STEPPER_INDEX__,
	total: __DEFAULT_STEPPER_TOTAL__,
	isConsecutively: __DEFAULT_STEPPER_IS_CONSECUTIVELY__,
	isDisabled: __DEFAULT_STEPPER_IS_DISABLED__,
	isFitted: __DEFAULT_STEPPER_IS_FITTED__,
	onChange: __DEFAULT_METHOD__,
	orientation: __DEFAULT_STEPPER_ORIENTATION__,
	size: __DEFAULT_STEPPER_SIZE__,
	spacing: __DEFAULT_SPACING__,
	variant: __DEFAULT_STEPPER_VARIANT__
});

const Stepper: PolymorphicComponentWithRef = forwardRef(function Stepper<
	Element extends ElementType = PolymorphicDefaultElement
>(props: StepperProps<Element>, ref: StepperRef<Element>): ReactElement {
	const {
		children,
		id = __DEFAULT_STEPPER_ID__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		align: alignProp = __DEFAULT_STEPPER_ALIGN__,
		index: indexProp = __DEFAULT_STEPPER_INDEX__,
		total: totalProp = __DEFAULT_STEPPER_TOTAL__,
		isConsecutively: isConsecutivelyProp = __DEFAULT_STEPPER_IS_CONSECUTIVELY__,
		isDisabled: isDisabledProp = __DEFAULT_STEPPER_IS_DISABLED__,
		isFitted: isFittedProp = __DEFAULT_STEPPER_IS_FITTED__,
		onChange = __DEFAULT_METHOD__,
		orientation: orientationProp = __DEFAULT_STEPPER_ORIENTATION__,
		size: sizeProp = __DEFAULT_STEPPER_SIZE__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		variant: variantProp = __DEFAULT_STEPPER_VARIANT__,
		...rest
	} = props;

	const { align, index, total, isConsecutively, isDisabled, isFitted, orientation, size, spacing, variant } =
		useStepperResponsiveValues({
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
			<Box<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_STEPPER_CLASS__, { [className]: !!className })}
			>
				{children}
			</Box>
		</StepperContext.Provider>
	);
});

Stepper.displayName = 'Stepper';

export default <Element extends ElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Stepper<Element> {...props} />;
