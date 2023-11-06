/** @jsxRuntime classic /
/* @jsx jsx */

import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { merge, omit, pick } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { useBoxStyles } from './common/hooks';
import { __KEYS_BOX__, __KEYS_BOX_CLASS__ } from './common/keys';
import type { BoxProps, BoxRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Box = forwardRef(function Box<Element extends ElementType = PolymorphicDefaultElement>(
	props: BoxProps<Element>,
	ref: BoxRef<Element>
): ReactElement {
	const {
		children,
		as = __DEFAULT_POLYMORPHIC_ELEMENT__,
		className = __DEFAULT_CLASSNAME__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const Component = as;
	const styles = useBoxStyles<Element>(pick({ ...rest }, __KEYS_BOX__));

	return (
		<Component
			{...omit({ ...rest }, __KEYS_BOX__)}
			ref={ref}
			className={classNames(__KEYS_BOX_CLASS__, { [className]: !!className })}
			css={merge(styles, sx)}
		>
			{children}
		</Component>
	);
});

Box.displayName = 'Box';

export default Box;
