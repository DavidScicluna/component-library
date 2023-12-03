/// <reference types="react" />
import type { CarouselDotProps, CarouselDotRef } from './CarouselDot';
import { CarouselDot } from './CarouselDot';
export declare const keys: {
    __KEYS_CAROUSEL_DOT_CLASS__: "ds-cl-carousel-dot";
};
export declare const hooks: {
    useCarouselDotClasses: <Element_1 extends import("react").ElementType = "div">(props: Pick<CarouselDotProps<Element_1>, "color" | "size" | "colorMode"> & {
        isVisible: boolean;
    }) => {
        item: string;
        scale100: string;
        scale75: string;
        scale50: string;
    };
};
export { CarouselDot };
export type { CarouselDotProps, CarouselDotRef };
//# sourceMappingURL=index.d.ts.map