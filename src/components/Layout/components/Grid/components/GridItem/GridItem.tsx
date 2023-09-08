import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { Box } from '@components/Box';

import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from './common/constants';
import { useGridItemClasses } from './common/hooks';
import { __KEYS_GRID_ITEM_CLASS__ } from './common/keys';
import type { GridItemProps, GridItemRef } from './common/types';

const GridItem = forwardRef(function Grid<Element extends ElementType>(
	props: GridItemProps<Element>,
	ref: GridItemRef<Element>
): ReactElement {
	const {
		children,
		className = __DEFAULT_CLASSNAME__,
		alignSelf = __DEFAULT_GRID_ITEM_ALIGN_SELF__,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf = __DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex = __DEFAULT_GRID_ITEM_Z_INDEX__,
		...rest
	} = props;

	const classes = useGridItemClasses<Element>({
		alignSelf,
		columnSpan,
		columnStart,
		columnEnd,
		justifySelf,
		rowSpan,
		rowStart,
		rowEnd,
		zIndex
	});

	return (
		<Box<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_GRID_ITEM_CLASS__, classes, { [className]: !!className })}
		>
			{children}
		</Box>
	);
});

export default GridItem;
