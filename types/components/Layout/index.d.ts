/// <reference types="react" />
import type { AspectRatioProps, AspectRatioRef } from './components/AspectRatio';
import { AspectRatio } from './components/AspectRatio';
import type { CenterProps, CenterRef } from './components/Center';
import { Center } from './components/Center';
import type { ContainerBreakpoint, ContainerBreakpoints, ContainerProps, ContainerRef } from './components/Container';
import { Container } from './components/Container';
import type { GridItemProps, GridItemRef, GridProps, GridRef } from './components/Grid';
import { Grid, GridItem } from './components/Grid';
import type { SimpleGridColumn, SimpleGridColumns, SimpleGridProps, SimpleGridRef } from './components/SimpleGrid';
import { SimpleGrid } from './components/SimpleGrid';
import type { SpaceProps, SpaceRef } from './components/Space';
import { Space } from './components/Space';
import type { HStackProps, HStackRef } from './components/Stacks/HStack';
import { HStack } from './components/Stacks/HStack';
import type { StackProps, StackRef } from './components/Stacks/Stack';
import { Stack } from './components/Stacks/Stack';
import type { VStackProps, VStackRef } from './components/Stacks/VStack';
import { VStack } from './components/Stacks/VStack';
export declare const constants: {
    __DEFAULT_STACK_ALIGN_ITEMS__: import("../..").AlignItemsClass;
    __DEFAULT_STACK_DIRECTION__: import("../..").FlexDirectionClass;
    __DEFAULT_STACK_JUSTIFY_CONTENT__: import("../..").JustifyContentClass;
    __DEFAULT_STACK_WRAP__: import("../..").FlexWrapClass;
    __DEFAULT_SPACE_HEIGHT__: import("../..").ThemeSpacing;
    __DEFAULT_SPACE_WIDTH__: import("../..").ThemeSpacing;
    __DEFAULT_GRID_ITEM_ALIGN_SELF__: import("../..").AlignSelfClass;
    __DEFAULT_GRID_ITEM_JUSTIFY_SELF__: import("../..").JustifySelfClass;
    __DEFAULT_GRID_ITEM_Z_INDEX__: import("../..").ZIndexClass;
    __DEFAULT_GRID_ALIGN_CONTENT__: import("../..").AlignContentClass;
    __DEFAULT_GRID_ALIGN_ITEMS__: import("../..").AlignItemsClass;
    __DEFAULT_GRID_JUSTIFY_CONTENT__: import("../..").JustifyContentClass;
    __DEFAULT_GRID_JUSTIFY_ITEMS__: import("../..").JustifyItemsClass;
    __DEFAULT_GRID_TEMPLATE_COLUMNS__: import("../..").GridTemplateColumnsClass;
    __DEFAULT_GRID_TEMPLATE_ROWS__: import("../..").GridTemplateRowsClass;
    __DEFAULT_CONTAINER_BREAKPOINT__: ContainerBreakpoint;
    __DEFAULT_CONTAINER_IS_CONTENT_CENTERED__: true;
    __DEFAULT_CONTAINER_IS_FLUID__: false;
    __DEFAULT_ASPECT_RATIO_RATIO__: import("../..").ThemeAspectRatio;
};
export declare const keys: {
    __KEYS_STACK_CLASS__: "ds-cl-stack";
    __KEYS_SPACE_CLASS__: "ds-cl-space";
    __KEYS_GRID_ITEM_CLASS__: "ds-cl-grid-item";
    __KEYS_GRID_CLASS__: "ds-cl-grid";
    __KEYS_CONTAINER_CLASS__: "ds-cl-container";
    __KEYS_ASPECT_RATIO_CLASS__: "ds-cl-aspect-ratio";
};
export declare const hooks: {
    useStackClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        direction: StackProps<Element_1>["direction"];
        spacing: StackProps<Element_1>["spacing"];
        wrap: StackProps<Element_1>["wrap"];
        alignItems: StackProps<Element_1>["alignItems"];
        justifyContent: StackProps<Element_1>["justifyContent"];
    }) => string;
    useSpaceClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        height: SpaceProps<Element_2>["height"];
        width: SpaceProps<Element_2>["width"];
    }) => string;
    useGridItemClasses: <Element_3 extends import("react").ElementType = "div">(props: {
        rowSpan: GridItemProps<Element_3>["rowSpan"];
        alignSelf: GridItemProps<Element_3>["alignSelf"];
        columnSpan: GridItemProps<Element_3>["columnSpan"];
        justifySelf: GridItemProps<Element_3>["justifySelf"];
        zIndex: GridItemProps<Element_3>["zIndex"];
        columnStart: GridItemProps<Element_3>["columnStart"];
        columnEnd: GridItemProps<Element_3>["columnEnd"];
        rowStart: GridItemProps<Element_3>["rowStart"];
        rowEnd: GridItemProps<Element_3>["rowEnd"];
    }) => string;
    useGridClasses: <Element_4 extends import("react").ElementType = "div">(props: {
        spacing: GridProps<Element_4>["spacing"];
        alignContent: GridProps<Element_4>["alignContent"];
        alignItems: GridProps<Element_4>["alignItems"];
        justifyContent: GridProps<Element_4>["justifyContent"];
        justifyItems: GridProps<Element_4>["justifyItems"];
        autoColumns: GridProps<Element_4>["autoColumns"];
        autoFlow: GridProps<Element_4>["autoFlow"];
        autoRows: GridProps<Element_4>["autoRows"];
        columnSpacing: GridProps<Element_4>["columnSpacing"];
        rowSpacing: GridProps<Element_4>["rowSpacing"];
        templateColumns: GridProps<Element_4>["templateColumns"];
        templateRows: GridProps<Element_4>["templateRows"];
    }) => string;
    useGridStyles: <Element_5 extends import("react").ElementType = "div">(props: {
        templateColumns: GridProps<Element_5>["templateColumns"];
        templateRows: GridProps<Element_5>["templateRows"];
    }) => import("@emotion/serialize").CSSObject;
    useContainerClasses: <Element_6 extends import("react").ElementType = "div">(props: {
        breakpoint: ContainerProps<Element_6>["breakpoint"];
        isContentCentered: ContainerProps<Element_6>["isContentCentered"];
        isFluid: ContainerProps<Element_6>["isFluid"];
    }) => string;
    useAspectRatioClasses: <Element_7 extends import("react").ElementType = "div">(props: {
        ratio: AspectRatioProps<Element_7>["ratio"];
    }) => string;
};
export { AspectRatio, Center, Container, Grid, GridItem, HStack, SimpleGrid, Space, Stack, VStack };
export type { AspectRatioProps, AspectRatioRef, CenterProps, CenterRef, ContainerBreakpoint, ContainerBreakpoints, ContainerProps, ContainerRef, GridItemProps, GridItemRef, GridProps, GridRef, HStackProps, HStackRef, SimpleGridColumn, SimpleGridColumns, SimpleGridProps, SimpleGridRef, SpaceProps, SpaceRef, StackProps, StackRef, VStackProps, VStackRef };
//# sourceMappingURL=index.d.ts.map