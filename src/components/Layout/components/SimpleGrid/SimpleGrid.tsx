import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { Box } from '@components/Box';

import { useSimpleGridClasses, useSimpleGridResponsiveValues } from './common/hooks';
import { KEYS_SIMPLE_GRID_CLASS } from './common/keys';
import type { SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends PolymorphicElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): JSX.Element {
	const { children, className = DEFAULT_CLASSNAME, columns: columnsProp, spacing: spacingProp, ...rest } = props;

	const { columns, spacing } = useSimpleGridResponsiveValues({ columns: columnsProp, spacing: spacingProp });

	const classes = useSimpleGridClasses<Element>({ columns, spacing });

	return (
		<Box {...rest} ref={ref} className={classNames(KEYS_SIMPLE_GRID_CLASS, classes, { [className]: !!className })}>
			{children}
		</Box>
	);
});

// SimpleGrid.displayName = 'SimpleGrid';

export default SimpleGrid;
