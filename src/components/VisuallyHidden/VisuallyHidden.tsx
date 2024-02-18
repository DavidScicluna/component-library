import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASSNAME__, __DEFAULT_POLYMORPHIC_SX__ } from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_VISUALLY_HIDDEN_AS__ } from './common/constants';
import { useVisuallyHiddenStyles } from './common/hooks';
import { __KEYS_VISUALLY_HIDDEN_CLASS__ } from './common/keys';
import type { VisuallyHiddenElement, VisuallyHiddenProps, VisuallyHiddenRef } from './common/types';

const VisuallyHidden = forwardRef(function VisuallyHidden<Element extends VisuallyHiddenElement>(
	props: VisuallyHiddenProps<Element>,
	ref: VisuallyHiddenRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_VISUALLY_HIDDEN_AS__,
		className = __DEFAULT_CLASSNAME__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const styles = useVisuallyHiddenStyles();

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			as={as}
			ref={ref}
			className={classNames(__KEYS_VISUALLY_HIDDEN_CLASS__, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

// VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
