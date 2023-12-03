/// <reference types="react" />
import type { ButtonGroupContext, ButtonGroupProps, ButtonGroupRef } from './common/types';
import ButtonGroup from './ButtonGroup';
import type { ButtonGroupItemProps, ButtonGroupItemRef } from './components';
import { ButtonGroupItem } from './components';
export declare const constants: {
    __DEFAULT_BUTTON_GROUP_IS_ATTACHED__: false;
};
export declare const keys: {
    __KEYS_BUTTON_GROUP_ITEM_CLASS__: "ds-cl-button-group-item";
    __KEYS_BUTTON_GROUP_CLASS__: "ds-cl-button-group";
};
export declare const hooks: {
    useButtonGroupItemClasses: <Element_1 extends import("react").ElementType = "div">(props: {
        index: ButtonGroupItemProps<Element_1>["index"];
        total: ButtonGroupItemProps<Element_1>["total"];
    }) => string;
    useButtonGroupContext: <Element_2 extends import("react").ElementType = "div">() => {
        color: ButtonGroupProps<Element_2>["color"];
        colorMode: ButtonGroupProps<Element_2>["colorMode"];
        direction: import("../../../..").FlexDirectionClass;
        isAttached: boolean;
        isCompact: ButtonGroupProps<Element_2>["isCompact"];
        isDisabled: ButtonGroupProps<Element_2>["isDisabled"];
        isFullWidth: ButtonGroupProps<Element_2>["isFullWidth"];
        isRound: ButtonGroupProps<Element_2>["isRound"];
        size: ButtonGroupProps<Element_2>["size"];
        variant: ButtonGroupProps<Element_2>["variant"];
    };
};
export { ButtonGroup, ButtonGroupItem };
export type { ButtonGroupContext, ButtonGroupItemProps, ButtonGroupItemRef, ButtonGroupProps, ButtonGroupRef };
//# sourceMappingURL=index.d.ts.map