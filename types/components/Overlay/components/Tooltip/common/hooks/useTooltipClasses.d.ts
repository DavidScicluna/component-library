import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { TooltipProps } from '../types';
type UseTooltipClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<TooltipProps<Element>, 'color' | 'colorMode'>;
type UseTooltipClassesReturn = Record<'tooltip' | 'arrow' | 'content', ClassName>;
declare const useTooltipClasses: <Element_1 extends ElementType = "div">(props: UseTooltipClassesProps<Element_1>) => UseTooltipClassesReturn;
export default useTooltipClasses;
//# sourceMappingURL=useTooltipClasses.d.ts.map