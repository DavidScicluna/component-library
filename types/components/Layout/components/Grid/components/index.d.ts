/// <reference types="react" />
import type { GridItemProps, GridItemRef } from './GridItem';
import { GridItem } from './GridItem';
export declare const constants: {
    __DEFAULT_GRID_ITEM_ALIGN_SELF__: import("../../../../..").AlignSelfClass;
    __DEFAULT_GRID_ITEM_JUSTIFY_SELF__: import("../../../../..").JustifySelfClass;
    __DEFAULT_GRID_ITEM_Z_INDEX__: import("../../../../..").ZIndexClass;
};
export declare const keys: {
    __KEYS_GRID_ITEM_CLASS__: "ds-cl-grid-item";
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
};
export { GridItem };
export type { GridItemProps, GridItemRef };
//# sourceMappingURL=index.d.ts.map