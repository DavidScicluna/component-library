import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { IconProps } from '@components/DataDisplay';
import type { CheckboxProps } from '../types';
type CheckboxIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;
type UseCheckboxIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CheckboxProps<Element>, 'isCompact' | 'size'>;
type UseCheckboxIconSizeReturn = CheckboxIconSize;
declare const useCheckboxIconSize: <Element_1 extends ElementType = "div">(props: UseCheckboxIconSizeProps<Element_1>) => UseCheckboxIconSizeReturn;
export default useCheckboxIconSize;
//# sourceMappingURL=useCheckboxIconSize.d.ts.map