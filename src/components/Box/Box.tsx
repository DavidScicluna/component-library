/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';

import { css } from '@emotion/react';
import classNames from 'classnames';
import { merge, omit, pick } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_ELEMENT, DEFAULT_POLYMORPHIC_SX } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useBoxStyles } from './common/hooks';
import { KEYS_BOX, KEYS_BOX_CLASS } from './common/keys';
import type { BoxProps, BoxRef } from './common/types';

const Box = forwardRef(function Box<Element extends PolymorphicElementType>(
	props: BoxProps<Element>,
	ref: BoxRef<Element>
): JSX.Element {
	const {
		children,
		as: Component = DEFAULT_POLYMORPHIC_ELEMENT as BoxProps<Element>['as'],
		className = DEFAULT_CLASSNAME,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const styles = useBoxStyles(pick({ ...rest }, KEYS_BOX));

	return (
		<Component
			{...omit({ ...rest }, KEYS_BOX)}
			ref={ref}
			className={classNames(KEYS_BOX_CLASS, { [className]: !!className })}
			css={css(merge(styles, sx))}
		>
			{children}
		</Component>
	);
});

// Box.displayName = 'Box';

export default Box;
