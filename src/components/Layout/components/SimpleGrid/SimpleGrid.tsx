import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import type { BoxProps } from '@components/Box';
import { Box } from '@components/Box';

import { __DEFAULT_SIMPLE_GRID_COLUMNS__ } from './common/constants';
import { useSimpleGridClasses, useSimpleGridResponsiveValues } from './common/hooks';
import { __KEYS_SIMPLE_GRID_CLASS__ } from './common/keys';
import type { SimpleGridProps, SimpleGridRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const SimpleGrid = forwardRef(function SimpleGrid<Element extends PolymorphicElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): JSX.Element {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		columns: columnsProp = __DEFAULT_SIMPLE_GRID_COLUMNS__,
		spacing: spacingProp = __DEFAULT_SPACING__,
		...rest
	} = props;

	const { columns, spacing } = useSimpleGridResponsiveValues({ columns: columnsProp, spacing: spacingProp });

	const classes = useSimpleGridClasses<Element>({ columns, spacing });

	return (
		<Box
			{...(rest as BoxProps<Element>)}
			ref={ref}
			className={classNames(__KEYS_SIMPLE_GRID_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

// SimpleGrid.displayName = 'SimpleGrid';

export default SimpleGrid;
