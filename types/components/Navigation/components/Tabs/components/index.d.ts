import type { TabDefaultElement, TabElement, TabMouseEvent, TabProps, TabRef, TabRenderProps } from './Tab';
import { Tab } from './Tab';
import type { TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef } from './TabIcon';
import { TabIcon } from './TabIcon';
import type { TabListProps, TabListRef, TabListRenderProps } from './TabList';
import { TabList } from './TabList';
import type { TabPanelProps, TabPanelsProps, TabPanelsRef } from './TabPanels';
import { TabPanels } from './TabPanels';
export declare const constants: {
    __DEFAULT_TAB_BORDER_WIDTH__: import("../../../../..").ThemeBorderWidth;
    __DEFAULT_TAB_IS_ACTIVE__: false;
    __DEFAULT_TAB_IS_COMPACT__: false;
    __DEFAULT_TAB_IS_DISABLED__: false;
    __DEFAULT_TAB_IS_UPPERCASE__: false;
};
export declare const keys: {
    __KEYS_TABS_TAB_PANELS_CLASS__: "ds-cl-tabs-tab-panels";
    __KEYS_TABS_TAB_LIST_CLASS__: "ds-cl-tabs-tab-list";
    __KEYS_TAB_ICON_CLASS__: "ds-cl-tabs-tab-icon";
    __KEYS_TAB_CLASS__: "ds-cl-tabs-tab";
};
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
        fontSize: import("../../../../..").ThemeFontSize;
        padding: Record<"x" | "y", import("../../../../..").ThemeSpacing>;
        spacing: import("../../../../..").ThemeSpacing;
    };
};
export { Tab, TabIcon, TabList, TabPanels };
export type { TabDefaultElement, TabElement, TabIconDefaultElement, TabIconElement, TabIconProps, TabIconRef, TabListProps, TabListRef, TabListRenderProps, TabMouseEvent, TabPanelProps, TabPanelsProps, TabPanelsRef, TabProps, TabRef, TabRenderProps };
//# sourceMappingURL=index.d.ts.map