import type { ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import {
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_POLYMORPHIC_SX__,
	__DEFAULT_SPACING__
} from '@common/constants';

import { Box } from '@components/Box';
import { Center } from '@components/Layout';

import {
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './common/constants';
import { useDividerClasses, useDividerStyles } from './common/hooks';
import { __KEYS_DIVIDER_CLASS__ } from './common/keys';
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
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const classes = useDividerClasses<Element>({ color, colorMode, orientation, placement, size, variant });
	const styles = useDividerStyles<Element>({
		color,
		hasChildren: orientation === 'horizontal' && !!children,
		orientation,
		placement,
		size,
		spacing
	});

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_DIVIDER_CLASS__, classes, { [className]: !!className })}
			w={orientation === 'horizontal' ? '100%' : `${size}px`}
			h={orientation === 'vertical' ? '100%' : `${size}px`}
			sx={merge(styles, sx)}
		>
			{orientation === 'horizontal' && children ? <Center>{children}</Center> : null}
		</Box>
	);
});

Divider.displayName = 'Divider';

export default Divider;
