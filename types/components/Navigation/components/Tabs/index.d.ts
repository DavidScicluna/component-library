/// <reference types="react" />
import type { TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize } from './common/types';
import type { TabDefaultElement, TabElement, TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef, TabListProps, TabListRef, TabListRenderProps, TabMouseEvent, TabPanelProps, TabPanelsProps, TabPanelsRef, TabProps, TabRef, TabRenderProps } from './components';
import { Tab, TabIcon, TabList, TabPanels } from './components';
import Tabs from './Tabs';
export declare const constants: {
    __DEFAULT_TAB_BORDER_WIDTH__: import("../../../..").ThemeBorderWidth;
    __DEFAULT_TAB_IS_ACTIVE__: false;
    __DEFAULT_TAB_IS_COMPACT__: false;
    __DEFAULT_TAB_IS_DISABLED__: false;
    __DEFAULT_TAB_IS_UPPERCASE__: false;
    __DEFAULT_TABS_ALIGN__: TabsAlign;
    __DEFAULT_TABS_ID__: string;
    __DEFAULT_TABS_INDEX__: 0;
    __DEFAULT_TABS_IS_DISABLED__: false;
    __DEFAULT_TABS_IS_FITTED__: false;
    __DEFAULT_TABS_ORIENTATION__: TabsOrientation;
    __DEFAULT_TABS_SIZE__: TabsSize;
    __DEFAULT_TABS_TAB_LINE_HEIGHT_SIZE__: import("../../../..").ThemeLineHeight;
};
export declare const keys: {
    __KEYS_TABS_TAB_PANELS_CLASS__: "ds-cl-tabs-tab-panels";
    __KEYS_TABS_TAB_LIST_CLASS__: "ds-cl-tabs-tab-list";
    __KEYS_TAB_ICON_CLASS__: "ds-cl-tabs-tab-icon";
    __KEYS_TAB_CLASS__: "ds-cl-tabs-tab";
    __KEYS_TABS_CLASS__: "ds-cl-tabs";
};
export * as utils from './common/utils';
export declare const hooks: {
    useTabClasses: <Element_1 extends "button" = "button">(props: Pick<TabProps<Element_1>, "color" | "colorMode" | "isActive" | "isDisabled" | "isCompact" | "isUppercase"> & {
        isFocused: boolean;
    }) => {
        label: string;
        tab: string;
        topDivider: string;
        bottomDivider: string;
    };
    useTabSizeConfig: <Element_2 extends "button" = "button">(props: {
        isCompact?: TabProps<Element_2>["isCompact"] | undefined;
    }) => {
        fontSize: import("../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../..").ThemeSpacing>;
        spacing: import("../../../..").ThemeSpacing;
    };
    useTabsContext: <Element_3 extends import("react").ElementType = "div">() => {
        color: TabsProps<Element_3>["color"];
        colorMode: TabsProps<Element_3>["colorMode"];
        align: TabsAlign;
        id: string | TabsProps<Element_3>["id"];
        index: number;
        isDisabled: boolean;
        isFitted: boolean;
        onChange: (() => undefined) | TabsProps<Element_3>["onChange"];
        orientation: TabsOrientation;
        size: TabsSize;
        spacing: import("../../../..").ThemeSpacing;
    };
    useTabsTabFontSize: <Element_4 extends import("react").ElementType = "div">(props: {
        size: TabsProps<Element_4>["size"];
    }) => number;
};
export { Tab, TabIcon, TabList, TabPanels, Tabs };
export type { TabDefaultElement, TabElement, TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef, TabListProps, TabListRef, TabListRenderProps, TabMouseEvent, TabPanelProps, TabPanelsProps, TabPanelsRef, TabProps, TabRef, TabRenderProps, TabsAlign, TabsContext, TabsOrientation, TabsProps, TabsRef, TabsSize };
//# sourceMappingURL=index.d.ts.map