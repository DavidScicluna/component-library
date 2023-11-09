import type { ElementType } from 'react';

import classes from '@common/classes';
import { __DEFAULT_SPACING__ } from '@common/constants';
import { useGetClass } from '@common/hooks';
import type { ClassName, PolymorphicDefaultElement, ThemeSpacing } from '@common/types';

import type { SimpleGridColumn, SimpleGridProps } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

type UseSimpleGridClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	SimpleGridProps<Element>,
	'columns' | 'spacing'
>;
type UseSimpleGridClassesReturn = ClassName;

const useSimpleGridClasses = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseSimpleGridClassesProps<Element>
): UseSimpleGridClassesReturn => {
	const { columns, spacing = __DEFAULT_SPACING__ } = props;

	const columnsClassName = useGetClass<SimpleGridColumn>(columns, ['grid', 'template_columns']);

	const spacingClassName = useGetClass<ThemeSpacing>(spacing, ['spacing', 'gap']);

	return classNames(classes.layout.display.grid, columnsClassName, spacingClassName);
};

export default useSimpleGridClasses;
