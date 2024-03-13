import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_RADIUS } from '@common/constants';

import { Box } from '@components/Box';

import {
	DEFAULT_PROGRESS_AS,
	DEFAULT_PROGRESS_IS_INDETERMINATE,
	DEFAULT_PROGRESS_MAX,
	DEFAULT_PROGRESS_MIN,
	DEFAULT_PROGRESS_VALUE,
	DEFAULT_PROGRESS_VARIANT
} from './common/constants';
import { useProgressClasses, useProgressResponsiveValues, useProgressStyles } from './common/hooks';
import { KEYS_PROGRESS_CLASS } from './common/keys';
import type {
	ProgressContext as ProgressContextType,
	ProgressDefaultElement,
	ProgressElement,
	ProgressProps,
	ProgressRef
} from './common/types';
import { ProgressSection } from './components';

export const ProgressContext = createContext<ProgressContextType<ProgressDefaultElement>>({
	isIndeterminate: DEFAULT_PROGRESS_IS_INDETERMINATE,
	max: DEFAULT_PROGRESS_MAX,
	min: DEFAULT_PROGRESS_MIN,
	radius: DEFAULT_RADIUS,
	variant: DEFAULT_PROGRESS_VARIANT
});

const Progress = forwardRef(function Progress<Element extends ProgressElement>(
	props: ProgressProps<Element>,
	ref: ProgressRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_PROGRESS_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		isIndeterminate: isIndeterminateProp = DEFAULT_PROGRESS_IS_INDETERMINATE,
		max: maxProp = DEFAULT_PROGRESS_MAX,
		min: minProp = DEFAULT_PROGRESS_MIN,
		radius: radiusProp = DEFAULT_RADIUS,
		value: valueProp = DEFAULT_PROGRESS_VALUE,
		variant: variantProp = DEFAULT_PROGRESS_VARIANT,
		...rest
	} = props;

	const { isIndeterminate, max, min, radius, value, variant } = useProgressResponsiveValues<Element>({
		isIndeterminate: isIndeterminateProp,
		max: maxProp,
		min: minProp,
		radius: radiusProp,
		value: valueProp,
		variant: variantProp
	});

	const classes = useProgressClasses<Element>({ color, colorMode, radius });
	const styles = useProgressStyles<Element>({ variant });

	return (
		<ProgressContext.Provider value={{ color, colorMode, isIndeterminate, max, min, radius, variant }}>
			<Box
				{...rest}
				as={as}
				ref={ref}
				className={classNames(KEYS_PROGRESS_CLASS, classes, { [className]: !!className })}
			>
				{isIndeterminate || !children ? (
					<ProgressSection value={value} sx={isIndeterminate ? styles : undefined} />
				) : (
					children
				)}
			</Box>
		</ProgressContext.Provider>
	);
});

// Progress.displayName = 'Progress';

export default Progress;
