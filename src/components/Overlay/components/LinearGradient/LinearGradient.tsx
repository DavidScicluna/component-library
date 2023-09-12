import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import {
	__DEFAULT_LINEAR_GRADIENT_COLOR__,
	__DEFAULT_LINEAR_GRADIENT_DIRECTION__,
	__DEFAULT_LINEAR_GRADIENT_FROM_POS__,
	__DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
	__DEFAULT_LINEAR_GRADIENT_TO_POS__
} from './common/constants';
import { useLinearGradientClasses } from './common/hooks';
import { __KEYS_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { LinearGradientProps, LinearGradientRef } from './common/types';

const LinearGradient = forwardRef(function LinearGradient<Element extends ElementType>(
	props: LinearGradientProps<Element>,
	ref: LinearGradientRef<Element>
): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		color = __DEFAULT_LINEAR_GRADIENT_COLOR__,
		colorMode,
		direction = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		fromPos = __DEFAULT_LINEAR_GRADIENT_FROM_POS__,
		middlePos = __DEFAULT_LINEAR_GRADIENT_MIDDLE_POS__,
		toPos = __DEFAULT_LINEAR_GRADIENT_TO_POS__,
		...rest
	} = props;

	const classes = useLinearGradientClasses({ color, colorMode, direction, fromPos, middlePos, toPos });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_LINEAR_GRADIENT_CLASS__, classes, { [className]: !!className })}
		/>
	);
});

export default LinearGradient;
