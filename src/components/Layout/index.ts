import AspectRatio from './components/AspectRatio';
import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './components/AspectRatio/common/constants';
import { useGetAspectRatioClasses } from './components/AspectRatio/common/hooks';
import type {
	AspectRatioProps,
	AspectRatioRatio,
	AspectRatioRatios,
	AspectRatioRef
} from './components/AspectRatio/common/types';
import Center from './components/Center';
import { useGetCenterClasses } from './components/Center/common/hooks';
import type { CenterProps, CenterRef } from './components/Center/common/types';
import Container from './components/Container';
import {
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__
} from './components/Container/common/constants';
import { useGetContainerClasses } from './components/Container/common/hooks';
import type {
	ContainerBreakpoint,
	ContainerBreakpoints,
	ContainerProps,
	ContainerRef
} from './components/Container/common/types';
import Grid from './components/Grid';
import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './components/Grid/common/constants';
import { useGetGridClasses, useGetGridStyles } from './components/Grid/common/hooks';
import type { GridProps, GridRef } from './components/Grid/common/types';
import GridItem from './components/Grid/components/GridItem';
import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__
} from './components/Grid/components/GridItem/common/constants';
import { useGetGridItemClasses } from './components/Grid/components/GridItem/common/hooks';
import type { GridItemProps, GridItemRef } from './components/Grid/components/GridItem/common/types';
import SimpleGrid from './components/SimpleGrid';
import { useGetSimpleGridClasses } from './components/SimpleGrid/common/hooks';
import type {
	SimpleGridColumn,
	SimpleGridColumns,
	SimpleGridProps,
	SimpleGridRef
} from './components/SimpleGrid/common/types';
import Space from './components/Space';
import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './components/Space/common/constants';
import { useGetSpaceClasses } from './components/Space/common/hooks';
import type { SpaceDimension, SpaceProps, SpaceRef } from './components/Space/common/types';
import HStack from './components/Stacks/HStack';
import type { HStackProps, HStackRef } from './components/Stacks/HStack/common/types';
import Stack from './components/Stacks/Stack';
import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './components/Stacks/Stack/common/constants';
import { useGetStackClasses } from './components/Stacks/Stack/common/hooks';
import type { StackProps, StackRef } from './components/Stacks/Stack/common/types';
import VStack from './components/Stacks/VStack';
import type { VStackProps, VStackRef } from './components/Stacks/VStack/common/types';

// Constants
export const defaults = {
	__DEFAULT_ASPECT_RATIO_RATIO__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__,
	__DEFAULT_CONTAINER_BREAKPOINT__,
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__,
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_Z_INDEX__,
	__DEFAULT_SPACE_HEIGHT__,
	__DEFAULT_SPACE_WIDTH__,
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
};

// Hooks
export {
	useGetAspectRatioClasses,
	useGetCenterClasses,
	useGetContainerClasses,
	useGetGridClasses,
	useGetGridItemClasses,
	useGetGridStyles,
	useGetSimpleGridClasses,
	useGetSpaceClasses,
	useGetStackClasses
};

// Components
export { AspectRatio, Center, Container, Grid, GridItem, HStack, SimpleGrid, Space, Stack, VStack };

// Components Types
export type {
	AspectRatioProps,
	AspectRatioRatio,
	AspectRatioRatios,
	AspectRatioRef,
	CenterProps,
	CenterRef,
	ContainerBreakpoint,
	ContainerBreakpoints,
	ContainerProps,
	ContainerRef,
	GridItemProps,
	GridItemRef,
	GridProps,
	GridRef,
	HStackProps,
	HStackRef,
	SimpleGridColumn,
	SimpleGridColumns,
	SimpleGridProps,
	SimpleGridRef,
	SpaceDimension,
	SpaceProps,
	SpaceRef,
	StackProps,
	StackRef,
	VStackProps,
	VStackRef
};
