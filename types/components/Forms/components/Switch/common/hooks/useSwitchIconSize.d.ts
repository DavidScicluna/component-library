import type { ElementType } from 'react';
import type { PolymorphicDefaultElement } from '@common/types';
import type { IconProps } from '@components/DataDisplay';
import type { SwitchProps } from '../types';
type SwitchIconSize = Pick<IconProps, 'w' | 'h' | 'size'>;
type UseSwitchIconSizeProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<SwitchProps<Element>, 'isCompact' | 'size'>;
type UseSwitchIconSizeReturn = SwitchIconSize;
declare const useSwitchIconSize: <Element_1 extends ElementType = "div">(props: UseSwitchIconSizeProps<Element_1>) => UseSwitchIconSizeReturn;
export default useSwitchIconSize;
//# sourceMappingURL=useSwitchIconSize.d.ts.map