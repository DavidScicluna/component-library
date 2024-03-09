import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX } from '@common/constants';

import { Box } from '@components/Box';

import { DEFAULT_VISUALLY_HIDDEN_AS } from './common/constants';
import { useVisuallyHiddenStyles } from './common/hooks';
import { KEYS_VISUALLY_HIDDEN_CLASS } from './common/keys';
import type { VisuallyHiddenElement, VisuallyHiddenProps, VisuallyHiddenRef } from './common/types';

const VisuallyHidden = forwardRef(function VisuallyHidden<Element extends VisuallyHiddenElement>(
	props: VisuallyHiddenProps<Element>,
	ref: VisuallyHiddenRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_VISUALLY_HIDDEN_AS,
		className = DEFAULT_CLASSNAME,
		sx = DEFAULT_POLYMORPHIC_SX,
		...rest
	} = props;

	const styles = useVisuallyHiddenStyles();

	return (
		<Box
			{...rest}
			as={as}
			ref={ref}
			className={classNames(KEYS_VISUALLY_HIDDEN_CLASS, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

// VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
