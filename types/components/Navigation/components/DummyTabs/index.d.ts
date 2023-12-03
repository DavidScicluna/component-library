/// <reference types="react" />
import type { DummyTabsAlign, DummyTabsContext, DummyTabsOrientation, DummyTabsProps, DummyTabsRef, DummyTabsSize } from './common/types';
import type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef, DummyTabListProps, DummyTabListRef, DummyTabListRenderProps, DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef, DummyTabProps, DummyTabRef, DummyTabRenderProps, DummyTabSkeletonProps, DummyTabSkeletonRef } from './components';
import { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabSkeleton } from './components';
import DummyTabs from './DummyTabs';
export declare const constants: {
    __DEFAULT_DUMMY_TAB_BORDER_WIDTH__: import("../../../..").ThemeBorderWidth;
    __DEFAULT_DUMMY_TAB_IS_COMPACT__: false;
    __DEFAULT_DUMMY_TAB_IS_UPPERCASE__: false;
    __DEFAULT_DUMMY_TABS_ALIGN__: DummyTabsAlign;
    __DEFAULT_DUMMY_TABS_ID__: string;
    __DEFAULT_DUMMY_TABS_INDEX__: 0;
    __DEFAULT_DUMMY_TABS_IS_ANIMATED__: true;
    __DEFAULT_DUMMY_TABS_IS_FITTED__: false;
    __DEFAULT_DUMMY_TABS_ORIENTATION__: DummyTabsOrientation;
    __DEFAULT_DUMMY_TABS_SIZE__: DummyTabsSize;
    __DEFAULT_DUMMY_TABS_TAB_LINE_HEIGHT_SIZE__: import("../../../..").ThemeLineHeight;
};
export declare const keys: {
    __KEY_DUMMY_TAB_SKELETON_CLASS__: "ds-cl-dummy-tabs-skeleton";
    __KEYS_DUMMY_TABS_TAB_PANELS_CLASS__: "ds-cl-dummy-tabs-tab-panels";
    __KEYS_DUMMY_TABS_TAB_LIST_CLASS__: "ds-cl-dummy-tabs-tab-list";
    __KEYS_DUMMY_TAB_ICON_CLASS__: "ds-cl-dummy-tabs-tab-icon";
    __KEYS_DUMMY_TAB_CLASS__: "ds-cl-dummy-tabs-tab";
    __KEYS_DUMMY_TABS_CLASS__: "ds-cl-dummy-tabs";
};
export * as utils from './common/utils';
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
        fontSize: import("../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../..").ThemeSpacing>;
        spacing: import("../../../..").ThemeSpacing;
    };
    useDummyTabsContext: <Element_3 extends import("react").ElementType = "div">() => {
        color: DummyTabsProps<Element_3>["color"];
        colorMode: DummyTabsProps<Element_3>["colorMode"];
        align: DummyTabsAlign;
        id: string | DummyTabsProps<Element_3>["id"];
        index: number;
        isAnimated: boolean;
        isFitted: boolean;
        orientation: DummyTabsOrientation;
        size: DummyTabsSize;
        spacing: import("../../../..").ThemeSpacing;
    };
    useDummyTabsDummyTabFontSize: <Element_4 extends import("react").ElementType = "div">(props: {
        size: DummyTabsProps<Element_4>["size"];
    }) => number;
};
export { DummyTab, DummyTabIcon, DummyTabList, DummyTabPanels, DummyTabs, DummyTabSkeleton };
export type { DummyTabIconDefaultElement, DummyTabIconElement, DummyTabIconProps, DummyTabIconRef, DummyTabListProps, DummyTabListRef, DummyTabListRenderProps, DummyTabPanelProps, DummyTabPanelsProps, DummyTabPanelsRef, DummyTabProps, DummyTabRef, DummyTabRenderProps, DummyTabsAlign, DummyTabsContext, DummyTabSkeletonProps, DummyTabSkeletonRef, DummyTabsOrientation, DummyTabsProps, DummyTabsRef, DummyTabsSize };
//# sourceMappingURL=index.d.ts.map