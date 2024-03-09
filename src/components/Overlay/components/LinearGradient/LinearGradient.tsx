import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import {
	DEFAULT_LINEAR_GRADIENT_DIRECTION,
	DEFAULT_LINEAR_GRADIENT_FROM,
	DEFAULT_LINEAR_GRADIENT_MIDDLE,
	DEFAULT_LINEAR_GRADIENT_TO
} from './common/constants';
import { useLinearGradientClasses, useLinearGradientResponsiveValues } from './common/hooks';
import { KEYS_LINEAR_GRADIENT_CLASS } from './common/keys';
import type { LinearGradientProps, LinearGradientRef } from './common/types';

const LinearGradient = forwardRef(function LinearGradient<Element extends PolymorphicElementType>(
	props: LinearGradientProps<Element>,
	ref: LinearGradientRef<Element>
): JSX.Element {
	const {
		className = DEFAULT_CLASSNAME,
		direction: directionProp = DEFAULT_LINEAR_GRADIENT_DIRECTION,
		from: fromProp = DEFAULT_LINEAR_GRADIENT_FROM,
		middle: middleProp = DEFAULT_LINEAR_GRADIENT_MIDDLE,
		to: toProp = DEFAULT_LINEAR_GRADIENT_TO,
		...rest
	} = props;

	const { direction, from, middle, to } = useLinearGradientResponsiveValues<Element>({
		direction: directionProp,
		from: fromProp,
		middle: middleProp,
		to: toProp
	});

	const classes = useLinearGradientClasses<Element>({ direction, from, middle, to });

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames(KEYS_LINEAR_GRADIENT_CLASS, classes, { [className]: !!className })}
		/>
	);
});

// LinearGradient.displayName = 'LinearGradient';

export default LinearGradient;
