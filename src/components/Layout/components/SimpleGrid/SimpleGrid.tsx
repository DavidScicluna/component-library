import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASS_PREFIX__, __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';

import Box from '@components/Box';

import { useGetSimpleGridClasses } from './common/hooks';
import type { SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends ElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, columns, spacing = __DEFAULT_SPACING__, ...rest } = props;

	const classes = useGetSimpleGridClasses<Element>({ columns, spacing });

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(`${__DEFAULT_CLASS_PREFIX__}-simple-grid`, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default SimpleGrid;
