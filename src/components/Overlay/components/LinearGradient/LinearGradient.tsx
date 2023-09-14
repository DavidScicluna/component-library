import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from './common/constants';
import { useLinearGradientClasses } from './common/hooks';
import { __KEYS_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { LinearGradientProps, LinearGradientRef } from './common/types';

// TODO: Add the ability to pass gray colors
const LinearGradient = forwardRef(function LinearGradient<Element extends ElementType>(
	props: LinearGradientProps<Element>,
	ref: LinearGradientRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		direction = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to = __DEFAULT_LINEAR_GRADIENT_TO__,
		...rest
	} = props;

	const classes = useLinearGradientClasses({ direction, from, middle, to });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_LINEAR_GRADIENT_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

export default LinearGradient;
