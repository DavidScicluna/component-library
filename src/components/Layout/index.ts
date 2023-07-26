import AspectRatio from './components/AspectRatio';
import { __DEFAULT_ASPECT_RATIO_RATIO__ } from './components/AspectRatio/common/constants';
import {
	AspectRatioProps,
	AspectRatioRatio,
	AspectRatioRatios,
	AspectRatioRef
} from './components/AspectRatio/common/types';
import Center from './components/Center';
import { CenterProps, CenterRef } from './components/Center/common/types';
import Container from './components/Container';
import {
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__,
	__DEFAULT_CONTAINER_SIZE__
} from './components/Container/common/constants';
import { ContainerProps, ContainerRef, ContainerSize, ContainerSizes } from './components/Container/common/types';
import Grid from './components/Grid';
import {
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__
} from './components/Grid/common/constants';
import { GridProps, GridRef } from './components/Grid/common/types';
import GridItem from './components/Grid/components/GridItem';
import {
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_ZINDEX__
} from './components/Grid/components/GridItem/common/constants';
import { GridItemProps, GridItemRef } from './components/Grid/components/GridItem/common/types';
import SimpleGrid from './components/SimpleGrid';
import {
	SimpleGridColumn,
	SimpleGridColumns,
	SimpleGridProps,
	SimpleGridRef
} from './components/SimpleGrid/common/types';
import Space from './components/Space';
import { __DEFAULT_SPACE_HEIGHT__, __DEFAULT_SPACE_WIDTH__ } from './components/Space/common/constants';
import { SpaceDimension, SpaceProps, SpaceRef } from './components/Space/common/types';
import HStack from './components/Stacks/HStack';
import { HStackProps, HStackRef } from './components/Stacks/HStack/common/types';
import Stack from './components/Stacks/Stack';
import {
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
} from './components/Stacks/Stack/common/constants';
import { StackProps, StackRef } from './components/Stacks/Stack/common/types';
import VStack from './components/Stacks/VStack';
import { VStackProps, VStackRef } from './components/Stacks/VStack/common/types';

export const defaults = {
	__DEFAULT_ASPECT_RATIO_RATIO__,
	__DEFAULT_CONTAINER_IS_CONTENT_CENTERED__,
	__DEFAULT_CONTAINER_IS_FLUID__,
	__DEFAULT_CONTAINER_SIZE__,
	__DEFAULT_GRID_ALIGN_CONTENT__,
	__DEFAULT_GRID_ALIGN_ITEMS__,
	__DEFAULT_GRID_JUSTIFY_CONTENT__,
	__DEFAULT_GRID_JUSTIFY_ITEMS__,
	__DEFAULT_GRID_TEMPLATE_COLUMNS__,
	__DEFAULT_GRID_TEMPLATE_ROWS__,
	__DEFAULT_GRID_ITEM_ALIGN_SELF__,
	__DEFAULT_GRID_ITEM_JUSTIFY_SELF__,
	__DEFAULT_GRID_ITEM_ZINDEX__,
	__DEFAULT_SPACE_HEIGHT__,
	__DEFAULT_SPACE_WIDTH__,
	__DEFAULT_STACK_ALIGN_ITEMS__,
	__DEFAULT_STACK_DIRECTION__,
	__DEFAULT_STACK_JUSTIFY_CONTENT__,
	__DEFAULT_STACK_WRAP__
};

// Components
export { AspectRatio, Center, Container, Grid, GridItem, HStack, SimpleGrid, Space, Stack, VStack };

// Layout Components Types
export type {
	AspectRatioProps,
	AspectRatioRatio,
	AspectRatioRatios,
	AspectRatioRef,
	CenterProps,
	CenterRef,
	ContainerProps,
	ContainerRef,
	ContainerSize,
	ContainerSizes,
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
