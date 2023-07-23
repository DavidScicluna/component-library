import { ElementType } from 'react';

import { ResponsiveValue } from '@common/types';
import {
	AlignContent,
	AlignItems,
	GridAuto,
	GridAutoFlow,
	GridTemplateColumns,
	GridTemplateRows,
	JustifyContent,
	JustifyItems
} from '@common/types/classes';
import { Space } from '@common/types/theme';

import { BoxProps, BoxRef } from '@components/Layout/Box/common/types';

type GridOtherProps = {
	alignContent?: ResponsiveValue<AlignContent>;
	alignItems?: ResponsiveValue<AlignItems>;
	autoColumns?: ResponsiveValue<GridAuto>;
	autoFlow?: ResponsiveValue<GridAutoFlow>;
	autoRows?: ResponsiveValue<GridAuto>;
	columnSpacing?: ResponsiveValue<Space>;
	justifyContent?: ResponsiveValue<JustifyContent>;
	justifyItems?: ResponsiveValue<JustifyItems>;
	rowSpacing?: ResponsiveValue<Space>;
	templateColumns?: ResponsiveValue<GridTemplateColumns>;
	templateRows?: ResponsiveValue<GridTemplateRows>;
	spacing?: ResponsiveValue<Space>;
};

export type GridProps<Element extends ElementType> = BoxProps<Element, GridOtherProps>;

export type GridRef<Element extends ElementType> = BoxRef<Element>;
