import type { ClassName } from '@common/types';
import type { IconElement, IconProps } from '../types';
type UseIconClassesProps<Element extends IconElement> = Pick<IconProps<Element>, 'color' | 'colorMode' | 'radius' | 'size' | 'variant'>;
type UseIconClassesReturn = ClassName;
declare const useIconClasses: <Element_1 extends "span">(props: UseIconClassesProps<Element_1>) => UseIconClassesReturn;
export default useIconClasses;
//# sourceMappingURL=useIconClasses.d.ts.map