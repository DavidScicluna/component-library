import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from './common/constants';
import { useLinearGradientClasses, useLinearGradientResponsiveValues } from './common/hooks';
import { __KEYS_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { LinearGradientProps, LinearGradientRef } from './common/types';

const LinearGradient = forwardRef(function LinearGradient<Element extends PolymorphicElementType>(
	props: LinearGradientProps<Element>,
	ref: LinearGradientRef<Element>
): JSX.Element {
	const {
		className = __DEFAULT_CLASSNAME__,
		direction: directionProp = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from: fromProp = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle: middleProp = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to: toProp = __DEFAULT_LINEAR_GRADIENT_TO__,
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
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_LINEAR_GRADIENT_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

// LinearGradient.displayName = 'LinearGradient';

export default LinearGradient;
