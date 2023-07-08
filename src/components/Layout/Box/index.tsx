/* eslint-disable @typescript-eslint/ban-types */
import { ElementType, forwardRef, ReactElement } from 'react';

import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_OBJECT__ } from '../../../common/types/polymorphic';

import { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
>(props: BoxProps<Element, Props>, ref: BoxRef<Element>): ReactElement {
	const { children, as: Component = __DEFAULT_POLYMORPHIC_ELEMENT__, ...rest } = props;

	return (
		<Component ref={ref} {...rest}>
			{children}
		</Component>
	);
});

export default Box;
