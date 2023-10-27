import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import type { PolymorphicDefaultElement } from '@common/types';

import { Box } from '@components/Box';

import { useSimpleGridClasses } from './common/hooks';
import { __KEYS_SIMPLE_GRID_CLASS__ } from './common/keys';
import type { SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends ElementType = PolymorphicDefaultElement>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, columns, spacing = __DEFAULT_SPACING__, ...rest } = props;

	const classes = useSimpleGridClasses<Element>({ columns, spacing });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_SIMPLE_GRID_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

SimpleGrid.displayName = 'SimpleGrid';

export default SimpleGrid;
