import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';

import {
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM__,
	__DEFAULT_LINEAR_GRADIENT_TO__
} from './common/constants';
import { useLinearGradientClasses } from './common/hooks';
import { __KEYS_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { LinearGradientProps, LinearGradientRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const LinearGradient = forwardRef(function LinearGradient<Element extends ElementType = PolymorphicDefaultElement>(
	props: LinearGradientProps<Element>,
	ref: LinearGradientRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		direction = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle,
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

LinearGradient.displayName = 'LinearGradient';

export default LinearGradient;
