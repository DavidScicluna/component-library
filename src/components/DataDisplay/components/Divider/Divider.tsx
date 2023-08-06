import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import {
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_CLASS_PREFIX__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_SPACING__
} from '@common/constants';

import Box from '@components/Box';
import { Center } from '@components/Layout';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './common/constants';
import { useGetDividerClasses, useGetDividerStyles } from './common/hooks';
import type { DividerDefaultElement, DividerElement, DividerProps, DividerRef } from './common/types';

const Divider = forwardRef(function Divider<Element extends DividerElement = DividerDefaultElement>(
	props: DividerProps<Element>,
	ref: DividerRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		orientation = __DEFAULT_DIVIDER_ORIENTATION__,
		placement = __DEFAULT_DIVIDER_PLACEMENT__,
		size = __DEFAULT_BORDER_WIDTH__,
		spacing = __DEFAULT_SPACING__,
		variant = __DEFAULT_DIVIDER_VARIANT__,
		sx,
		...rest
	} = props;

	const classes = useGetDividerClasses({ color, colorMode, orientation, placement, size, variant });
	const styles = useGetDividerStyles({ orientation, placement, size, spacing });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-divider`, classes, { [className]: !!className })}
			w={orientation === 'horizontal' ? '100%' : `${size}px`}
			h={orientation === 'vertical' ? '100%' : `${size}px`}
			sx={merge(styles, sx)}
		>
			{orientation === 'horizontal' && children ? <Center>{children}</Center> : null}
		</Box>
	);
});

export default Divider;
