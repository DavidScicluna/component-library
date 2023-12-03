import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { IconProps } from '@components/DataDisplay';
import type { RadioProps } from '../types';
type RadioIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;
type UseRadioIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<RadioProps<Element>, 'isCompact' | 'size'>;
type UseRadioIconSizeReturn = RadioIconSize;
declare const useRadioIconSize: <Element_1 extends ElementType = "div">(props: UseRadioIconSizeProps<Element_1>) => UseRadioIconSizeReturn;
export default useRadioIconSize;
//# sourceMappingURL=useRadioIconSize.d.ts.map