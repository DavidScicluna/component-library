import { forwardRef } from 'react';

import { merge } from 'lodash-es';

import {
	__DEFAULT_BORDER_WIDTH__,
	__DEFAULT_CLASSNAME__,
	__DEFAULT_POLYMORPHIC_SX__,
	__DEFAULT_SPACING__
} from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { Center } from '@components/Layout';

import {
	__DEFAULT_DIVIDER_AS__,
	__DEFAULT_DIVIDER_ORIENTATION__,
	__DEFAULT_DIVIDER_PLACEMENT__,
	__DEFAULT_DIVIDER_VARIANT__
} from './common/constants';
import { useDividerClasses, useDividerResponsiveValues, useDividerStyles } from './common/hooks';
import { __KEYS_DIVIDER_CLASS__ } from './common/keys';
import type { DividerElement, DividerProps, DividerRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const Divider = forwardRef(function Divider<Element extends DividerElement>(
	props: DividerProps<Element>,
	ref: DividerRef<Element>
): JSX.Element {
	const {
		children,
		as = __DEFAULT_DIVIDER_AS__,
		className = __DEFAULT_CLASSNAME__,
		color,
		colorMode,
		orientation: orientationProp = __DEFAULT_DIVIDER_ORIENTATION__,
		placement: placementProp = __DEFAULT_DIVIDER_PLACEMENT__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		size: sizeProp = __DEFAULT_BORDER_WIDTH__,
		variant: variantProp = __DEFAULT_DIVIDER_VARIANT__,
		sx = __DEFAULT_POLYMORPHIC_SX__,
		...rest
	} = props;

	const { orientation, placement, spacing, size, variant } = useDividerResponsiveValues<Element>({
		orientation: orientationProp,
		placement: placementProp,
		spacing: spacingProp,
		size: sizeProp,
		variant: variantProp
	});

	const classes = useDividerClasses<Element>({ color, colorMode, orientation, placement, size, variant });
	const styles = useDividerStyles<Element>({
		color,
		hasChildren: orientation === 'horizontal' && !!children,
		orientation,
		placement,
		spacing,
		size
	});

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			as={as}
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

// Divider.displayName = 'Divider';

export default Divider;
