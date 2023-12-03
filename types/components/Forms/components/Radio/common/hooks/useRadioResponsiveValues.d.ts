import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { RadioLabelPosition, RadioProps } from '../types';
type UseRadioResponsiveValuesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RadioProps<Element>, 'isActive' | 'isChecked' | 'isClickable' | 'isCompact' | 'isDisabled' | 'isError' | 'isFocused' | 'isOutlined' | 'isReadOnly' | 'isRequired' | 'isSuccess' | 'isWarning' | 'labelPosition' | 'size'>;
declare const useRadioResponsiveValues: <Element_1 extends ElementType = "div">(props: UseRadioResponsiveValuesProps<Element_1>) => {
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
    labelPosition: RadioLabelPosition;
    size: import("../../../..").FormsCommonSize;
};
export default useRadioResponsiveValues;
//# sourceMappingURL=useRadioResponsiveValues.d.ts.map