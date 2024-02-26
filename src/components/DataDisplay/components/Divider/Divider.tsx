import { forwardRef } from 'react';

import classNames from 'classnames';
import { merge } from 'lodash-es';

import { DEFAULT_BORDER_WIDTH, DEFAULT_CLASSNAME, DEFAULT_POLYMORPHIC_SX, DEFAULT_SPACING } from '@common/constants';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';
import { Center } from '@components/Layout';

import {
	DEFAULT_DIVIDER_AS,
	DEFAULT_DIVIDER_ORIENTATION,
	DEFAULT_DIVIDER_PLACEMENT,
	DEFAULT_DIVIDER_VARIANT
} from './common/constants';
import { useDividerClasses, useDividerResponsiveValues, useDividerStyles } from './common/hooks';
import { KEYS_DIVIDER_CLASS } from './common/keys';
import type { DividerElement, DividerProps, DividerRef } from './common/types';

const Divider = forwardRef(function Divider<Element extends DividerElement>(
	props: DividerProps<Element>,
	ref: DividerRef<Element>
): JSX.Element {
	const {
		children,
		as = DEFAULT_DIVIDER_AS,
		className = DEFAULT_CLASSNAME,
		color,
		colorMode,
		orientation: orientationProp = DEFAULT_DIVIDER_ORIENTATION,
		placement: placementProp = DEFAULT_DIVIDER_PLACEMENT,
		spacing: spacingProp = DEFAULT_SPACING,
		size: sizeProp = DEFAULT_BORDER_WIDTH,
		variant: variantProp = DEFAULT_DIVIDER_VARIANT,
		sx = DEFAULT_POLYMORPHIC_SX,
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
			className={classNames(KEYS_DIVIDER_CLASS, classes, { [className]: !!className })}
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
