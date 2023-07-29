import type { ElementType, ReactElement} from 'react';
import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__, __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { Space } from '@common/types/theme';
import { getResponsiveValue } from '@common/utils';

import Box from '@components/Box';

import type { SimpleGridColumn, SimpleGridProps, SimpleGridRef } from './common/types';

const SimpleGrid = forwardRef(function SimpleGrid<Element extends ElementType>(
	props: SimpleGridProps<Element>,
	ref: SimpleGridRef<Element>
): ReactElement {
	const { children, className = __DEFAULT_CLASSNAME__, columns, spacing = __DEFAULT_SPACING__, ...rest } = props;

	// TODO: Move to classes & replace with useGetClass
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

	const spacingClassName = useGetClass<Space>(spacing, ['spacing', 'gap']);

	return (
		<Box<Element>
			{...(rest as SimpleGridProps<Element>)}
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
