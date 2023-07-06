import { forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import { Space } from '../../../common/types';
import { checkResponsiveValue, getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import { SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef<SimpleGridRef, SimpleGridProps>(function SimpleGrid(props, ref): ReactElement {
	const { children, className = '', columns, spacing = 2, ...rest } = props;

	const columnsClassName = useMemo(() => {
		const cols =
			checkResponsiveValue<Space>(columns) !== 'default'
				? getResponsiveValue<Space>(columns)
				: (columns as Space);
		return `grid-cols-${cols}`;
	}, [columns]);
	const spacingClassName = useMemo(() => {
		const s =
			checkResponsiveValue<Space>(spacing) !== 'default'
				? getResponsiveValue<Space>(spacing)
				: (spacing as Space);
		return `gap-${s}`;
	}, [spacing]);

	return (
		<Box
			{...rest}
			ref={ref}
			className={classNames('grid', columnsClassName, spacingClassName, {
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default SimpleGrid;
