import type { ElementType, ReactElement } from 'react';
import { createContext, forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_RADIUS__ } from '@common/constants';
import { useGetResponsiveValue } from '@common/hooks';
import type { PolymorphicDefaultElement, ThemeRadius } from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_PROGRESS_IS_INDETERMINATE__,
	__DEFAULT_PROGRESS_MAX__,
	__DEFAULT_PROGRESS_MIN__,
	__DEFAULT_PROGRESS_VALUE__,
	__DEFAULT_PROGRESS_VARIANT__
} from './common/constants';
import { useProgressClasses, useProgressStyles } from './common/hooks';
import { __KEYS_PROGRESS_CLASS__ } from './common/keys';
import type {
	ProgressContext as ProgressContextType,
	ProgressProps,
	ProgressRef,
	ProgressVariant
} from './common/types';
import { ProgressSection } from './components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProgressContext = createContext<ProgressContextType<any>>({
	isIndeterminate: __DEFAULT_PROGRESS_IS_INDETERMINATE__,
	max: __DEFAULT_PROGRESS_MAX__,
	min: __DEFAULT_PROGRESS_MIN__,
	radius: __DEFAULT_RADIUS__,
	variant: __DEFAULT_PROGRESS_VARIANT__
});

const Progress = forwardRef(function Progress<Element extends ElementType = PolymorphicDefaultElement>(
	props: ProgressProps<Element>,
	ref: ProgressRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		isIndeterminate: indeterminate = __DEFAULT_PROGRESS_IS_INDETERMINATE__,
		max: ma = __DEFAULT_PROGRESS_MAX__,
		min: mi = __DEFAULT_PROGRESS_MIN__,
		radius: r = __DEFAULT_RADIUS__,
		value: val = __DEFAULT_PROGRESS_VALUE__,
		variant: va = __DEFAULT_PROGRESS_VARIANT__,
		...rest
	} = props;

	const isIndeterminate = useGetResponsiveValue<boolean>(indeterminate);
	const max = useGetResponsiveValue<number>(ma);
	const min = useGetResponsiveValue<number>(mi);
	const radius = useGetResponsiveValue<ThemeRadius>(r);
	const value = useGetResponsiveValue<number>(val);
	const variant = useGetResponsiveValue<ProgressVariant>(va);

	const classes = useProgressClasses<Element>({ color, colorMode, radius });
	const styles = useProgressStyles<Element>({ variant });

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

export default Progress;
