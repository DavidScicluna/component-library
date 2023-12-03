import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { SwitchLabelPosition, SwitchProps } from '../types';
type UseSwitchResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SwitchProps<Element>, 'hasIOLabel' | 'isActive' | 'isChecked' | 'isClickable' | 'isCompact' | 'isDisabled' | 'isError' | 'isFocused' | 'isOutlined' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'labelPosition' | 'size'>;
declare const useSwitchResponsiveValues: <Element_1 extends ElementType = "div">(props: UseSwitchResponsiveValuesProps<Element_1>) => {
    hasIOLabel: boolean;
    isActive: boolean;
    isChecked: boolean;
    isClickable: boolean;
    isCompact: boolean;
    isDisabled: boolean;
    isError: boolean;
    isFocused: boolean;
    isOutlined: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isSuccess: boolean;
    isWarning: boolean;
    labelPosition: SwitchLabelPosition;
    size: import("../../../..").FormsCommonSize;
};
export default useSwitchResponsiveValues;
//# sourceMappingURL=useSwitchResponsiveValues.d.ts.map