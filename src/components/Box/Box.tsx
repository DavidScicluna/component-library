/** @jsxRuntime classic /
/* @jsx jsx */

import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge, omit, pick } from 'lodash-es';

import type { __DEFAULT_POLYMORPHIC_OBJECT__ } from '@common/constants';
import {
	__DEFAULT_CLASS_PREFIX__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_POLYMORPHIC_ELEMENT__,
	__DEFAULT_POLYMORPHIC_SX__
} from '@common/constants';

import { useBoxStyles } from './common/hooks';
import { __KEYS_BOX__ } from './common/keys';
import type { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<
	Element extends ElementType = typeof __DEFAULT_POLYMORPHIC_ELEMENT__,
	Props extends object = typeof __DEFAULT_POLYMORPHIC_OBJECT__
>(props: BoxProps<Element, Props>, ref: BoxRef<Element>): ReactElement {
	const {
		children,
		as: Component = __DEFAULT_POLYMORPHIC_ELEMENT__,
		className = __DEFAULT_CLASSNAME__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const styles = useBoxStyles<Element>(pick({ ...rest }, __KEYS_BOX__));

	return (
		<Component
			{...omit({ ...rest }, __KEYS_BOX__)}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-box`, { [className]: !!className })}
			css={merge(styles, sx)}
		>
			{children}
		</Component>
	);
});

export default Box;
