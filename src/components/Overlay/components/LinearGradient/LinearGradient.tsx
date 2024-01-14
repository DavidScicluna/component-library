import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type {
	PolymorphicComponentPropsWithRef,
	PolymorphicComponentWithRef,
	PolymorphicDefaultElement,
	PolymorphicDefaultProps,
	PolymorphicElementType
} from '@common/types';

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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const LinearGradient: PolymorphicComponentWithRef = forwardRef(function LinearGradient<
	Element extends PolymorphicElementType = PolymorphicDefaultElement
>(props: LinearGradientProps<Element>, ref: LinearGradientRef<Element>): ReactElement {
	const {
		className = __DEFAULT_CLASSNAME__,
		direction: directionProp = __DEFAULT_LINEAR_GRADIENT_DIRECTION__,
		from: fromProp = __DEFAULT_LINEAR_GRADIENT_FROM__,
		middle: middleProp = __DEFAULT_LINEAR_GRADIENT_MIDDLE__,
		to: toProp = __DEFAULT_LINEAR_GRADIENT_TO__,
		...rest
	} = props;

	const { direction, from, middle, to } = useLinearGradientResponsiveValues({
		direction: directionProp,
		from: fromProp,
		middle: middleProp,
		to: toProp
	});

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

export default <Element extends PolymorphicElementType = PolymorphicDefaultElement, Props = PolymorphicDefaultProps>(
	props: PolymorphicComponentPropsWithRef<Element, Props>
) => <LinearGradient<Element> {...props} />;
