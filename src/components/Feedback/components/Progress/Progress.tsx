import type { ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VALUE__,
	__DEFAULT_PROGRESS_VARIANT__
} from './common/constants';
import { useProgressClasses, useProgressResponsiveValues, useProgressStyles } from './common/hooks';
import { __KEYS_PROGRESS_CLASS__ } from './common/keys';
import type { ProgressContext as ProgressContextType, ProgressProps, ProgressRef } from './common/types';
import { ProgressSection } from './components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

export const ProgressContext = createContext<ProgressContextType>({
	isIndeterminate: __DEFAULT_PROGRESS_IS_INDETERMINATE__,
	max: __DEFAULT_PROGRESS_MAX__,
	min: __DEFAULT_PROGRESS_MIN__,
	radius: __DEFAULT_RADIUS__,
	variant: __DEFAULT_PROGRESS_VARIANT__
});

const Progress: PolymorphicComponentWithRef = forwardRef(function Progress<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: ProgressProps<Element>, ref: ProgressRef<Element>): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isIndeterminate: isIndeterminateProp = __DEFAULT_PROGRESS_IS_INDETERMINATE__,
		max: maxProp = __DEFAULT_PROGRESS_MAX__,
		min: minProp = __DEFAULT_PROGRESS_MIN__,
		radius: radiusProp = __DEFAULT_RADIUS__,
		value: valueProp = __DEFAULT_PROGRESS_VALUE__,
		variant: variantProp = __DEFAULT_PROGRESS_VARIANT__,
		...rest
	} = props;

	const { isIndeterminate, max, min, radius, value, variant } = useProgressResponsiveValues({
		isIndeterminate: isIndeterminateProp,
		max: maxProp,
		min: minProp,
		radius: radiusProp,
		value: valueProp,
		variant: variantProp
	});

	const classes = useProgressClasses({ color, colorMode, radius });
	const styles = useProgressStyles({ variant });

	return (
		<ProgressContext.Provider value={{ color, colorMode, isIndeterminate, max, min, radius, variant }}>
			<Box<Element>
				{...rest}
				ref={ref}
				className={classNames(__KEYS_PROGRESS_CLASS__, classes, { [className]: !!className })}
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

Progress.displayName = 'Progress';

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <Progress<Element> {...props} />;
