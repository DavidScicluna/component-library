import type { AspectRatioProps, AspectRatioRatio, AspectRatioRatios, AspectRatioRef } from './components/AspectRatio';
import { AspectRatio, constants as aspectRatioConstants, useGetAspectRatioClasses } from './components/AspectRatio';
import type { CenterProps, CenterRef } from './components/Center';
import { Center, useGetCenterClasses } from './components/Center';
import type { ContainerBreakpoint, ContainerBreakpoints, ContainerProps, ContainerRef } from './components/Container';
import { constants as containerConstants, Container, useGetContainerClasses } from './components/Container';
import type { GridItemProps, GridItemRef, GridProps, GridRef } from './components/Grid';
import {
	constants as gridConstants,
	Grid,
	GridItem,
	useGetGridClasses,
	useGetGridItemClasses,
	useGetGridStyles
} from './components/Grid';
import type { SimpleGridColumn, SimpleGridColumns, SimpleGridProps, SimpleGridRef } from './components/SimpleGrid';
import { SimpleGrid, useGetSimpleGridClasses } from './components/SimpleGrid';
import type { SpaceDimension, SpaceProps, SpaceRef } from './components/Space';
import { constants as spaceConstants, Space, useGetSpaceClasses } from './components/Space';
import type { HStackProps, HStackRef } from './components/Stacks/HStack';
import { HStack } from './components/Stacks/HStack';
import type { StackProps, StackRef } from './components/Stacks/Stack';
import { constants as stackConstants, Stack, useGetStackClasses } from './components/Stacks/Stack';
import type { VStackProps, VStackRef } from './components/Stacks/VStack';
import { VStack } from './components/Stacks/VStack';

// Constants
export const constants = {
	...aspectRatioConstants,
	...containerConstants,
	...gridConstants,
	...spaceConstants,
	...stackConstants
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
