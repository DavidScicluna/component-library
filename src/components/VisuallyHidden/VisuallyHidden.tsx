import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import { useVisuallyHiddenStyles } from './common/hooks';
import type {
	VisuallyHiddenDefaultElement,
	VisuallyHiddenElement,
	VisuallyHiddenProps,
	VisuallyHiddenRef
} from './common/types';

const VisuallyHidden = forwardRef(function VisuallyHidden<
	Element extends VisuallyHiddenElement = VisuallyHiddenDefaultElement
>(props: VisuallyHiddenProps<Element>, ref: VisuallyHiddenRef<Element>): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, sx, ...rest } = props;

	const styles = useVisuallyHiddenStyles();

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-visually-hidden`, { [className]: !!className })}
			sx={merge(styles, sx)}
		>
			{children}
		</Box>
	);
});

export default VisuallyHidden;
