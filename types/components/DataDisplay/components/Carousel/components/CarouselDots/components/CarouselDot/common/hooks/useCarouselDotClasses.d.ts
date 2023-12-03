import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { CarouselDotProps } from '../types';
type UseCarouselDotClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CarouselDotProps<Element>, 'color' | 'colorMode' | 'size'> & {
    isVisible: boolean;
};
type UseCarouselDotClassesReturn = Record<'item' | 'scale100' | 'scale75' | 'scale50', ClassName>;
declare const useCarouselDotClasses: <Element_1 extends ElementType = "div">(props: UseCarouselDotClassesProps<Element_1>) => UseCarouselDotClassesReturn;
export default useCarouselDotClasses;
//# sourceMappingURL=useCarouselDotClasses.d.ts.map