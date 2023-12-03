import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { CheckboxLabelPosition, CheckboxProps } from '../types';
type UseCheckboxResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CheckboxProps<Element>, 'isActive' | 'isChecked' | 'isClickable' | 'isCompact' | 'isDisabled' | 'isError' | 'isFocused' | 'isIndeterminate' | 'isOutlined' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'labelPosition' | 'size'>;
declare const useCheckboxResponsiveValues: <Element_1 extends ElementType = "div">(props: UseCheckboxResponsiveValuesProps<Element_1>) => {
    isActive: boolean;
    isChecked: boolean;
    isClickable: boolean;
    isCompact: boolean;
    isDisabled: boolean;
    isError: boolean;
    isFocused: boolean;
    isIndeterminate: boolean;
    isOutlined: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isSuccess: boolean;
    isWarning: boolean;
    labelPosition: CheckboxLabelPosition;
    size: import("../../../..").FormsCommonSize;
};
export default useCheckboxResponsiveValues;
//# sourceMappingURL=useCheckboxResponsiveValues.d.ts.map