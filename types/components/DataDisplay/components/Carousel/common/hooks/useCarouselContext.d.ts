import type { ElementType } from 'react';
import type { ThemeSpacing } from '@common/types';
import type { CarouselOrientation, CarouselScrollAmount, CarouselVariant } from '../types';
declare const useCarouselContext: <Element_1 extends ElementType = "div">() => {
    color: import("../types").CarouselProps<Element_1>["color"];
    colorMode: import("../types").CarouselProps<Element_1>["colorMode"];
    id: string | import("../types").CarouselProps<Element_1>["id"];
    items: import("../types").CarouselItems;
    visibleItems: import("../types").CarouselVisibleItems;
    scrollAmount: CarouselScrollAmount;
    spacing: ThemeSpacing;
    orientation: CarouselOrientation;
    variant: CarouselVariant;
};
export default useCarouselContext;
//# sourceMappingURL=useCarouselContext.d.ts.map