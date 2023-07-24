import { ElementType, forwardRef, ReactElement } from 'react';

import { css } from '@emotion/react';

import {
	__DEFAULT_POLYMORPHIC_ELEMENT__,
	__DEFAULT_POLYMORPHIC_OBJECT__,
	__DEFAULT_POLYMORPHIC_SX__
} from '@common/constants';

import type { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
>(props: BoxProps<Element, Props>, ref: BoxRef<Element>): ReactElement {
	const {
		children,
		as: Component = __DEFAULT_POLYMORPHIC_ELEMENT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	return (
		<Component ref={ref} {...rest} css={css(sx)}>
			{children}
		</Component>
	);
});

export default Box;
