/// <reference types="react" />
import type { IconButtonGroupContext, IconButtonGroupProps, IconButtonGroupRef } from './common/types';
import type { IconButtonGroupItemProps, IconButtonGroupItemRef } from './components';
import { IconButtonGroupItem } from './components';
import IconButtonGroup from './IconButtonGroup';
export declare const constants: {
    __DEFAULT_ICON_BUTTON_GROUP_IS_ATTACHED__: false;
};
export declare const keys: {
    __KEYS_ICON_BUTTON_GROUP_ITEM_CLASS__: "ds-cl-icon-button-group-item";
    __KEYS_ICON_BUTTON_GROUP_CLASS__: "ds-cl-icon-button-group";
};
export declare const hooks: {
    useIconButtonGroupItemClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        index: IconButtonGroupItemProps<Element_1>["index"];
        total: IconButtonGroupItemProps<Element_1>["total"];
    }) => string;
    useIconButtonGroupContext: <Element_2 extends import("react").ElementType = "div">() => {
        color: IconButtonGroupProps<Element_2>["color"];
        colorMode: IconButtonGroupProps<Element_2>["colorMode"];
        direction: import("../../../..").FlexDirectionClass;
        isAttached: boolean;
        isCompact: IconButtonGroupProps<Element_2>["isCompact"];
        isDisabled: IconButtonGroupProps<Element_2>["isDisabled"];
        isRound: IconButtonGroupProps<Element_2>["isRound"];
        size: IconButtonGroupProps<Element_2>["size"];
        variant: IconButtonGroupProps<Element_2>["variant"];
    };
};
export { IconButtonGroup, IconButtonGroupItem };
export type { IconButtonGroupContext, IconButtonGroupItemProps, IconButtonGroupItemRef, IconButtonGroupProps, IconButtonGroupRef };
//# sourceMappingURL=index.d.ts.map