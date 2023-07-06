import { forwardRef, ReactElement } from 'react';

import classNames from 'classnames';

import { useGetResponsiveValue } from '../../../common/hooks';
import { Space } from '../../../common/types';
import Box from '../Box';

import { SimpleGridColumn, SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef<SimpleGridRef, SimpleGridProps>(function SimpleGrid(props, ref): ReactElement {
	const { children, className = '', columns: cols, spacing: s = 2, ...rest } = props;

	const columns = useGetResponsiveValue<SimpleGridColumn>(cols);
	const spacing = useGetResponsiveValue<Space>(s);

	return (
		<Box
			{...rest}
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
