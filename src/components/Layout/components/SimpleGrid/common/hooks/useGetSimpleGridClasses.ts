import type { ElementType } from 'react';
import { useMemo } from 'react';

import classNames from 'classnames';

import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { Space } from '@common/types/theme';
import { getResponsiveValue } from '@common/utils';

import type { SimpleGridColumn, SimpleGridProps } from '../types';

type UseGetSimpleGridClassesProps<Element extends ElementType> = Pick<SimpleGridProps<Element>, 'columns' | 'spacing'>;
type UseGetSimpleGridClassesReturn = string;

const useGetSimpleGridClasses = <Element extends ElementType>(
	props: UseGetSimpleGridClassesProps<Element>
): UseGetSimpleGridClassesReturn => {
	const { columns, spacing = __DEFAULT_SPACING__ } = props;

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

	return classNames('grid', columnsClassName, spacingClassName);
};

export default useGetSimpleGridClasses;
