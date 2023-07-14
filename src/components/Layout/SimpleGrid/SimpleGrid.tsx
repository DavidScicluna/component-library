import { ElementType, forwardRef, ReactElement, useMemo } from 'react';

import classNames from 'classnames';

import classes from '../../../common/classes';
import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '../../../common/constants';
import { useGetResponsiveValue } from '../../../common/hooks';
import type { Space } from '../../../common/types/theme';
import { getResponsiveValue } from '../../../common/utils';
import Box from '../Box';

import type { SimpleGridColumn, SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends ElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, columns, spacing: s = __DEFAULT_SPACING__, ...rest } = props;

	const columnsClassName = useMemo<string>(() => {
		const cols = getResponsiveValue<SimpleGridColumn>(columns);
		switch (cols) {
			case 2:
				return 'grid-cols-2';
			case 3:
				return 'grid-cols-3';
			case 4:
				return 'grid-cols-4';
			case 5:
				return 'grid-cols-5';
			case 6:
				return 'grid-cols-6';
			case 7:
				return 'grid-cols-7';
			case 8:
				return 'grid-cols-8';
			case 9:
				return 'grid-cols-9';
			case 10:
				return 'grid-cols-10';
			case 11:
				return 'grid-cols-11';
			case 12:
				return 'grid-cols-12';
			default:
				return 'grid-cols-1';
		}
	}, [columns]);

	const spacing = useGetResponsiveValue<Space>(s);

	return (
		<Box
			{...(rest as SimpleGridProps<Element>)}
			ref={ref}
			className={classNames('grid', columnsClassName, classes.spacing.gap[spacing], {
				[className]: !!className
			})}
		>
			{children}
		</Box>
	);
});

export default SimpleGrid;
