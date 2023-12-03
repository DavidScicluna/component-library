/// <reference types="react" />
import type { DummyTabProps, DummyTabRef, DummyTabRenderProps } from './DummyTab';
import { DummyTab } from './DummyTab';
import type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef } from './DummyTabIcon';
import { DummyTabIcon } from './DummyTabIcon';
import type { DummyTabListProps, DummyTabListRef, DummyTabListRenderProps } from './DummyTabList';
import { DummyTabList } from './DummyTabList';
import type { DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef } from './DummyTabPanels';
import { DummyTabPanels } from './DummyTabPanels';
import type { DummyTabSkeletonProps, DummyTabSkeletonRef } from './DummyTabSkeleton';
import { DummyTabSkeleton } from './DummyTabSkeleton';
export declare const constants: {
    __DEFAULT_DUMMY_TAB_BORDER_WIDTH__: import("../../../../..").ThemeBorderWidth;
    __DEFAULT_DUMMY_TAB_IS_COMPACT__: false;
    __DEFAULT_DUMMY_TAB_IS_UPPERCASE__: false;
};
export declare const keys: {
    __KEY_DUMMY_TAB_SKELETON_CLASS__: "ds-cl-dummy-tabs-skeleton";
    __KEYS_DUMMY_TABS_TAB_PANELS_CLASS__: "ds-cl-dummy-tabs-tab-panels";
    __KEYS_DUMMY_TABS_TAB_LIST_CLASS__: "ds-cl-dummy-tabs-tab-list";
    __KEYS_DUMMY_TAB_ICON_CLASS__: "ds-cl-dummy-tabs-tab-icon";
    __KEYS_DUMMY_TAB_CLASS__: "ds-cl-dummy-tabs-tab";
};
export declare const hooks: {
    useDummyTabClasses: <Element_1 extends import("react").ElementType = "div">(props: Pick<DummyTabProps<Element_1>, "color" | "colorMode" | "isCompact" | "isUppercase"> & {
        isSelected: boolean;
    }) => {
        label: string;
        tab: string;
        topDivider: string;
        bottomDivider: string;
    };
    useDummyTabSizeConfig: <Element_2 extends import("react").ElementType = "div">(props: {
        isCompact: DummyTabProps<Element_2>["isCompact"];
    }) => {
        fontSize: import("../../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../../..").ThemeSpacing>;
        spacing: import("../../../../..").ThemeSpacing;
    };
};
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabSkeleton };
export type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef, DummyTabListProps, DummyTabListRef, DummyTabListRenderProps, DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef, DummyTabProps, DummyTabRef, DummyTabRenderProps, DummyTabSkeletonProps, DummyTabSkeletonRef };
//# sourceMappingURL=index.d.ts.map