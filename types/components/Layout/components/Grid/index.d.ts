/// <reference types="react" />
import type { GridProps, GridRef, GridTemplateColumns, GridTemplateRows } from './common/types';
import type { GridItemProps, GridItemRef } from './components';
import { GridItem } from './components';
import Grid from './Grid';
export declare const constants: {
    __DEFAULT_GRID_ITEM_ALIGN_SELF__: import("../../../..").AlignSelfClass;
    __DEFAULT_GRID_ITEM_JUSTIFY_SELF__: import("../../../..").JustifySelfClass;
    __DEFAULT_GRID_ITEM_Z_INDEX__: import("../../../..").ZIndexClass;
    __DEFAULT_GRID_ALIGN_CONTENT__: import("../../../..").AlignContentClass;
    __DEFAULT_GRID_ALIGN_ITEMS__: import("../../../..").AlignItemsClass;
    __DEFAULT_GRID_JUSTIFY_CONTENT__: import("../../../..").JustifyContentClass;
    __DEFAULT_GRID_JUSTIFY_ITEMS__: import("../../../..").JustifyItemsClass;
    __DEFAULT_GRID_TEMPLATE_COLUMNS__: import("../../../..").GridTemplateColumnsClass;
    __DEFAULT_GRID_TEMPLATE_ROWS__: import("../../../..").GridTemplateRowsClass;
};
export declare const keys: {
    __KEYS_GRID_ITEM_CLASS__: "ds-cl-grid-item";
    __KEYS_GRID_CLASS__: "ds-cl-grid";
};
export declare const hooks: {
    useGridItemClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        rowSpan: GridItemProps<Element_1>["rowSpan"];
        alignSelf: GridItemProps<Element_1>["alignSelf"];
        columnSpan: GridItemProps<Element_1>["columnSpan"];
        justifySelf: GridItemProps<Element_1>["justifySelf"];
        zIndex: GridItemProps<Element_1>["zIndex"];
        columnStart: GridItemProps<Element_1>["columnStart"];
        columnEnd: GridItemProps<Element_1>["columnEnd"];
        rowStart: GridItemProps<Element_1>["rowStart"];
        rowEnd: GridItemProps<Element_1>["rowEnd"];
    }) => string;
    useGridClasses: <Element_2 extends import("react").ElementType = "div">(props: {
        spacing: GridProps<Element_2>["spacing"];
        alignContent: GridProps<Element_2>["alignContent"];
        alignItems: GridProps<Element_2>["alignItems"];
        justifyContent: GridProps<Element_2>["justifyContent"];
        justifyItems: GridProps<Element_2>["justifyItems"];
        autoColumns: GridProps<Element_2>["autoColumns"];
        autoFlow: GridProps<Element_2>["autoFlow"];
        autoRows: GridProps<Element_2>["autoRows"];
        columnSpacing: GridProps<Element_2>["columnSpacing"];
        rowSpacing: GridProps<Element_2>["rowSpacing"];
        templateColumns: GridProps<Element_2>["templateColumns"];
        templateRows: GridProps<Element_2>["templateRows"];
    }) => string;
    useGridStyles: <Element_3 extends import("react").ElementType = "div">(props: {
        templateColumns: GridProps<Element_3>["templateColumns"];
        templateRows: GridProps<Element_3>["templateRows"];
    }) => import("@emotion/serialize").CSSObject;
};
export { Grid, GridItem };
export type { GridItemProps, GridItemRef, GridProps, GridRef, GridTemplateColumns, GridTemplateRows };
//# sourceMappingURL=index.d.ts.map