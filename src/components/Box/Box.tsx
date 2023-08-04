/** @jsxRuntime classic /
/* @jsx jsx */

import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge, omit, pick } from 'lodash-es';

import type { __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';
import { __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';

import { otherProps } from './common/constants/props';
import { useGetBoxStyles } from './common/hooks';
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

	const styles = useGetBoxStyles(pick({ ...rest }, otherProps));

	return (
		<Component {...omit({ ...rest }, otherProps)} ref={ref} css={merge(styles, sx)}>
			{children}
		</Component>
	);
});

export default Box;
