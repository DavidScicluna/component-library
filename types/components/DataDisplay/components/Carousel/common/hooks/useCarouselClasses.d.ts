import type { ElementType } from 'react';
import type { ClassName, PolymorphicDefaultElement } from '@common/types';
import type { CarouselProps } from '../types';
type UseCarouselClassesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<CarouselProps<Element>, 'variant' | 'orientation' | 'spacing'>;
type UseCarouselClassesReturn = Record<'items' | 'item', ClassName> & {
    overflow: Record<'hidden' | 'auto', ClassName>;
};
declare const useCarouselClasses: <Element_1 extends ElementType = "div">(props: UseCarouselClassesProps<Element_1>) => UseCarouselClassesReturn;
export default useCarouselClasses;
//# sourceMappingURL=useCarouselClasses.d.ts.map