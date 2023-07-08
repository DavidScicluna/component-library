import { ElementType, forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import { Space } from '../../../common/types';
import Box from '../Box';

import { SimpleGridColumn, SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends ElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): ReactElement {
	const { children, className = '', columns: cols, spacing: s = 2, ...rest } = props;

	const columns = useGetResponsiveValue<SimpleGridColumn>(cols);
	const spacing = useGetResponsiveValue<Space>(s);

	return (
		<Box
			{...(rest as SimpleGridProps<Element>)}
			ref={ref}
			className={classNames('grid', `grid-cols-${columns}`, `gap-${spacing}`, {
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default SimpleGrid;
