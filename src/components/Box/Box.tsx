/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import { css } from '@emotion/react';
import classNames from 'classnames';
import { merge, omit, pick } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_ELEMENT__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useBoxStyles } from './common/hooks';
import { __KEYS_BOX__, __KEYS_BOX_CLASS__ } from './common/keys';
import type { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<Element extends PolymorphicElementType>(
	props: BoxProps<Element>,
	ref: BoxRef<Element>
): JSX.Element {
	const {
		children,
		as: Component = __DEFAULT_POLYMORPHIC_ELEMENT__ as BoxProps<Element>['as'],
		className = __DEFAULT_CLASSNAME__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const styles = useBoxStyles(pick({ ...rest }, __KEYS_BOX__));

	return (
		<Component
			{...omit({ ...rest }, __KEYS_BOX__)}
			ref={ref}
			className={classNames(__KEYS_BOX_CLASS__, { [className]: !!className })}
			css={css(merge(styles, sx))}
		>
			{children}
		</Component>
	);
});

// Box.displayName = 'Box';

export default Box;
