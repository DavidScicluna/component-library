import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME, DEFAULT_SPACING } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { DEFAULT_SIMPLE_GRID_COLUMNS } from './common/constants';
import { useSimpleGridClasses, useSimpleGridResponsiveValues } from './common/hooks';
import { KEYS_SIMPLE_GRID_CLASS } from './common/keys';
import type { SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends PolymorphicElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): JSX.Element {
	const {
		children,
		className = DEFAULT_CLASSNAME,
		columns: columnsProp = DEFAULT_SIMPLE_GRID_COLUMNS,
		spacing: spacingProp = DEFAULT_SPACING,
		...rest
	} = props;

	const { columns, spacing } = useSimpleGridResponsiveValues({ columns: columnsProp, spacing: spacingProp });

	const classes = useSimpleGridClasses<Element>({ columns, spacing });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(KEYS_SIMPLE_GRID_CLASS, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// SimpleGrid.displayName = 'SimpleGrid';

export default SimpleGrid;
